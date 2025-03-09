import React from "react";
import Link from "next/link";
import { FaInstagram, FaTiktok } from "react-icons/fa"; // Importă iconuri din react-icons

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 relative overflow-hidden">
      {/* Background gradient effect similar to other sections */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#0A000F] to-black opacity-80"
        aria-hidden="true"
      ></div>

      {/* Subtle purple dot pattern */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage:
            "radial-gradient(rgba(139, 92, 246, 0.15) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          opacity: 0.1,
        }}
        aria-hidden="true"
      ></div>

      {/* Purple glow effect */}
      <div
        className="absolute top-0 left-1/4 w-1/2 h-1/2"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(76,29,149,0.1), transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      ></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 lg:gap-24">
          <div className="flex flex-row md:flex-col gap-6 md:gap-4">
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group"
            >
              <FaInstagram
                size={24}
                className="text-purple-500 group-hover:text-purple-400 transition-colors duration-300"
              />
              <span className="hidden md:inline text-slate-300 group-hover:text-purple-400 transition-colors duration-300">
                Instagram
              </span>
            </Link>

            <Link
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group"
            >
              <FaTiktok
                size={24}
                className="text-purple-500 group-hover:text-purple-400 transition-colors duration-300"
              />
              <span className="hidden md:inline text-slate-300 group-hover:text-purple-400 transition-colors duration-300">
                TikTok
              </span>
            </Link>
          </div>
          <div className="order-2  mt-6 md:mt-0">
            <div className="flex flex-col items-center md:items-end">
              <div className="text-slate-300 text-sm md:text-base font-medium">
                &copy; {new Date().getFullYear()} hiFLY-STUDIO
              </div>
              <div className="text-slate-500 text-xs mt-1">
                Toate drepturile rezervate
              </div>
            </div>
          </div>
          {/* Linkuri catre sectiuni */}
          <div className="order-3  mt-6 md:mt-0">
            <ul className="flex flex-col items-center md:items-start gap-3">
              <li>
                <Link
                  href="#portofoliu"
                  className="text-slate-300 hover:text-purple-400 transition-colors duration-300 text-sm md:text-base"
                >
                  Portofoliu
                </Link>
              </li>
              <li>
                <Link
                  href="#despre-noi"
                  className="text-slate-300 hover:text-purple-400 transition-colors duration-300 text-sm md:text-base"
                >
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-slate-300 hover:text-purple-400 transition-colors duration-300 text-sm md:text-base"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
