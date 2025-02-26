// pages/contact.tsx
import Head from "next/head";
import { NextPage } from "next";
import Footer from "@/components/shared/Footer";
import Contact from "@/components/shared/Contact";
import Header from "@/components/navbar/Header";

const ContactPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Huggies Nepal</title>
        <meta
          name="description"
          content="Get in touch with Huggies Nepal. We'd love to hear from you!"
        />
      </Head>

      <Header />
      <Contact />
      <Footer />
    </>
  );
};

export default ContactPage;
