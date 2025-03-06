"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";

export function ImagesSliderDemo() {

  const images = [
    "https://res.cloudinary.com/dgna3swph/image/upload/c_crop,w_4000,h_2667/v1741287531/YS0_8171_iigcgb.jpg",
    "https://res.cloudinary.com/dgna3swph/image/upload/v1741288705/DSC07170_coyqn0.jpg",
    "https://res.cloudinary.com/dgna3swph/image/upload/v1741287532/SAM_3177_xlxi0h.jpg",
    "https://res.cloudinary.com/dgna3swph/image/upload/v1741289132/DSC09852_blblck.jpg",
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
