"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import Link from "next/link";
import { FlipWords } from "@/components/ui/flip-words";
import Image from 'next/image';

export function ImagesSliderDemo() {
  const words = [
    "better",
    "Inclusive",
    "beautiful",
    "modern",
    "Dynamic",
    "Diverse",
    "Innovative",
    "Creative",
    "Inspiring",
    "Empowering",
    "Impactful",
    "Sustainable",
    "Accessible",
    "Engaging",
    "Interactive",
    "Responsible",
    "Intuitive",
    "Reliable",
  ];

  const images = [
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <ImagesSlider className="h-[50rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <div className="relative z-10 text-center">
          <Image
            src="https://res.cloudinary.com/anurag256k/image/upload/v1735503028/IEEE/ieee-logo_ufoyaw.png"
            alt="IEEE Logo"
            className="mx-auto h-30 mb-8 w-auto"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            IEEE Student Branch
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-red-600 mb-8">
            Galgotias University
          </h2>
          <Link
            href="/about"
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Explore More
          </Link>
          <div className="text-4xl mx-auto pl-12 pt-5 font-semibold text-white">
            Join a
            <FlipWords className="text-red" words={words} /> <br />
            Technology and Research Community.
          </div>
        </div>
      </motion.div>
    </ImagesSlider>
  );
}
