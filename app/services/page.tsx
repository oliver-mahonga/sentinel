import ServiceCard from "../../components/ServiceCard";

export default function Page() {
  return (
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
  );
}
