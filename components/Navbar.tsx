"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Home, ServerCog, Folder, Info, Mail } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Services", href: "/services", icon: ServerCog },
    { name: "Proof", href: "/proof", icon: Folder },
    { name: "About", href: "/about", icon: Info },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  return (
    <nav className="fixed w-full bg-black bg-opacity-80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Name */}
        <Link href="/" className="flex items-center gap-3">
          <img src="/assets/images/logo.png" alt="Sentinel Systems" className="h-10" />
          <span className="text-red-600 font-bold text-lg md:text-xl">Sentinel Systems</span>
        </Link>

        {/* Desktop Links */}
        <div className="space-x-6 text-white font-medium hidden md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-red-600 transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 backdrop-blur-md">
          <div className="flex flex-col py-4 space-y-2 text-white font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-6 py-2 hover:text-red-600 transition-colors duration-300"
              >
                <link.icon className="w-5 h-5 text-red-600" />
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
