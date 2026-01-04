import Link from "next/link";
import {
  Github,
  ArrowUpRight,
  Lock,
  Activity,
  ShieldCheck,
  Quote,
} from "lucide-react";

const GITHUB_PROFILE = "https://github.com/oliver-mahonga";

export default function Page() {
  return (
    <section className="pt-36 pb-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Proof of Capability
          </h1>
          <p className="text-gray-400 text-lg">
            This is execution — not theory. Every system below exists to solve a
            real problem.
          </p>
        </div>

        {/* PUBLIC SYSTEMS */}
        <div className="space-y-10 mb-32">
          <ProofCard
            title="Website Conversion Optimization"
            description="Improved structure, mobile UX, and CTA clarity to increase engagement and conversions."
            icon={<Activity />}
          />

          <ProofCard
            title="WhatsApp Auto-Reply System"
            description="Automated lead handling, FAQs, and follow-ups to reduce response time and operational cost."
            icon={<ShieldCheck />}
          />

          <ProofCard
            title="Email Automation Workflow"
            description="Logic-driven auto-responders that filter, route, and reply to inbound inquiries instantly."
            icon={<Activity />}
          />
        </div>

        {/* PRIVATE CLIENT SYSTEMS */}
        <div className="mb-32">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Private Client Systems
          </h2>

          <div className="relative rounded-2xl border border-white/10 bg-black/60 p-10 text-center backdrop-blur">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full border border-red-600/40">
                <Lock className="w-6 h-6 text-red-500" />
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">Restricted Access</h3>

            <p className="text-gray-400 max-w-xl mx-auto">
              Some systems are private, client-owned, or security-sensitive.
              Architecture, logic, and results are disclosed only after contact.
            </p>

            <p className="text-sm text-gray-500 mt-6">
              NDA • Revenue Systems • Internal Tools
            </p>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="mb-32">
          <h2 className="text-2xl font-bold mb-12 text-center">
            How Problems Get Solved
          </h2>

          <div className="space-y-10 max-w-3xl mx-auto">
            <TimelineItem
              step="01"
              title="Diagnosis"
              text="Identify bottlenecks, broken flows, and inefficiencies."
            />

            <TimelineItem
              step="02"
              title="System Design"
              text="Design scalable logic — not patches."
            />

            <TimelineItem
              step="03"
              title="Implementation"
              text="Build fast, clean, and production-ready systems."
            />

            <TimelineItem
              step="04"
              title="Optimization"
              text="Refine for speed, cost reduction, and reliability."
            />
          </div>
        </div>
        {/* TESTIMONIALS */}
        <div className="mb-32">
          <h2 className="text-2xl font-bold mb-12 text-center">
            What Clients Say (Privately)
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Testimonial
              quote="They didn’t just fix the issue — They redesigned the entire system so it couldn’t break again."
              role="Founder, SaaS Startup"
            />

            <Testimonial
              quote="Response time dropped immediately. Automation paid for itself in weeks."
              role="Operations Lead, E-commerce"
            />

            <Testimonial
              quote="Very few people think in systems. They do — quietly and effectively."
              role="CTO, Private Client"
            />
          </div>
        </div>

        {/* CONVERSION SECTION */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            If You See the Problem — We Fix It
          </h2>
          <p className="text-gray-400 mb-8">
            If your business is leaking time, money, or attention, that’s a
            systems issue.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-red-500 font-semibold hover:underline"
          >
            Start a conversation
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- COMPONENTS ---------------- */

function ProofCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="relative group">

      {/* OUTER GLOW BORDER */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-red-600/40 via-transparent to-white/10 opacity-60 group-hover:opacity-100 transition duration-500" />

      {/* CARD */}
      <div className="relative rounded-2xl bg-black/85 backdrop-blur border border-white/10 p-6 sm:p-8 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-red-600/40">

        {/* ACCENT LINE */}
        <div className="absolute left-0 top-0 h-full w-[3px] bg-red-600 rounded-l-2xl" />

        <div className="flex flex-col sm:flex-row gap-6 items-start">

          {/* ICON */}
          <div className="shrink-0">
            <div className="p-3 rounded-xl border border-white/15 text-red-500 bg-black/60">
              {icon}
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2 tracking-tight">
              {title}
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-xl">
              {description}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}


function TimelineItem({
  step,
  title,
  text,
}: {
  step: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-6">
      <div className="text-red-500 font-bold">{step}</div>
      <div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-gray-400">{text}</p>
      </div>
    </div>
  );
}
function Testimonial({ quote, role }: { quote: string; role: string }) {
  return (
    <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-red-600/30 via-transparent to-white/10">
      <div className="rounded-2xl bg-black/80 backdrop-blur p-6 h-full">
        <Quote className="w-6 h-6 text-red-500 mb-4" />

        <p className="text-gray-300 mb-6">“{quote}”</p>

        <p className="text-sm text-gray-500">— {role}</p>
      </div>
    </div>
  );
}
