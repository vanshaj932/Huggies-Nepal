"use client";

import { Button } from "@/components/ui/button";
import { HeartHandshake } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="text-center">
        <HeartHandshake className="mx-auto size-32 animate-bounce text-blue-500" />

        <h1 className="md:text-9xl mt-6 text-7xl font-bold text-blue-600">
          Oops!
        </h1>

        <p className="md:text-4xl mb-8 mt-4 text-3xl text-gray-600">
          Page Not Found
        </p>

        <Link href="/">
          <Button className="rounded-full bg-blue-500 px-12 py-8 text-xl text-white transition-transform hover:scale-105 hover:bg-blue-600">
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

// "use client";

// import Link from "next/link";
// import Image from "next/image";

// const NotFound = () => {
//   return (
//     <div className="flex h-screen flex-col items-center justify-center bg-blue-50 p-6 text-center">
//       <Image
//         src="/assets/images/NotFound.jpg" // Add a cute baby-themed image in the public folder
//         alt="Lost Baby"
//         width={250}
//         height={250}
//         className="mb-6 animate-bounce"
//       />
//       <h1 className="mb-4 text-5xl font-extrabold text-red-500">
//         Oops! Page Not Found
//       </h1>
//       <p className="mb-6 text-lg text-gray-600">
//         Looks like this page took a nap! Let's get you back.
//       </p>
//       <Link
//         href="/"
//         className="rounded-2xl bg-red-500 px-6 py-3 text-lg font-semibold text-white shadow-lg transition-transform hover:scale-105"
//       >
//         Back to Home
//       </Link>
//     </div>
//   );
// };

// export default NotFound;
