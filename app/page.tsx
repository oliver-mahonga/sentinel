import HeroSection from "../components/HeroSection";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import AboutSection from "../components/AboutSection";
import CTAButton from "../components/CTAButton";

export default function Page() {
  return (
    <>
      <HeroSection />

      {/* Services Teaser */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            title="Website & Conversion Systems"
            description="Redesign and optimize websites for clarity, speed, and conversions."
          />
          <ServiceCard
            title="AI Communication Automation"
            description="Automate WhatsApp, email, and chat to respond faster and never miss a lead."
          />
          <ServiceCard
            title="Business Process Automation"
            description="Streamline workflows and reduce manual work for maximum efficiency."
          />
          <ServiceCard
            title="Analytics & Performance Systems"
            description="Implement tracking and dashboards to make decisions based on real data."
          />
        </div>
      </section>

      {/* Proof Teaser */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects & Proof</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Landing Page UX Optimization"
            description="Improved layout, mobile responsiveness, and CTA visibility."
            image="/assets/images/project1.png"
            link="https://github.com/yourusername/project1"
          />
          <ProjectCard
            title="WhatsApp AI Automation Demo"
            description="Automated customer replies and lead handling."
            image="/assets/images/project2.png"
            link="https://github.com/yourusername/project2"
          />
          <ProjectCard
            title="Email Auto-Responder System"
            description="Implemented automated replies and lead follow-ups."
            image="/assets/images/project3.png"
            link="https://github.com/yourusername/project3"
          />
        </div>
        <div className="text-center mt-10">
          <CTAButton text="See More Projects" link="/proof" />
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* CTA at bottom */}
      <section className="text-center py-20">
        <CTAButton text="Request Free Audit" link="/contact" />
      </section>
    </>
  );
}
