"use client";
import Link from "next/link";
import Image from "next/image";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import MobileNav from "./MobileNav";

const Navbar = () => {
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="hidden w-full tablet:block">
        {/* First Section */}
        <div className="flex h-[5vh] items-center justify-between bg-[#c3e7e7] px-4 tablet:px-6">
          <div className="flex items-center justify-center py-10 pr-[25%]">
            <Link href="/">
              <Image
                src="/assets/images/main-logo.webp"
                alt="Huggies Logo"
                height={125}
                width={125}
                className="!h-[150px] !w-[175px] cursor-pointer"
                priority
              />
            </Link>
          </div>

          <div className="hidden space-x-6 tablet:flex">
            <Link
              href="mailto:email@test.com"
              className="flex font-serif text-base text-black hover:text-gray-200"
            >
              <EmailIcon className="text-blue-500" />
              <p className="text-black">email@test.com</p>
            </Link>
            <Link
              href="tel:02-026-6597"
              className="flex font-serif text-black hover:text-gray-200"
            >
              <CallIcon className="text-blue-500" />
              02-026-6597
            </Link>
          </div>
          {/* <MobileNav /> */}
        </div>

        {/* Second Section */}
        <div className="flex h-auto min-h-[5vh] items-center justify-between bg-slate-100 ">
          <div className="ml-[15vw] hidden items-center justify-start space-x-8 tablet:flex">
            <Link href="/" className=" font-serif text-lg hover:text-red-600">
              Home
            </Link>
            <Link
              href="/product"
              className=" font-serif text-lg hover:text-red-600"
            >
              Product
            </Link>
            <Link
              href="/about"
              className=" font-serif text-lg hover:text-red-600"
            >
              About Huggies
            </Link>
          </div>

          <div className="hidden items-center space-x-6 tablet:flex">
            <Link
              href="https://www.daraz.com.np/baby-diapers/huggies/"
              className="hover:text-gray-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                aria-label="Buy Now - Huggies Skin Perfect Diapers"
                className="m-2 rounded-3xl bg-green-500 p-3 font-serif font-bold text-white"
              >
                <LocalMallIcon className="px-1 text-white" />
                Buy Now
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
      </nav>
      <MobileNav />
    </>
  );
};

export default Navbar;
