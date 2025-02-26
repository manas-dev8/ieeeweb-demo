"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";

export function ImagesSliderDemo() {

  const images = [
    "https://res.cloudinary.com/dgna3swph/image/upload/e_auto_brightness/DSC01065_qvd85k.jpg",
    "https://res.cloudinary.com/dgna3swph/image/upload/e_auto_brightness/IMG_1624_vjcw2f_ue1gh4.jpg",
  ];
  

  return (
    <ImagesSlider className="h-screen" images={images}>
      <motion.div
        initial={{
          opacity: 100,
          y: -80,
        }}
        animate={{
          opacity: 100,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className=" flex flex-col justify-center items-center"
      >
      </motion.div>
    </ImagesSlider>
  );
}
