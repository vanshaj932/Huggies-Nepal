"use client";
import Header from "@/components/navbar/Header";
import ProductHero from "@/components/ProductPage/ProductHero";
import Footer from "@/components/shared/Footer";
import React from "react";

const page = () => {
  return (
    <main>
      <Header />
      <ProductHero />
      <Footer />
    </main>
  );
};

export default page;
