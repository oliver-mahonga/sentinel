"use client";

import { useState } from "react";
import {
  Mail,
  Send,
  Github,
  MessageCircle,
  Copy,
  Check,
  MapPin,
} from "lucide-react";

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
    <section className="pt-28 md:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6">
            Let’s Fix Your Systems
          </h1>
          <p className="text-gray-400 text-base md:text-lg">
            Broken websites, slow communication, inefficient workflows —
            Sentinel Systems identifies the problem and deploys solutions.
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* FORM */}
          {/* FORM */}
          <div className="border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur relative overflow-hidden">
            {/* SUCCESS STATE */}
            {success && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-black/40 backdrop-blur-sm animate-in fade-in zoom-in duration-500">
                <div className="relative mb-6">
                  {/* Pulse Ring */}
                  <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping" />
                  <div className="relative w-20 h-20 rounded-full bg-green-600 flex items-center justify-center">
                    <Check className="w-10 h-10 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-2">Message Sent</h3>
                <p className="text-gray-400 max-w-sm">
                  Thanks for reaching out. I’ve received your message and will
                  respond shortly.
                </p>

                <Button
                  variant="ghost"
                  className="mt-6 border border-white/10 hover:border-green-500"
                  onClick={() => setSuccess(false)}
                >
                  Send another message
                </Button>
              </div>
            )}

            {/* FORM CONTENT */}
            <div
              className={`transition-all duration-500 ${
                success
                  ? "opacity-0 scale-95 pointer-events-none"
                  : "opacity-100 scale-100"
              }`}
            >
              <h2 className="text-xl md:text-2xl font-bold mb-6">
                Start the Conversation
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
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

                {error && <p className="text-red-500 text-sm">{error}</p>}
              </form>

              <p className="text-xs text-gray-500 mt-4">
                Typical response time: under 24 hours.
              </p>
            </div>
          </div>

          {/* CONTACT + MAP */}
          <div className="space-y-8">
            <ContactCard
              title="Email"
              value="mahongaollie@gmail.com"
              href="mailto:mahongaollie@gmail.com"
              icon={Mail}
              description="Best for detailed technical discussions"
            />

            <ContactCard
              title="Telegram"
              value="t.me/elenasaida"
              href="https://t.me/elenasaida"
              icon={Send}
              description="Fast, direct communication"
            />

            <ContactCard
              title="GitHub"
              value="github.com/oliver-mahonga"
              href="https://github.com/oliver-mahonga"
              icon={Github}
              description="View real systems & code"
            />

            <ContactCard
              title="WhatsApp"
              value="+254 746 378 772"
              href="https://wa.me/254746378772"
              icon={MessageCircle}
              description="Quick follow-ups & confirmations"
            />

            {/* MAP */}
            <div className="border border-white/10 rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 p-4 border-b border-white/10">
                <MapPin className="w-5 h-5 text-red-500" />
                <h3 className="font-semibold">Meru County, Kenya</h3>
              </div>

              <iframe
                className="w-full h-[260px] md:h-[320px]"
                loading="lazy"
                src="https://maps.google.com/maps?q=Meru%20County%20Kenya&t=&z=10&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="text-center mt-24 text-gray-500 max-w-2xl mx-auto text-sm">
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
  href,
  description,
  icon: Icon,
}: {
  title: string;
  value: string;
  href: string;
  description: string;
  icon: React.ElementType;
}) {
  const [copied, setCopied] = useState(false);

  function copyValue(e: React.MouseEvent) {
    e.preventDefault();
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block border border-white/10 rounded-xl p-5 sm:p-6 transition hover:border-red-600 group"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5 text-red-500 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>

        <button
          onClick={copyValue}
          className="text-gray-400 hover:text-red-500 transition"
        >
          {copied ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>

      <p className="text-red-500 mt-3 break-all group-hover:underline">
        {value}
      </p>

      <p className="text-sm text-gray-400 mt-1">{description}</p>
    </a>
  );
}
