"use client";

import { useEffect, useState } from "react";
import { Monitor, Cpu, Repeat } from "lucide-react";
import CTAButton from "@/components/CTAButton";

export default function Page() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const highlights = [
    {
      icon: Monitor,
      text: "Web & Conversion Systems Optimization",
    },
    {
      icon: Cpu,
      text: "AI Communication & Automation",
    },
    {
      icon: Repeat,
      text: "Business Process Automation",
    },
  ];

  return (
    <section className="pt-28 md:pt-36 pb-24 bg-gray-900/10">
      <div className="max-w-7xl mx-auto px-6 lg:flex lg:items-center lg:gap-16">
        {/* LEFT IMAGE OR ILLUSTRATION */}
        <div
          className={`mb-12 lg:mb-0 lg:flex-1 transition-all duration-1000 ${
            loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
          } hidden lg:block`} // ✅ Hidden on small screens
        >
          <img
            src="/assets/images/logo.png"
            alt="Oliver - Sentinel Systems"
            className="rounded-2xl shadow-xl w-full lg:w-auto"
          />
        </div>

        {/* RIGHT TEXT */}
        <div
          className={`lg:flex-1 transition-all duration-1000 delay-200 ${
            loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
            About Sentinel Systems
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            At Sentinel Systems, we specialize in transforming digital operations for businesses of all sizes. We improve websites, automate communications, and streamline workflows using advanced AI and smart systems. Our solutions don’t just look good — they solve real inefficiencies, boost conversions, and save time, enabling companies to operate smarter and grow faster.
          </p>

          {/* HIGHLIGHTS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <item.icon className="w-8 h-8 text-red-500 mb-2" />
                <p className="text-gray-300 text-sm">{item.text}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center lg:text-left">
            <CTAButton
              text="Get In Touch"
              link="/contact"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
