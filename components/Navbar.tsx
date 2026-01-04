"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import Button from "./ui/Button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Industries", href: "/#industries" },
  { name: "Products", href: "/#products" },
  { name: "Blog", href: "/#blog" },
  { name: "Contact Us", href: "/#contact" },
  { name: "About Us", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // If it's an anchor link on the same page
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  const scrollToContact = () => {
    if (pathname === "/") {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "/#contact";
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className="fixed top-[11px] left-0 w-full h-[85px] bg-[#FFFFFF0D] backdrop-blur-[20px] flex items-center justify-between px-4 sm:px-6 lg:px-10 z-50"
        style={{ opacity: 1 }}
      >
        {/* Logo Section */}
        <Link
          href="/"
          className="w-[120px] sm:w-[150px] lg:w-[180px] flex items-center justify-center"
        >
          <Logo />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-black-light hover:text-blue transition-colors relative group text-sm xl:text-base"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Desktop Action Button */}
        <div className="hidden lg:block">
          <Button onClick={scrollToContact}>Get a Demo</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-black-light hover:text-blue transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[96px] bg-white/95 backdrop-blur-md z-40 lg:hidden">
          <div className="flex flex-col items-center pt-8 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-black-light hover:text-blue transition-colors text-lg font-medium"
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4">
              <Button onClick={scrollToContact}>Get a Demo</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
