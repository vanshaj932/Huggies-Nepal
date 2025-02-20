import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="overflow-hidden relative h-[70vh] tablet:h-screen">
      <Image
        src="/assets/images/main.png"
        alt="huggies"
        layout="fill"
        className="h-[50vh] w-full"
      />
    </div>
  );
};

export default Hero;
