import { features } from "process";

interface Product {
  id: number;
  imageUrl: string;
  name: string;
  size: string;
}

export const newProducts = [
  {
    id: 1,
    imageUrl: "/assets/images/newProduct1.webp",
    features: [
      "Dual Zone dual absorbent technology",
      "Reduces loose stools on baby's skin by up to 93%",
      "Limit skin irritation",
    ],
  },
];

export const products = [
  {
    id: 1,
    name: "Huggies Natural Soft Premium Pants",
    description:
      "Our softest diapers made with India's 1st Cloud Touch Belt and goodness of natural cotton",
    image: "/assets/images/product1.jpg",
    size: ["S"],
    type: "Pants",
    features: ["Natural Cotton", "12-hour Absorbency"],
  },
  {
    id: 2,
    name: "Huggies Wonder Pants",
    description:
      "India's fastest absorbing diaper pants with Dry Xpert technology that absorbs 4x faster for up to 12 hours",
    image: "/assets/images/product2.jpg",
    size: ["M", "L"],
    type: "Pants",
    features: ["12-hour Absorbency", "Breathable Air Circulation"],
  },
  {
    id: 3,
    name: "Huggies Comfy Pants",
    description:
      "Diapers with 1000 absorption funnels which absorbs for up to 12 hours for an uninterrupted sleep.",
    image: "/assets/images/product3.jpg",
    size: ["S", "M"],
    type: "Pants",
    features: ["12-hour Absorbency", "Bubble Bed Liner"],
  },
];
