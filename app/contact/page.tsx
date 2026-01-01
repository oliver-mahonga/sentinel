"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          message: formData.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Failed");

      setSuccess(true);
      form.reset();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="pt-36 pb-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Let’s Fix Your Systems
          </h1>
          <p className="text-gray-400 text-lg">
            Broken websites, slow communication, inefficient workflows —
            Sentinel Systems identifies the problem and deploys solutions.
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* FORM */}
          <div className="border border-white/10 rounded-2xl p-8 backdrop-blur">
            <h2 className="text-2xl font-bold mb-6">
              Start the Conversation
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input name="name" placeholder="Your Name" required />
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                required
              />
              <Input
                name="company"
                placeholder="Company / Website (optional)"
              />
              <Textarea
                name="message"
                placeholder="Describe the problem you're facing..."
                rows={5}
                required
              />

              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>

              {success && (
                <p className="text-green-500 text-sm">
                  Message sent successfully. You’ll hear back shortly.
                </p>
              )}

              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}
            </form>

            <p className="text-xs text-gray-500 mt-4">
              Typical response time: under 24 hours.
            </p>
          </div>

          {/* CONTACT OPTIONS */}
          <div className="space-y-8">
            <ContactCard
              title="Email"
              value="oliver@sentinelsystems.dev"
              description="Best for detailed technical discussions"
            />

            <ContactCard
              title="Telegram"
              value="t.me/elenasaida"
              description="Fast, direct communication"
            />

            <ContactCard
              title="GitHub"
              value="https://github.com/oliver-mahonga"
              description="View real systems & code"
            />

            <ContactCard
              title="WhatsApp"
              value="+254 463 787 72"
              description="Quick follow-ups & confirmations"
            />
          </div>
        </div>

        {/* FOOTER MESSAGE */}
        <div className="text-center mt-28 text-gray-500 max-w-2xl mx-auto">
          Sentinel Systems partners with individuals and companies that value
          clarity, speed, and real results — not buzzwords.
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
      <p className="text-red-500 mt-2 break-all">{value}</p>
      <p className="text-sm text-gray-400 mt-1">{description}</p>
    </div>
  );
}
