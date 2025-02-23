import Footer from "@/components/shared/Footer";
import Hero from "@/components/shared/Hero";
import Header from "@/components/navbar/Header";
// import MobileNav from "@/components/navbar/MobileNav";
import NewProducts from "@/components/shared/NewProducts";
import ProductCarousel from "@/components/shared/product";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <Hero />
      <NewProducts />
      <ProductCarousel />
      <Footer />
    </main>
  );
}
