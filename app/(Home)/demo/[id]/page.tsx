import NewProduct from "@/components/newProduct/NewProduct";
import Header from "@/components/navbar/Header";
import NotFound from "@/components/ProductPage/NotFound";
import Footer from "@/components/shared/Footer";
import { newProducts } from "@/lib/newProduct";
import React from "react";

type PageParams = {
  id: string;
};

// Generate static paths for all products
export async function generateStaticParams(): Promise<PageParams[]> {
  return newProducts.map((product) => ({
    id: product.id.toString(),
  }));
}

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const productId = (await params).id;
  const productID = parseInt(productId, 10);
  const product = newProducts.find((p) => p.id === productID);

  if (!product) {
    return (
      <main>
        <Header />
        <NotFound />
        <Footer />
      </main>
    );
  }

  return (
    <section>
      <Header />
      <NewProduct newProduct={product} />
      <Footer />
    </section>
  );
};

export default ProductPage;
