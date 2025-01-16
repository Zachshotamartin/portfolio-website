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
        description: `Greenlight is a dating app designed to shift the focus from the modern model of endless online swiping back to authentic, in-person connections. Too often, people swipe but never take the next step to meet or seize the moment. Built with React Native, Firebase, and the Google Maps API, Greenlight bridges the gap by bringing swiping into real life. The app only shows you potential matches who are in the same location, giving you the opportunity to connect in person if you both swipe right.

        Through this product, I grew further attuned to the social problems that technology can produce, particularly the ways in which poorly designed or manipulative interfaces can lead to unintended consequences, such as decreased mental well-being, over-reliance on virtual interactions, or superficial engagement. This realization highlighted the importance of ethical UI practices in product design.

        Ethical UI practices ensure that technology serves the user’s best interests, fostering trust and promoting healthier behaviors. For Greenlight, this meant creating an interface that encouraged real-life connections without exploiting addictive tendencies like endless swiping. By designing intentionally, we focused on facilitating meaningful interactions rather than chasing metrics like engagement time or swipe volume.
        
        Ethical design is critical because it shapes how users interact with technology and, ultimately, with each other. It demands empathy, responsibility, and a commitment to putting people first, ensuring that the product adds value to their lives rather than detracting from it. This approach not only creates a better user experience but also builds a foundation of trust between users and technology while ensuring the long-term sustainability of the product.`,
        imageUrls: GreenlightImages,
        videoUrls: [],
        github: "https://github.com/Zachshotamartin/greenlight",
        builtUsing: ["React Native", "Expo", "Firebase", "Figma"],
      },
      project2: {
        title: "focus",
        description: `Focus is a dynamic calendar app built with a combination of Vite, React, Express.js, OpenAI API, and Google Calendar API, leveraging Google Cloud Platform (GCP) for cloud services. This project highlights my experience with cloud computing, API handling, AI prompt engineering, and the separation of frontend and backend REST APIs.

The core functionality of Focus revolves around helping users plan and organize their calendar events more effectively. By integrating the Google Calendar API, users can authenticate via Google Login, importing their existing events seamlessly into the app. Focus then takes things a step further by using the OpenAI API to assist with planning and managing these events.

One key feature is the separation of events into “tasks” and “events.” Events with specific deadlines are automatically treated as tasks and pre-planned accordingly. Additionally, the app features a “Focus” section, where users can swipe through tasks to lock in one to focus on. Once the task is completed, users can remove it from the list, streamlining their productivity.

Key Technical Highlights:
	•	Cloud Computing: By deploying the backend on Google Cloud Platform (GCP), Focus benefits from scalability, reliability, and efficient handling of API calls.
	•	API Handling: The app communicates with both Google Calendar API for event management and OpenAI API for intelligent task planning, showcasing my ability to manage multiple APIs in a seamless manner.
	•	AI Prompt Engineering: The integration of OpenAI API allows Focus to intelligently suggest and plan calendar events based on user inputs, demonstrating my skills in working with AI and machine learning models.
	•	Separation of Frontend and Backend: The app is structured with a clear separation between the frontend (React + Vite) and backend (Express.js), providing a clean architecture for handling user interactions and data management. The REST API facilitates communication between the frontend and backend, ensuring smooth data flow and optimal performance.

By combining these technologies, Focus not only provides a unique approach to calendar management but also demonstrates my expertise in building full-stack applications that leverage cloud services, APIs, and artificial intelligence to optimize user experience.`,
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
        description: `In this project, I implemented a ray-tracing algorithm using C++ and OpenGL to simulate realistic lighting effects and object interactions. Ray tracing is a rendering technique that traces the path of light as rays through pixels in an image plane, producing highly accurate and photorealistic visuals. The codebase was developed using Object-Oriented Programming (OOP) principles to ensure modularity, scalability, and maintainability.

Key Features
	1.	Lighting Models:
    •	Implemented Blinn-Phong shading to simulate specular highlights and diffuse reflection.
    •	Added support for reflection and refraction to handle transparent and reflective surfaces.
	2.	Shadow Casting:
	  •	Developed shadow rays to identify objects blocking light sources, creating realistic soft and hard shadows.
	3.	BSDF Rendering:
	  •	Incorporated Bidirectional Scattering Distribution Function (BSDF) for accurate light-material interactions, enabling the rendering of materials like glass, metals, and plastics.
	4.	Optimized Performance:
	  •	Utilized spatial partitioning techniques, such as bounding volume hierarchies (BVH), to accelerate ray-object intersection tests.
	5.	Object-Oriented Design:
	  •	Encapsulated key components such as Ray, Material, Light, and Scene into reusable classes.
	  •	Applied polymorphism and inheritance for flexible handling of different object types, such as spheres, planes, and custom meshes.
	  •	Ensured separation of concerns, making it easier to expand features or debug specific functionalities.

What I Learned

This project deepened my understanding of computer graphics and the mathematical foundations of rendering. I gained hands-on experience with:
	•	Designing clean and extensible OOP architectures for complex systems.
	•	Optimizing computationally heavy algorithms to achieve real-time rendering.
	•	Managing complex data structures like meshes and scene graphs.
	•	Balancing realism and performance in rendering pipelines.

Ray tracing challenged me to think critically about the trade-offs between visual fidelity and computational constraints. It also strengthened my skills in debugging and optimizing low-level graphics code while adhering to OOP best practices for a robust and efficient implementation.`,
        imageUrls: RayTracerImages,
        videoUrls: [RayTracerVideos],
        github: "https://github.com/Zachshotamartin/RayTracer",
        builtUsing: ["C++", "OpenGL"],
      },
      project4: {
        title: "kumo",
        description: `Kumo is a versatile life organizer, project planner, and infinite whiteboard that draws inspiration from both Notion and Figma. It combines the best elements of these two powerful tools to provide users with a flexible and interactive workspace. From Figma, Kumo inherits the freedom to create and edit shapes on a digital whiteboard, while from Notion, it gains the ability to link different pages and boards together, allowing users to organize their projects and ideas seamlessly.

The app empowers users to shape their boards in any formation they desire. They can link their boards to one another, creating complex structures like mind maps, where each section can have its own separate board. This gives users the freedom to organize their thoughts, projects, and tasks in an intuitive, visually engaging way.

Key Features:
	•	Freeform Whiteboard: Create and manipulate shapes and designs on an infinite whiteboard, allowing for total flexibility in how you structure your workspace.
	•	Board Linkability: Link different boards together to create complex project hierarchies, mind maps, or organized workflows. This enables users to break down large projects into smaller, manageable sections.
	•	State Management with React Redux: Using React Redux, Kumo effectively manages the state of local boards, ensuring smooth interaction between elements while updating and syncing changes with Firestore.
	•	Event Listeners for Interactivity: With a solid understanding of event listeners, I was able to implement smooth interactivity within the whiteboard, enabling users to interact with various elements and perform actions like dragging, resizing, and rotating shapes.
	•	Zooming and Translations: Leveraging my graphics knowledge, I implemented zooming and translation features that allow users to zoom in and out of their boards while maintaining the relative positioning of elements, offering a seamless user experience.
	•	Collaborative Features: Kumo incorporates powerful collaboration features, allowing users to share boards with others. You can set boards to public (anyone can download a copy), private (only you have access), or shared (shared with other users via email). This makes it easy to collaborate on projects and share your ideas with others.

Technologies Used:
	•	React: The frontend of Kumo is built with React, providing a fast and responsive user interface that is easy to interact with.
	•	Firebase Authentication: Firebase Auth is used to manage user logins, ensuring secure access to the app.
	•	Firebase Firestore & Storage: Firestore is used to store and retrieve board data, while Firebase Storage handles file uploads and retrievals.
	•	React Redux: Redux is used to manage and share the state of boards, ensuring that updates to the board are reflected across the app in real time.

Kumo serves as a powerful tool for organizing life, managing projects, and collaborating with others. It showcases my ability to combine graphics knowledge, web development skills, and cloud-based services to create a flexible, interactive platform that helps users stay organized, productive, and connected.`,
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
    const videoUrls = await getImageFromStorage("gymvideo.mp4");
    return videoUrls;
  } catch (error) {
    console.error("Error fetching project data:", error.message);
    throw error;
  }
};

export default fetchProjectData;
