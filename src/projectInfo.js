import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "./config/firebase";

const getImageFromStorage = async (imageName) => {
  if (!imageName) throw new Error("Image name is required.");
  const imageRef = ref(storage, imageName); // Correct path reference
  try {
    const url = await getDownloadURL(imageRef); // Fetch the URL
    return url;
  } catch (error) {
    console.error(`Error fetching ${imageName}:`, error.message);
    throw error;
  }
};
const fetchProjectData = async () => {
  try {
    const GreenlightImages = await Promise.all([
      getImageFromStorage("greenlight.png"),
      getImageFromStorage("greenlight1.jpeg"),
      getImageFromStorage("greenlight2.jpeg"),
      getImageFromStorage("greenlight3.jpeg"),
    ]);

    const FocusMedia = await Promise.all([
      getImageFromStorage("focus.png"),
      getImageFromStorage("focusVid1.mov"),
      getImageFromStorage("focusVid2.mov"),
      getImageFromStorage("focusVid3.mov"),
    ]);

    const RayTracerImages = await Promise.all([
      getImageFromStorage("raytrace.png"),
      getImageFromStorage("raytrace1.png"),
      getImageFromStorage("raytrace2.png"),
      getImageFromStorage("raytrace3.png"),
    ]);

    const RayTracerVideos = await getImageFromStorage("raytraceVid1.mov");

    const KumoMedia = await Promise.all([
      getImageFromStorage("kumo.png"),
      getImageFromStorage("KumoVid1.mov"),
      getImageFromStorage("KumoVid2.mov"),
      getImageFromStorage("KumoVid3.mov"),
    ]);

    const ComputerVisionImage = await getImageFromStorage("computervision.png");

    const projects = {
      project1: {
        title: "greenlight",
        description: "Greenlight is a dating app aiming to ...",
        imageUrls: GreenlightImages,
        videoUrls: [],
        github: "https://github.com/Zachshotamartin/greenlight",
        builtUsing: ["React Native", "Expo", "Firebase", "Figma"],
      },
      project2: {
        title: "focus",
        description: "Focus aims to serve as a productivity aid ...",
        imageUrls: [FocusMedia[0]],
        videoUrls: FocusMedia.slice(1),
        github: "https://github.com/Zachshotamartin/focus",
        builtUsing: [
          "Vite",
          "React",
          "Google Auth2.0",
          "GoogleCalendar API",
          "OpenAi API",
          "ExpressJS",
        ],
      },
      project3: {
        title: "raytracing",
        description: "As a computer graphics major, I learned ...",
        imageUrls: RayTracerImages,
        videoUrls: [RayTracerVideos],
        github: "https://github.com/Zachshotamartin/RayTracer",
        builtUsing: ["C++", "OpenGL"],
      },
      project4: {
        title: "kumo",
        description: "Kumo is a collaborative infinite whiteboard ...",
        imageUrls: [KumoMedia[0]],
        videoUrls: KumoMedia.slice(1),
        link: "https://kumo-7d8e1.web.app/",
        github: "https://github.com/Zachshotamartin/Kumo",
        builtUsing: [
          "React",
          "Firestore DB",
          "Firebase Auth",
          "Firebase Storage",
        ],
      },
      project5: {
        title: "computervision",
        description: "",
        imageUrls: [ComputerVisionImage],
        videoUrls: [],
        github: "",
        builtUsing: ["Python", "Yolov8", "sklearn", "C++"],
      },
    };

    return projects;
  } catch (error) {
    console.error("Error fetching project data:", error.message);
    throw error;
  }
};

export const fetchAthleticsVideo = async () => {
  try {
    const videoUrls = await 
      getImageFromStorage("gymvideo.mp4")
    return videoUrls;
  } catch (error) {
    console.error("Error fetching project data:", error.message);
    throw error;
  }
};

export default fetchProjectData;
