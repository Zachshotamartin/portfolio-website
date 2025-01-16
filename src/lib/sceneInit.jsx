import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
//import Stats from "three/examples/jsm/libs/stats.module.js";
import { createNoise3D } from "simplex-noise";
import { mergeVertices } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
export default class SceneInit {
  scene;
  camera;
  renderer;
  clock;
  //stats;
  text;
  controls;
  ambientLight;
  directionalLightsGroup;
  pointer;
  raycaster;
  icosahedronGroup;
  pointerX;
  pointerY;
  currentScale;
  previousTime;

  noise3D;

  //composer: EffectComposer; // Add this line for the EffectComposer

  constructor(canvasId) {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x6e9ac2);
    this.pointerX = 0;
    this.pointerY = 0;
    this.currentScale = [1, 1, 1, 1];
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    this.camera.position.z = 48;

    const canvas = document.getElementById(canvasId);
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      logarithmicDepthBuffer: true,
      powerPreference: "high-performance",
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio); // Ensure high pixel ratio
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.clock = new THREE.Clock();
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    // this.stats = new Stats();
    // document.body.appendChild(this.stats.dom);

    // Set up the lighting
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.1); // Slight increase in intensity
    this.scene.add(this.ambientLight);

    this.directionalLightsGroup = new THREE.Group();
    for (let i = 0; i < 3; i++) {
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(0, 10, 0);
      directionalLight.target.position.set(0, -1, 0);
      directionalLight.castShadow = true;
      directionalLight.shadow.mapSize.width = 4096; // Higher width
      directionalLight.shadow.mapSize.height = 4096; // Higher height
      directionalLight.shadow.camera.near = 1;
      directionalLight.shadow.camera.far = 1000;
      directionalLight.shadow.camera.left = -200;
      directionalLight.shadow.camera.right = 200;
      directionalLight.shadow.camera.top = 200;

      this.directionalLightsGroup.add(directionalLight);
    }
    this.directionalLightsGroup.children[1].position.set(-20, 0, 20);
    this.directionalLightsGroup.children[1].target.position.set(0, 0, 0);
    this.directionalLightsGroup.children[2].position.set(20, 0, 20);
    this.directionalLightsGroup.children[2].target.position.set(0, 0, 0);

    this.scene.add(this.directionalLightsGroup);
    // Increase the shadow map resolution

    // const directionalLightHelper = new THREE.DirectionalLightHelper(
    //   this.directionalLightsGroup.children[1] as THREE.DirectionalLight,
    //   5,
    //   0xffffff
    // );
    // this.scene.add(directionalLightHelper);

    window.addEventListener("resize", this.onWindowResize.bind(this), false);

    // Icosahedron geometry

    // const planeGeometry = new THREE.PlaneGeometry(200, 100, 100, 50);
    // const planeMaterial = new THREE.MeshLambertMaterial({
    //   color: 0xffffff,
    //   emissive: 0x000000,
    //   side: THREE.DoubleSide,
    //   wireframe: true,
    // });

    // this.planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
    // this.planeMesh.rotation.x = Math.PI / 2; // Rotate the plane to match the y-axis
    // this.planeMesh.receiveShadow = true;
    // this.planeMesh.position.y = -10;

    // this.scene.add(this.planeMesh);

    // Material setup with vertex colors enabled

    const icosahedronMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      vertexColors: true,
      emissive: 0xffffff,
      wireframe: true,
      roughness: 0.0, // Lower roughness for more shine
      metalness: 1, // Higher metalness for a metallic look
    });

    this.icosahedronGroup = new THREE.Group();
    for (let i = 0; i < 1; i++) {
      const icosahedronGeometry = new THREE.IcosahedronGeometry(2.5, 10); // Higher subdivisions for a smoother mesh

      // Merge vertices for smooth shading
      const mergedGeometry = mergeVertices(icosahedronGeometry);
      mergedGeometry.computeVertexNormals(); // Recalculate normals for smooth shading
      const icosahedronMesh = new THREE.Mesh(
        mergedGeometry,
        icosahedronMaterial
      );
      icosahedronMesh.castShadow = true;
      icosahedronMesh.receiveShadow = true;
      icosahedronMesh.position.y = -2.5;
      icosahedronMesh.position.x = 0;

      this.icosahedronGroup.add(icosahedronMesh);
    }
    this.scene.add(this.icosahedronGroup);

    this.pointer = new THREE.Vector2();
    this.raycaster = new THREE.Raycaster();

    // Initialize the 3D noise function
    this.noise3D = createNoise3D();

    // Start the animation loop
    this.animate();

    const onMouseMove = (event) => {
      // Update pointer position normalized to [-1, 1] range
      this.pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Set up raycaster
      this.raycaster.setFromCamera(this.pointer, this.camera);

      // Create a plane at z = 0 (world space)
      const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0); // Normal is along Z axis, offset is 0 (at z = 0)

      // Calculate the intersection point between the ray and the plane
      const intersectPoint = new THREE.Vector3();
      this.raycaster.ray.intersectPlane(plane, intersectPoint);

      // The intersectPoint will give us the 3D coordinates of the intersection
      // We want the x and y values where z = 0
      if (intersectPoint) {
        this.pointerX = intersectPoint.x;
        this.pointerY = intersectPoint.y;
      }
    };

    window.addEventListener("mousemove", onMouseMove);
  }

  updateSphereGeometry(mesh, index, multiplier) {
    if (!mesh.geometry) {
      console.error("Mesh geometry is undefined.");
      return;
    }

    const time = this.clock.getElapsedTime();
    const geometry = mesh.geometry;

    // Save original positions if not already saved
    if (!geometry.userData.originalPositions) {
      const originalPositions = geometry.attributes.position.array.slice();
      geometry.userData.originalPositions = originalPositions;
    }

    const originalPositions = geometry.userData.originalPositions;
    const positions = geometry.attributes.position;

    // Create color attribute if not present
    if (!geometry.attributes.color) {
      const colors = new Float32Array(positions.count * 3); // RGB for each vertex
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    }

    const colors = geometry.attributes.color;

    for (let i = 0; i < positions.count; i++) {
      const x = originalPositions[i * 3];
      const y = originalPositions[i * 3 + 1];
      const z = originalPositions[i * 3 + 2];

      // Generate noise values for independent random movement
      const noise1 = this.noise3D(x * 0.3 + index * 10, y * 0.3, time * 0.1);
      const noise2 = this.noise3D(y * 0.3, z * 0.3 + index * 10, time * 0.2);
      const noise3 = this.noise3D(z * 0.3, x * 0.3 + index * 10, time * 0.3);

      // Compute radial distance
      // const radius = Math.sqrt(x * x + y * y + z * z);

      // Generate noise values for independent random movement

      // Combine noise values for random behavior
      const combinedNoise = (noise1 + noise2 + noise3) / 3;

      // Modulate noise using radius for added variation
      // combinedNoise *= radius * 0.5;

      // Apply an exponential function to amplify peaks and valleys
      const amplifiedNoise = Math.abs(Math.pow(Math.abs(combinedNoise), 1));

      // Calculate the difference in angle between (this.pointerX, this.pointerY) and the point(x, y)
      // const centerX = 0; // assuming the center of the icosahedron is at (0, 0, 0)
      // const centerY = 0;
      // const relativeX = x - centerX;
      // const relativeY = y - centerY;

      // const dotProduct = this.pointerX * relativeX + this.pointerY * relativeY;
      // const magnitude1 = Math.sqrt(
      //   this.pointerX * this.pointerX + this.pointerY * this.pointerY
      // );
      // const magnitude2 = Math.sqrt(
      //   relativeX * relativeX + relativeY * relativeY
      // );
      // const angleDifference =
      //   Math.pow(
      //     1 - Math.acos(dotProduct / (magnitude1 * magnitude2)) / Math.PI,
      //     2
      //   ) * 2;

      // Scale based on amplified noise

      const scale = 1 + amplifiedNoise * multiplier;

      positions.setXYZ(i, x * scale, y * scale, z * scale);

      // Map radius to a color gradient (e.g., blue at the center, red at peaks)
      colors.setXYZ(i, 200, 200, 200);
    }

    positions.needsUpdate = true;
    colors.needsUpdate = true;
    geometry.computeVertexNormals();
  }

  animate() {
    if (
      this.previousTime === undefined ||
      this.clock.getElapsedTime() - this.previousTime > 0.01
    ) {
      this.previousTime = this.clock.getElapsedTime();
      for (let i = 0; i < this.icosahedronGroup.children.length; i++) {
        const icosahedronMesh = this.icosahedronGroup.children[i];
        if (icosahedronMesh) {
          const intersects = this.raycaster.intersectObject(icosahedronMesh);

          if (intersects.length > 0) {
            this.currentScale[i] = this.currentScale[i] || 1;
            if (this.currentScale[i] < 3) {
              this.currentScale[i] += 0.05;
            }
          } else {
            if (this.currentScale[i] > 1) {
              this.currentScale[i] -= 0.05;
            }
          }
          this.updateSphereGeometry(icosahedronMesh, i, this.currentScale[i]);
        } else {
          console.error("Icosahedron mesh is undefined in animate.");
        }
      }
    }

    this.render();
    //this.stats.update();
    this.controls.update();
    window.requestAnimationFrame(() => this.animate());
  }

  render() {
    //this.composer.render();
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    //this.composer.setSize(window.innerWidth, window.innerHeight); // Update composer size
  }
}
