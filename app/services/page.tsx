"use client";

import { useEffect, useState } from "react";
import {
  Monitor,
  Smartphone,
  Cpu,
  Repeat,
  BarChart2,
  Code,
} from "lucide-react";

export default function Page() {
  const services = [
    {
      title: "Website & Conversion Systems",
      description:
        "Design and optimize websites that convert visitors into customers with clarity, speed, and style.",
      icon: Monitor,
    },
    {
      title: "Mobile App Development",
      description:
        "Create engaging and high-performing mobile apps for iOS and Android tailored to your business needs.",
      icon: Smartphone,
    },
    {
      title: "AI Communication Automation",
      description:
        "Automate WhatsApp, email, and chat for faster responses, lead management, and customer engagement.",
      icon: Cpu,
    },
    {
      title: "Business Process Automation",
      description:
        "Streamline workflows, reduce manual work, and boost productivity with smart automation systems.",
      icon: Repeat,
    },
    {
      title: "Analytics & Performance Systems",
      description:
        "Track, analyze, and visualize business data to make decisions based on real insights.",
      icon: BarChart2,
    },
    {
      title: "Custom Software Solutions",
      description:
        "Develop tailor-made software for your business, from tools to platforms, solving complex challenges.",
      icon: Code,
    },
  ];

  return (
    <section className="pt-28 md:pt-36 pb-24 bg-gray-900/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
            Our Services
          </h2>
          <p className="text-gray-300 text-base md:text-lg">
            We create systems that solve real business problems — from websites
            and mobile apps to automation and custom software solutions.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <AnimatedServiceCard
              key={index}
              title={service.title}
              description={service.description}
              Icon={service.icon}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------- Animated Service Card ----------------------
function AnimatedServiceCard({
  title,
  description,
  Icon,
  delay = 0,
}: {
  title: string;
  description: string;
  Icon: React.ElementType;
  delay?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById(title);
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [title]);

  return (
    <div
      id={title}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group relative border border-white/10 rounded-2xl p-6 sm:p-8 bg-black/20 backdrop-blur-xl shadow-lg transform transition-all duration-500 
        ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        } hover:-translate-y-2 hover:shadow-2xl hover:border-red-600`}
    >
      {/* Gradient Icon Background */}
      <div className="w-12 h-12 mb-4 rounded-full flex items-center justify-center"
           style={{
             background:
               "linear-gradient(135deg, rgba(239,68,68,0.2), rgba(220,38,38,0.3))",
           }}
      >
        <Icon className="w-6 h-6 text-red-500 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6" />
      </div>

      <h3 className="font-semibold text-lg mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>

      {/* Floating Shadow */}
      <div className="absolute -bottom-3 -right-3 w-20 h-20 rounded-full bg-red-600/10 blur-3xl pointer-events-none" />
    </div>
  );
}
