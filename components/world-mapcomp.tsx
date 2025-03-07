"use client";
import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";

export function WorldMapDemo() {
  return (
    <div className=" py-8 dark:bg-black bg-white w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-3xl md:text-4xl dark:text-white text-black text-center">
          IEEE's GLOBAL RECOGNITION
          <span className="text-neutral-800">
            {"".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-7xl mx-auto py-4">
        The Institute of Electrical and Electronics Engineers (IEEE) is the world's largest technical professional organization dedicated to advancing technology for humanity. With over 400,000 members in more than 160 countries, IEEE plays a key role in shaping global technological innovation through its research, publications, standards, and conferences. 
IEEE has 39 technical societies, each focusing on specific fields of engineering and technology. These societies provide resources, conferences, publications, and networking opportunities for professionals and students worldwide. 

        </p>
      </div>
      <WorldMap
        dots={[
          { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: 34.0522, lng: -118.2437 } }, // Alaska -> Los Angeles
          { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: -15.7975, lng: -47.8919 } }, // Alaska -> Brazil
          { start: { lat: -15.7975, lng: -47.8919 }, end: { lat: 38.7223, lng: -9.1393 } }, // Brazil -> Lisbon
          { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 28.6139, lng: 77.209 } }, // London -> New Delhi
          { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 43.1332, lng: 131.9113 } }, // New Delhi -> Vladivostok
          { start: { lat: 28.6139, lng: 77.209 }, end: { lat: -1.2921, lng: 36.8219 } }, // New Delhi -> Nairobi
          
          // IEEE Global Locations
          { start: { lat: 34.0522, lng: -118.2437 }, end: { lat: 40.7128, lng: -74.0060 } }, // Los Angeles -> New York (IEEE USA)
          { start: { lat: 40.7128, lng: -74.0060 }, end: { lat: 45.4215, lng: -75.6972 } }, // New York -> Ottawa (IEEE Canada)
          { start: { lat: 38.7223, lng: -9.1393 }, end: { lat: 48.8566, lng: 2.3522 } }, // Lisbon -> Paris (IEEE France)
          { start: { lat: 48.8566, lng: 2.3522 }, end: { lat: 52.5200, lng: 13.4050 } }, // Paris -> Berlin (IEEE Germany)
          { start: { lat: 52.5200, lng: 13.4050 }, end: { lat: 59.3293, lng: 18.0686 } }, // Berlin -> Stockholm (IEEE Sweden)
          { start: { lat: 59.3293, lng: 18.0686 }, end: { lat: 55.7558, lng: 37.6173 } }, // Stockholm -> Moscow (IEEE Russia)
          { start: { lat: 55.7558, lng: 37.6173 }, end: { lat: 25.276987, lng: 55.296249 } }, // Moscow -> Dubai (IEEE UAE)
          { start: { lat: 25.276987, lng: 55.296249 }, end: { lat: 28.6139, lng: 77.2090 } }, // Dubai -> New Delhi (IEEE India)
          { start: { lat: 28.6139, lng: 77.2090 }, end: { lat: 13.7563, lng: 100.5018 } }, // New Delhi -> Bangkok (IEEE Thailand)
          { start: { lat: 13.7563, lng: 100.5018 }, end: { lat: 35.6895, lng: 139.6917 } }, // Bangkok -> Tokyo (IEEE Japan)
          { start: { lat: 35.6895, lng: 139.6917 }, end: { lat: 37.5665, lng: 126.9780 } }, // Tokyo -> Seoul (IEEE South Korea)
          { start: { lat: 37.5665, lng: 126.9780 }, end: { lat: -33.8688, lng: 151.2093 } }, // Seoul -> Sydney (IEEE Australia)
          { start: { lat: -33.8688, lng: 151.2093 }, end: { lat: -26.2041, lng: 28.0473 } }, // Sydney -> Johannesburg (IEEE South Africa)
          { start: { lat: -26.2041, lng: 28.0473 }, end: { lat: -1.2921, lng: 36.8219 } }, // Johannesburg -> Nairobi (IEEE Kenya)
          { start: { lat: -1.2921, lng: 36.8219 }, end: { lat: -34.6037, lng: -58.3816 } }, // Nairobi -> Buenos Aires (IEEE Argentina)
          { start: { lat: -34.6037, lng: -58.3816 }, end: { lat: 19.4326, lng: -99.1332 } }, // Buenos Aires -> Mexico City (IEEE Mexico)
          { start: { lat: 19.4326, lng: -99.1332 }, end: { lat: 40.7128, lng: -74.0060 } }, // Mexico City -> New York (Loop back to IEEE USA)
        ]}
        
      />
    </div>
  );
}
