"use client";

import { useEffect, useState } from "react";
import CTAButton from "./CTAButton";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <img
        src="/assets/images/herr.png"
        className="absolute inset-0 w-full h-full object-cover brightness-50 blur-sm"
        alt="Hero Background"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        <h1
          className={`text-4xl md:text-6xl font-extrabold mb-6 transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
        >
          We Fix Broken Digital Systems and Automate Your Business
        </h1>
        <p
          className={`text-lg md:text-xl mb-8 transition-all duration-1000 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Sentinel Systems improves websites, automates communication, and optimizes workflows using AI and smart systems.
        </p>

        {/* CTA Button */}
        
        <CTAButton
          text="Request Free Audit"
          link="/contact"
          
        />
      </div>
    </section>
  );
}
