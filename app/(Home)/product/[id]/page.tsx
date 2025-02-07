import Header from "@/components/navbar/Header";
import { notFound } from "next/navigation";

import SingleProduct from "../../../../components/cards/SingleProduct";
import image from "next/image";
import Footer from "@/components/shared/Footer";

interface Size {
  size: string; // e.g., "XS/NB", "S", "M", etc.
  weight: string; // e.g., "0-5 kgs", "4-8 kgs", etc.
  highlight?: boolean; // Optional: true for highlighting specific sizes
}

interface Feature {
  img: string;
  title: string;
  content: string;
}

type Product = {
  id: number;
  name: string;
  tagline: string;
  description: string;
  image: string;
  size: Size[];
  type: string;
  features: Feature[];
};

// Mock product data
const products: Product[] = [
  {
    id: 1,
    name: "Huggies Dry Tape",
    tagline:
      "Our softest diapers made with Nepals's 1st Cloud Touch Belt and goodness of natural cotton",
    description:
      "Introducing our New and Improved Taped diapers with adjustable waistband ensuring a snug fit for your lil one. It's soft Xtra Dry liner absorbs up to 2x faster keeping baby's skin dry and breathable material in allowing baby's skin to breathe.",
    image: "/assets/images/product1.jpg",
    type: "Tape",
    features: [
      {
        img: "/assets/images/P1F1.jpg",
        title: "Up to 2x Faster Absorption",
        content:
          "New & Improved Huggies Dry Tape comes with Xtra Dry Layer to provide up to 2x Faster Absorption",
      },
      {
        img: "/assets/images/P1F2.jpg",
        title: "Snug Fit",
        content:
          "Our adjustable waistband tape diapers provide a snug comfy fit, just like a hug",
      },

      {
        img: "/assets/images/P1F3.jpg",
        title: "Prevents Thigh Leakage",
        content:
          "Our double leak guard provides extra padding to help prevent thigh leakage",
      },
      {
        img: "/assets/images/P1F4.jpg",
        title: "Cottony Soft Feel",
        content:
          "Made with soft material which gives cotton like softness for your baby's delicate skin",
      },
      {
        img: "/assets/images/P1F5.jpg",
        title: "Breathable Material",
        content:
          "Made from breathable material our diapers help in allowing baby's skin to breathe",
      },
    ],
    size: [
      { size: "XS/NB", weight: "0-5 kgs" },
      { size: "S", weight: "4-8 kgs" },
      { size: "M", weight: "7-12 kgs" },
      { size: "L", weight: "9-14 kgs" },
      { size: "XL", weight: "12-17 kgs" },
      { size: "XXL", weight: "15-25 kgs" },
      { size: "XXXL", weight: "17 kgs+", highlight: true },
    ],
  },
  {
    id: 2,
    name: "Huggies Wonder Pants",
    tagline:
      "Nepals's fastest absorbing diaper pants with Dry Xpert technology that absorbs 4x faster for up to 12 hours",
    description:
      "Introducing the New and Improved Huggies Complete Comfort Wonder Pants - Nepals's Fastest Absorbing Diaper. Designed to provide maximum comfort and up to 12 hours absorbency for your little one.",
    image: "/assets/images/product2.jpg",
    type: "Pants",
    features: [
      {
        img: "/assets/images/P2F1.jpg",
        title: "Nepals's Fastest Absorbing Diaper",
        content:
          "Our patented Dry Xpert Channel helps distribute urine evenly absorbing wetness faster than other diapers keeping your baby's skin dry",
      },
      {
        img: "/assets/images/P2F2.jpg",
        title: "Up to 100% Leakage Protection",
        content:
          "Our double leak guard hugs your baby's skin and provides up to 100% leakage protection",
      },

      {
        img: "/assets/images/P2F3.jpg",
        title: "Ensures up to 0% Rash",
        content:
          "Made from breathable material, our diaper pants help your baby's skin to breathe ensuring up to 0% Rash",
      },
      {
        img: "/assets/images/P2F4.jpg",
        title: "Up to 12 Hrs Overnight Dryness",
        content:
          "Peaceful night sleep for you and your baby with up to 12 Hrs overnight absorption",
      },
    ],
    size: [
      { size: "XS/NB", weight: "0-5 kgs" },
      { size: "S", weight: "4-8 kgs" },
      { size: "M", weight: "7-12 kgs" },
      { size: "L", weight: "9-14 kgs" },
      { size: "XL", weight: "12-17 kgs" },
      { size: "XXL", weight: "15-25 kgs" },
      { size: "XXXL", weight: "17 kgs+", highlight: true },
    ],
  },
  {
    id: 3,
    name: "Huggies Comfy Pants",
    tagline:
      "Diapers with 1000 absorption funnels which absorbs for up to 12 hours for an uninterrupted sleep.",
    description:
      "Introducing New & Improved Huggies Comfy Pants with 1000 absorption funnels which allows upto 50% faster absorption~ and improved air flow for quick dry feel. Designed for up to 12 Hours of Overnight Absorption",
    image: "/assets/images/product3.jpg",
    type: "Pants",
    features: [
      {
        img: "/assets/images/P3F1.jpg",
        title: "Up to 10 Hrs Overnight Absorption",
        content:
          "Comfortable night's sleep for you and your baby with up to 10 Hrs overnight absorption",
      },
      {
        img: "/assets/images/P3F2.jpg",
        title: "360 degree soft fit waistband",
        content:
          "No more red marks on your baby's waist with our 360 degree Soft fit Waistband",
      },
      {
        img: "/assets/images/P3F3.jpg",
        title: "Bubble Bed Softness",
        content:
          "Nepal's 1st pants will Bubble Bed to wrap your baby in softness",
      },
    ],
    size: [
      { size: "XS/NB", weight: "0-5 kgs" },
      { size: "S", weight: "4-8 kgs" },
      { size: "M", weight: "7-12 kgs" },
      { size: "L", weight: "9-14 kgs" },
      { size: "XL", weight: "12-17 kgs" },
      { size: "XXL", weight: "15-25 kgs" },
      { size: "XXXL", weight: "17 kgs+", highlight: true },
    ],
  },
];

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const productId = parseInt(id, 10);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    notFound(); // Trigger Next.js's built-in 404 page
  }

  return (
    <main>
      <Header />
      <SingleProduct product={product} />
      <Footer />
    </main>
  );
}
