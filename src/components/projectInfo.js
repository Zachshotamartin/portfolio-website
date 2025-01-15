import GreenlightImage from "../res/images/greenlight.png";
import FocusImage from "../res/images/focus.png";
import RayTracerImage from "../res/images/raytrace.png";
import KumoImage from "../res/images/kumo.png";
import ComputerVisionImage from "../res/images/computervision.png";

export const projects = {
  project1: {
    title: "greenlight",
    description:
      "Greenlight is a dating app aiming to change the framework of traditional messaging based dating apps. I wanted to maintain the convenience that comes with digital dating but bring back the fundamental in-person nature of dating that makes relationships from current dating apps unsuccessful.As this was my first venture into app development, I learned many things in regard to the whole app development cycle including design, feedback, and development. However, I believe my most important takeaway from this project was the transition of my leadership skills into a professional context. I was fundamental in the division of labor conversation and heavily invested making sure our team met deadlines.",
    imageUrl: GreenlightImage,
  },
  project2: {
    title: "focus",
    description:
      "Focus aims to serve as a productivity aid. As students, we wanted a method to convert the mess that is our busy calendars into action to prevent our own procrastination. We include features such as an AI assisted calendar planner, but the flagship feature comes from taking calendar items / new tasks and presenting them in a dating app swiping format that allows us to choose a task to complete. As decision fatigue is real for busy people, completing any task is better than procrastinating everything.",
    imageUrl: FocusImage,
  },
  project3: {
    title: "raytracing",
    description:
      "As a computer graphics major, I learned various rendering lighting methods including ray tracing, bling-phong-reflection, transmission, shadows, and, bsdf rendering. Furthermore, I worked with meshes and created mesh algorithms such as subdivision and extrusion from the ground up using the mesh element pointer system.",
    imageUrl: RayTracerImage,
  },
  project4: {
    title: "kumo",
    description:
      "Kumo is a collaborative infinite whiteboard written in react, taking elements from Figma and Notion. It allows for the organizational flexibility that comes with Figma and the ordered page linking functionality that comes with Notion.",
    imageUrl: KumoImage,
  },
  project5: {
    title: "computervision",
    description: "",
    imageUrl: ComputerVisionImage,
  },
};
