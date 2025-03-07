import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";


export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "ANNOUNCEMENTS",
      description:
        "The IEEE Student Branch at Galgotias University has some exciting announcements coming your way! Get ready for a series of engaging events, workshops, and networking opportunities designed to enhance your technical skills and industry exposure. Whether you're passionate about AI, robotics, cybersecurity, or emerging technologies, our upcoming initiatives will help you learn, collaborate, and innovate with like-minded peers and industry experts. Stay tuned for more updates and be a part of this incredible journey with IEEE at Galgotias University! .",
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
    
  ];
  return (
    <div className="relative z-20 pb-5 bg-white lg:py-10 mx-5 text-black">
      <div className="px-8">

        <p className="text-sm lg:text-base max-w-7xl mx-auto text-black text-center font-normal dark:text-neutral-300">
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
    <p className=" max-w-5xl mx-auto text-left tracking-tight text-black dark:text-black text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-black text-center font-normal dark:text-neutral-300",
        "text-left max-w mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  const announcements = [
    "International Electron Devices Meeting (IEDM) 2024: The 70th annual IEEE IEDM was held from December 7–11, 2024, featuring keynote talks on semiconductor industry outlooks, advancements in AI with energy-efficient architectures, and innovations in power electronics with silicon carbide.",
    "Launch of the International Roadmap for Devices and Systems (IRDS): In May 2016, IEEE launched the IRDS to provide guidance on future trends in computer systems, architectures, software, chips, and other components across the entire computer industry, expanding beyond traditional Moore's Law scaling.",
    "IEEE Rebooting Computing Initiative: Established in late 2012, this initiative aims to 'reboot' the entire field of computer technology, addressing challenges and fostering novel methodologies to reinvent computing technology, including new materials, devices, architectures, and software.",
    "IEEE International Conference on Rebooting Computing (ICRC): The inaugural ICRC was held in October 2016, aiming to discover and foster novel methodologies to reinvent computing technology. Subsequent conferences have continued to address emerging technologies and challenges in computing.",
    "IEEE Industry Summit on the Future of Computing: First held in November 2017, this summit features plenary presentations by industry, government, and academic leaders on new computer technologies expected in the coming decades, including announcements like IBM's quantum computing breakthrough.",
    "IEEE Quantum Computing Summit: With growing interest in quantum computing, IEEE held its first summit in August 2018, bringing together leaders from industry, academia, and government to establish metrics and benchmarks in this emerging field.",
    "IEEE Workshop on Cybersecurity and Artificial Intelligence: Initiated in October 2017, this workshop brings together leaders in cybersecurity and AI/machine learning to develop strategies for applying AI/ML to improve cybersecurity globally."
  ];

  return (
    <div className="relative flex p-10 mt-10 flex-col items-center gap-6 h-3/4 w-full overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white rounded-xl shadow-2xl">
      <motion.div
        className="flex flex-col text-left h-full w-full"
        animate={{ y: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        {announcements.map((announcement, index) => (
          <p key={index} className="text-l font-semibold mb-4">• {announcement}</p>
        ))}
      </motion.div>
    </div>
  );
};



export const SkeletonTwo = () => {
  const images = [
   
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
            className="rounded-xl -mr-4 mt-4 p-1 bg-white flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="bali images"
              width="300"
              height="300"
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
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800  flex-shrink-0 overflow-hidden"
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
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 flex-shrink-0 overflow-hidden"
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

      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-white to-transparent  h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-white  to-transparent h-full pointer-events-none" />
    </div>
  );
};

