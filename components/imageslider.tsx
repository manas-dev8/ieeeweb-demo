"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import Image from "next/image";

export function ImagesSliderDemo() {
  const media = [
    "https://res.cloudinary.com/dgna3swph/image/upload/c_crop,w_4000,h_2667/v1741287531/YS0_8171_iigcgb.jpg",
    "https://res.cloudinary.com/dgna3swph/image/upload/v1741288705/DSC07170_coyqn0.jpg",
    "https://res.cloudinary.com/dgna3swph/video/upload/v1741292932/DSC_8097_urbwya.mov",
    "https://res.cloudinary.com/dgna3swph/image/upload/v1741287532/SAM_3177_xlxi0h.jpg",
    "https://res.cloudinary.com/dgna3swph/image/upload/v1741289132/DSC09852_blblck.jpg",
  ];

  return (
    <ImagesSlider className="h-screen" images={media}>
      {media.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full flex justify-center items-center"
        >
          {item.includes(".mov") || item.includes(".mp4") ? (
            <video src={item} className="h-full w-auto object-cover" controls autoPlay loop muted />
          ) : (
            <Image src={item} className="h-full w-auto object-cover" alt={`Slide ${index + 1}`} />
          )}
        </motion.div>
      ))}
    </ImagesSlider>
  );
}
