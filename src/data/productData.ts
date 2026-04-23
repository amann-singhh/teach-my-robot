export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  price?: number;
  category?: string;
}

export const productsData: Product[] = [
  {
    id: "kudos",
    title: "Kudos Learning Robot",
    description: "KUDOS Coding Starter Set lays the foundations for computational literacy for children as young as four, by introducing functions, loops and subroutines.",
    image: "/images/kudos1.png",
    price: "$50",
    category: "Cognitive-Learning-Tools"
  },
  {
    id: "ESPTOM",
    title: "ESPTOM AI Module",
    description: " a LEGO-compatible AI module that adds audio, vision and augmented reality to hands-on projects.",
    image: "/images/intellio1.png",
    price: "$70",
    category: "Starter-Coding"
  }
];
