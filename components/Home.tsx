"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import heroImage from "@/public/heroImage.jpg";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portofoliu");
    if (portfolioSection) {
      window.scrollTo({
        top: portfolioSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className='flex flex-col relative items-center justify-center'>
      <h1 className='scroll-m-20 absolute text-center  z-10 text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl'>
        hiFLY studio – Zboară. Explorează. Creează.
      </h1>
      <Image
        src={heroImage}
        alt='HomeHeroImage'
        className='opacity-50 h-[100vh] object-cover '
      />

      {/* Folosim motion.div pentru efect de animație */}
      <motion.div
        className='absolute z-10 bottom-5 cursor-pointer text-white text-3xl'
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        onClick={scrollToPortfolio}>
        <ArrowDown className='size-10 p-2 bg-black rounded-full' />
      </motion.div>
    </div>
  );
};

export default Hero;
