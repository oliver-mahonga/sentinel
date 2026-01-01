import CTAButton from "./CTAButton";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-black text-white">
      <img src="/assets/images/hero.png" className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div className="relative z-10 text-center max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          We Fix Broken Digital Systems and Automate Your Business
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Sentinel Systems improves websites, automates communication, and optimizes workflows using AI and smart systems.
        </p>
        <CTAButton text="Request Free Audit" link="/contact" />
      </div>
    </section>
  );
}
