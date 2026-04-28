export type Product = {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  price?: number;
  images: string[];
  category?: string;
  features?: string[];
};

export const productsData: Product[] = [
  {
    id: "kudos",
    title: "Kudos Learning Robot",
    shortDescription: "KUDOS Coding Starter Set lays the foundations for computational literacy for children as young as four.",
    fullDescription: "The KUDOS Coding Starter Set is a revolutionary hands-on educational robot designed specifically for early childhood education. It bridges the gap between physical play and digital logic. Without needing a screen, children learn core programming concepts such as sequencing, functions, loops, and subroutines by physically placing coding blocks. It is built to withstand the rigorous environment of a classroom and is highly engaging.",
    images: [
      "/images/products/kudos/kudos1.png",
      "/images/products/kudos/kudos2.png",
      "/images/products/kudos/kudos3.png",
      "/images/products/kudos/kudos4.png"
    ],
    price: 50,
    category: "Cognitive-Learning-Tools",
    features: [
      "Screen-free coding experience",
      "Introduces loops, functions, and logic",
      "Child-safe, durable materials",
      "Includes 20+ coding blocks",
      "Teacher curriculum guide included"
    ]
  },
  {
    id: "ESPTOM",
    title: "ESPTOM AI Module",
    shortDescription: "A LEGO-compatible AI module that adds audio, vision and augmented reality to hands-on projects.",
    fullDescription: "Take your maker projects to the next level with the ESPTOM AI Module. This highly advanced, yet accessible hardware component is fully compatible with LEGO and other building systems. It features an onboard camera for computer vision, an array of microphones for audio processing, and an intelligent processor capable of running localized Machine Learning models. Perfect for middle and high school students stepping into the world of Artificial Intelligence.",
    images: [
      "/images/products/esptom/intellio1.png",
      "/images/products/esptom/intellio2.png",
      "/images/products/esptom/intellio3.png"
    ],
    price: 70,
    category: "Starter-Coding",
    features: [
      "LEGO-compatible design",
      "Onboard camera for Computer Vision",
      "Microphone array for voice commands",
      "Supports Python and Block-based coding",
      "Pre-loaded with 5 AI demonstration models"
    ]
  },
  {
    id: "advanced-drone",
    title: "AeroAI Advanced Drone Kit",
    shortDescription: "A fully programmable drone kit designed to teach aerodynamics, physics, and aerial AI navigation.",
    fullDescription: "The AeroAI Advanced Drone Kit is an enterprise-grade educational tool that brings the excitement of autonomous flight to the classroom. Students can build the drone from scratch, understanding the physics of flight, before programming it using Python. It includes sensors for obstacle avoidance, optical flow for stable hovering, and an SDK that allows students to write custom flight paths and object tracking algorithms.",
    images: [
      "/images/products/drone/drone1.png",
      "/images/products/drone/drone2.png",
      "/images/products/drone/drone3.png"
    ],
    price: 150,
    category: "Advanced-Robotics",
    features: [
      "Modular build-it-yourself drone frame",
      "Obstacle avoidance sensors",
      "Optical flow stabilization",
      "Python SDK for autonomous flight",
      "Includes safety cages and extra propellers"
    ]
  }
];
