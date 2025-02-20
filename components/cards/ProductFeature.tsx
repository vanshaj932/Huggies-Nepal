"use client";
import Image from "next/image";
import React from "react";

interface Feature {
  img: string;
  title: string;
  content: string;
}

interface FeatureProps {
  features: Feature[];
}

const ProductFeature: React.FC<FeatureProps> = ({ features }) => {
  return (
    <div className="h-auto flex flex-col bg-red-50 mt-20 tablet:pt-20  tablet:text-left tablet:flex-row pb-10">
      <div className="tablet:mx-[100px] flex flex-col tablet:flex-row w-full">
        <div className="w-auto ">
          <h1 className="text-[50px] text-center tablet:text-left tablet:text-[60px] text-nowrap text-gray-700 font-serif">
            Product Features
          </h1>
        </div>

        <div className="w-full flex flex-wrap tablet:flex-row tablet:gap-20">
          {features.map((feature, index) => (
            <div
              className={`flex flex-col w-full m-2 mt-10 rounded-xl min-h-0  bg-red-100 tablet:w-[45%] ${index !== 0 ? (index % 2 === 0 ? "mt-[128px]" : "mt-[330px]") : ""}`}
              key={index}
            >
              <div className="w-full h-auto">
                <Image
                  src={feature.img}
                  alt={feature.title}
                  width={500}
                  height={300}
                  className="rounded-xl w-full h-auto mb-5 object-cover"
                />
              </div>

              <div className="text-left text-wrap w-full">
                <h1 className="pl-5 font-semibold text-xl">{feature.title}</h1>
                <p className="text-left pl-5 mt-5">{feature.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFeature;

// "use client";
// import Image from "next/image";
// import React from "react";

// interface Feature {
//   img: string;
//   title: string;
//   content: string;
// }

// interface FeatureProps {
//   features: Feature[];
// }

// const ProductFeature: React.FC<FeatureProps> = ({ features }) => {
//   return (
//     <div className="h-auto flex flex-col bg-red-50 mt-20 tablet:pt-20 tablet:text-left pb-10">
//       <div className="tablet:mx-[100px] flex flex-col tablet:flex-row w-full">
//         {/* Title Section */}
//         <h1 className="text-[50px] text-center tablet:text-left tablet:text-[60px] text-gray-700 font-serif">
//           Product Features
//         </h1>

//         {/* Feature Cards */}
//         <div className="w-full grid grid-cols-1 tablet:grid-cols-2 gap-x-10 gap-y-20 mt-10">
//           {features.map((feature, index) => (
//             <div
//               className={`relative flex flex-col w-full rounded-xl bg-red-100 p-5 shadow-lg ${
//                 index % 2 !== 0 ? "mt-20" : "" /* Staggers alternate items */
//               }`}
//               key={index}
//             >
//               <Image
//                 src={feature.img}
//                 alt={feature.title}
//                 width={400} // Adjust for better image scaling
//                 height={300}
//                 className="rounded-xl w-full h-auto mb-5"
//               />

//               <div className="text-left w-full">
//                 <h1 className="font-semibold text-xl">{feature.title}</h1>
//                 <p className="mt-3">{feature.content}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductFeature;
