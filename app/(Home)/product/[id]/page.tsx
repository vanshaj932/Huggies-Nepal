import SingleProduct from "@/components/cards/SingleProduct";
import Footer from "@/components/shared/Footer";
import Header from "@/components/navbar/Header";
// import { Params } from "next/dist/server/request/params";
import { products } from "@/lib/product";
// import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

type PageParams = {
  id: string;
};

// Generate static paths for all products
export async function generateStaticParams(): Promise<PageParams[]> {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

// Page component
const ProductPage = async ({
  params,
}: {
  params: PageParams;
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const productId = parseInt(params.id, 10);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <main>
      <Header />
      <SingleProduct product={product} />
      <Footer />
    </main>
  );
};

// Type the generateStaticParams function

export default ProductPage;
