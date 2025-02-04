import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IconBrandInstagramFilled } from "@tabler/icons-react";
import Link from "next/link";

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "IEEE SB EVENTS HIGHLIGHTS",
      description:
        "Track and manage your project issues with ease using our intuitive interface.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4",
    },
    {
      title: "IEEE SB EVENTS HIGHLIGHTS",
      description:
        "The IEEE Student Branch at Galgotias University (IEEE GU SB) actively organizes a wide range of technical and professional events throughout the year, providing students with opportunities to enhance their skills and knowledge in cutting-edge technologies. These events include hands-on workshops on Artificial Intelligence, IoT, Blockchain, and Robotics, as well as technical competitions. ",
      skeleton: <SkeletonTwo />,
      className: " col-span-1 lg:col-span-2 ",
    },
    {
      title: "Watch our AICSSYC 2024 HIGLIGHTS",
      description:
        "The AICSSYC (All India Computer Society Student and Young Professionals Congress), in collaboration with IEEE GU SB, organized events connecting students, professionals, and experts in AI, ML, Software Engineering, and Emerging Technologies. This partnership provided industry insights, bridging the gap between theoretical knowledge and real-world application while fostering technical expertise and career growth.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3",
    },
    {
      title: "IEEE's GLOBAL RECOGNITION",
      description:
        "The Institute of Electrical and Electronics Engineers (IEEE) is the world's largest technical professional organization dedicated to advancing technology for humanity. With over 400,000 members in more than 160 countries, IEEE plays a key role in shaping global technological innovation through its research, publications, standards, and conferences. IEEE has 39 technical societies, each focusing on specific fields of engineering and technology. These societies provide resources, conferences, publications, and networking opportunities for professionals and students worldwide. ",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 ",
    },
  ];
  return (
    <div className="relative z-20 py-10 bg-black lg:py-40 mx-5 text-white">
      <div className="px-8">
        <h4 className="text-4xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-white dark:text-white">
        WE ARE IEEE GALGOTIAS UNIVERSITY
        </h4>

        <p className="text-sm lg:text-base  max-w-7xl  my-4 mx-auto text-white text-center font-normal dark:text-neutral-300">
        The IEEE Student Branch (SB) at Galgotias University is a vibrant community dedicated to fostering innovation, technical knowledge, and professional development among students passionate about engineering and technology. 
The branch actively encourages research and paper presentations, providing students with opportunities to showcase their work at IEEE-sponsored events and conferences. Through guest lectures, industrial collaborations, and networking opportunities, IEEE GU SB connects students with industry professionals and the global IEEE network, helping them stay ahead in the ever-evolving technological landscape.  

        </p>
      </div>

      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 rounded-md ">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=" max-w-5xl mx-auto text-left tracking-tight text-white dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-white text-center font-normal dark:text-neutral-300",
        "text-left max-w mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full  p-5  mx-auto bg-black dark:bg-black shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          {/* TODO */}
          <Image
            src="https://res.cloudinary.com/dgna3swph/image/upload/c_crop,ar_9:16/v1737888463/IMG_1624_vjcw2f_ue1gh4.jpg"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
          />
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-black dark:from-black via-black dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-black dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <Link
      href="https://www.instagram.com/reel/DBVSi5XSOiJ/?igsh=YjIxZGtneTgyaWxs"
      target="__blank"
      className="relative flex gap-10  h-full group/image"
    >
      <div className="w-full  mx-auto bg-transparent dark:bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  relative">
          {/* TODO */}
          <IconBrandInstagramFilled
            className="h-20 w-20 absolute z-10 inset-0 m-auto text-white"
          />
          <Image
            src="https://res.cloudinary.com/dgna3swph/image/upload/v1737889513/IMG_1952_s6ss9m_jvkbjt.jpg"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
          />
        </div>
      </div>
    </Link>
  );
};

export const SkeletonTwo = () => {
  const images = [
   
   "https://res.cloudinary.com/dgna3swph/image/upload/t_Thumbnail/v1737884369/5c41699a-273b-4db6-8a48-6e4c00bcee8e_ljsyfh.jpg",
   "https://res.cloudinary.com/dgna3swph/image/upload/t_Thumbnail/v1737884369/5c41699a-273b-4db6-8a48-6e4c00bcee8e_ljsyfh.jpg",
   "https://res.cloudinary.com/dgna3swph/image/upload/t_Thumbnail/v1737884369/5c41699a-273b-4db6-8a48-6e4c00bcee8e_ljsyfh.jpg",
   "https://res.cloudinary.com/dgna3swph/image/upload/t_Thumbnail/v1737884369/5c41699a-273b-4db6-8a48-6e4c00bcee8e_ljsyfh.jpg",
   "https://res.cloudinary.com/dgna3swph/image/upload/t_Thumbnail/v1737884369/5c41699a-273b-4db6-8a48-6e4c00bcee8e_ljsyfh.jpg",
   "https://res.cloudinary.com/dgna3swph/image/upload/t_Thumbnail/v1737884369/5c41699a-273b-4db6-8a48-6e4c00bcee8e_ljsyfh.jpg",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      {/* TODO */}
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-black flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-black dark:bg-neutral-800  flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-black dark:bg-neutral-800 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-black dark:bg-neutral-800 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>

      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-black dark:from-black to-transparent  h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-black dark:from-black  to-transparent h-full pointer-events-none" />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10 ">
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 0.0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.53, 0.81, 1], // light blue
      markerColor: [1, 0, 0], // also light blue
      glowColor: [0,0.6, 0.8],  // darker blue highlight
      markers: [
        { location: [37.7749, -122.4194], size: 0.05 }, // San Francisco
        { location: [34.0522, -118.2437], size: 0.05 }, // Los Angeles
        { location: [51.5074, -0.1278], size: 0.05 }, // London
        { location: [48.8566, 2.3522], size: 0.05 }, // Paris
        { location: [35.6895, 139.6917], size: 0.05 }, // Tokyo
        { location: [28.6139, 77.209], size: 0.09 }, // New Delhi
        { location: [55.7558, 37.6173], size: 0.05 }, // Moscow
        { location: [-33.8688, 151.2093], size: 0.05 }, // Sydney
        { location: [40.7128, -74.006], size: 0.05 }, // New York
        { location: [19.076, 72.8777], size: 0.05 }, // Mumbai
        { location: [39.9042, 116.4074], size: 0.05 }, // Beijing
        { location: [52.52, 13.4050], size: 0.05 }, // Berlin
        { location: [41.9028, 12.4964], size: 0.05 }, // Rome
        { location: [-23.5505, -46.6333], size: 0.05 }, // São Paulo
        { location: [1.3521, 103.8198], size: 0.05 }, // Singapore
      ],
      onRender: (state) => {
      state.phi = phi;
      phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
