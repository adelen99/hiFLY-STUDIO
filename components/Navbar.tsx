"use client";

import { useEffect, useState } from "react";
import { DarkModeButton } from "./DarkModeButton";
import { navLinks } from "@/lib/constants";
import Image from "next/image";
import logo from "@/public/logo-alb.png";
import { MobileMenu } from "./mobile-menu";

export const Navbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Set initial value
    setIsSmallScreen(window.innerWidth < 768);

    // Add event listener for window resize
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="h-20 flex items-center relative">
      {/* Mobile Menu (left side on small screens) */}
      {isSmallScreen && (
        <div className="sm:hidden absolute left-4 z-10">
          <MobileMenu />
        </div>
      )}

      {/* Logo/Brand (perfectly centered on small screens, left on larger screens) */}
      <div
        className={`${isSmallScreen ? "w-full flex justify-center" : "flex"}`}
      >
        <Image
          src={logo || "/placeholder.svg"}
          alt="logo"
          width={isSmallScreen ? 108 : 148}
          className="hover:opacity-70 transition-opacity cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </div>

      {/* Dark Mode Button for small screens */}

      {isSmallScreen && (
        <div className="absolute right-4 z-10">
          <DarkModeButton />
        </div>
      )}

      {/* Navigation Links (hidden on small screens) */}
      <nav className="hidden sm:flex items-center gap-8 ml-auto">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(link.id);
            }}
            className="relative py-1 font-medium transition-colors hover:text-foreground/80 group"
          >
            {link.title}
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-foreground transform origin-left transition-transform duration-500 ease-out scale-x-0 group-hover:scale-x-100" />
          </a>
        ))}

        {/* Dark Mode Button */}
        <div className="ml-4">
          <DarkModeButton />
        </div>
      </nav>
    </div>
  );
};
