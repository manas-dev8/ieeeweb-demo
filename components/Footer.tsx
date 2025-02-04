import Link from "next/link";
import { Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white shadow-inner">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex space-x-4">
              <Image
                src="https://res.cloudinary.com/anurag256k/image/upload/v1735541538/IEEE/ieee_rtlaxt.png"
                alt="IEEE Logo"
                width={120}
                height={80}
              />
              <Image
                src="https://res.cloudinary.com/anurag256k/image/upload/v1735503028/IEEE/ieee-logo_ufoyaw.png"
                alt="IEEE GU Logo"
                width={100}
                height={60}
              />
              {/* <Image
                src="/ieee-up-logo.png"
                alt="IEEE UP Section Logo"
                width={80}
                height={40}
              /> */}
              <Image
                src="https://res.cloudinary.com/anurag256k/image/upload/v1735541549/IEEE/galgotias_v0ccp4.png"
                alt="Galgotias University Logo"
                width={140}
                height={100}
              />
            </div>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} IEEE Student Branch, Galgotias
              University
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-2">
              <Link
                href="/about"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                About Us
              </Link>
              <Link
                href="/events"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Events
              </Link>
              <Link
                href="/projects"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Projects
              </Link>
              <Link
                href="/team"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Team
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
              Connect With Us
            </h3>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/ieee-gu/" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/ieee_gusb/" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
