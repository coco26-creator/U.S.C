import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "+852 6934 6630" },
  { icon: Mail, label: "info@unitedspiritshk.com" },
  { icon: MapPin, label: "Wanchai, Hong Kong" },
  { icon: Clock, label: "Mon – Fri 08:30 – 17:00 HKT" },
];

const socials = [
  { label: "WhatsApp", href: "https://wa.me/85269346630" },
  { label: "Instagram", href: "https://www.instagram.com/united_spiritshk/" },
  { label: "X", href: "https://x.com/unitedspiritshk" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61579254602509" },
  { label: "TikTok", href: "https://www.tiktok.com/@unitedspiritshk" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      await fetch("https://formspree.io/f/mkgqadqr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });
      setSent(true);
      setForm({ name: "", email: "", company: "", message: "" });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="bg-secondary/40 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-xs font-body font-semibold tracking-[0.25em] uppercase">
              Get in Touch
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ready to enter Asia?{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Let's talk.
            </span>
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Whether you're shipping your first container into China or looking to scale across
            the region, we'll walk you through the full process — timeline, costs, and market
            fit — with no obligation. Most enquiries receive a personalised response within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-sm border border-border/50 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-body font-medium text-foreground mb-1.5 block">
                  Name
                </label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  required
                  className="font-body"
                />
              </div>
              <div>
                <label className="text-sm font-body font-medium text-foreground mb-1.5 block">
                  Email
                </label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@company.com"
                  required
                  className="font-body"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-body font-medium text-foreground mb-1.5 block">
                Company
              </label>
              <Input
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                placeholder="Your company name"
                className="font-body"
              />
            </div>
            <div>
              <label className="text-sm font-body font-medium text-foreground mb-1.5 block">
                Message
              </label>
              <Textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your product and goals..."
                rows={5}
                required
                className="font-body resize-none"
              />
            </div>

            {sent ? (
              <div className="py-3 px-5 rounded-xl bg-green-50 text-green-700 font-body text-sm font-medium text-center">
                Thank you! We'll be in touch within 24 hours.
              </div>
            ) : (
              <button
                type="submit"
                disabled={sending}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-body font-semibold text-sm hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 disabled:opacity-70"
              >
                <Send className="w-4 h-4" />
                {sending ? "Sending..." : "Send Message"}
              </button>
            )}
          </motion.form>

          {/* Info sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-5">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0F1117] flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-gold" />
                  </div>
                  <span className="font-body text-sm text-foreground">{item.label}</span>
                </div>
              ))}
            </div>

            <div>
              <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-4">
                Follow Us
              </p>
              <div className="flex flex-wrap gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-full border border-border/80 text-xs font-body font-medium text-muted-foreground hover:border-gold hover:text-gold transition-all duration-300"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
