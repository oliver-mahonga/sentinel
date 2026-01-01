import Link from "next/link";

export default function Page() {
  return (
    <section className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Proof of Capability</h2>

      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
        Sentinel Systems focuses on solving real business problems.
        Below are selected systems, demos, and technical implementations that
        demonstrate how problems are analyzed and fixed.
      </p>

      <div className="space-y-10">
        <ProofItem
          title="Website Conversion Optimization"
          description="Redesigned landing page structure to improve clarity, mobile responsiveness, and call-to-action visibility."
          link="https://github.com/yourusername/project1"
        />

        <ProofItem
          title="AI WhatsApp Auto-Reply System"
          description="Built automated customer response logic to handle FAQs, leads, and follow-ups."
          link="https://github.com/yourusername/project2"
        />

        <ProofItem
          title="Email Automation Workflow"
          description="Designed an auto-responder system that filters inquiries and responds instantly."
          link="https://github.com/yourusername/project3"
        />
      </div>
    </section>
  );
}

function ProofItem({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className="border border-white/10 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-400 mb-4">{description}</p>
      <Link href={link} className="text-red-500 text-sm">
        View Technical Implementation →
      </Link>
    </div>
  );
}
