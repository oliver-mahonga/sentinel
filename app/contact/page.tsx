import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <section className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Let’s Fix Your Systems
          </h1>
          <p className="text-gray-400 text-lg">
            Whether it’s a broken website, slow communication, or inefficient workflows,
            Sentinel Systems is built to solve it.
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-16">

          {/* FORM */}
          <div className="border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Start the Conversation</h2>

            <form className="space-y-6">
              <Input placeholder="Your Name" />
              <Input placeholder="Email Address" type="email" />
              <Input placeholder="Company / Website (optional)" />
              <Textarea
                placeholder="Describe the problem you're facing..."
                rows={5}
              />

              <Button className="w-full bg-red-600 hover:bg-red-700">
                Send Message
              </Button>
            </form>

            <p className="text-xs text-gray-500 mt-4">
              You’ll receive a response within 24 hours.
            </p>
          </div>

          {/* CONTACT OPTIONS */}
          <div className="space-y-8">

            <ContactCard
              title="Email"
              value="oliver@sentinelsystems.dev"
              description="Best for detailed discussions"
            />

            <ContactCard
              title="Telegram"
              value="t.me/elenasaida"
              description="Fast, direct communication"
            />

            <ContactCard
              title="GitHub"
              value="github.com/yourusername"
              description="View technical work & systems"
            />

            <ContactCard
              title="WhatsApp (Optional)"
              value="+254 XXX XXX XXX"
              description="Quick inquiries & follow-ups"
            />
          </div>
        </div>

        {/* FOOTER MESSAGE */}
        <div className="text-center mt-24 text-gray-500 max-w-2xl mx-auto">
          Sentinel Systems works with individuals and companies who value
          clarity, speed, and results — not noise.
        </div>

      </div>
    </section>
  );
}

function ContactCard({
  title,
  value,
  description,
}: {
  title: string;
  value: string;
  description: string;
}) {
  return (
    <div className="border border-white/10 rounded-xl p-6 hover:border-red-600 transition">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-red-500 mt-2">{value}</p>
      <p className="text-sm text-gray-400 mt-1">{description}</p>
    </div>
  );
}
