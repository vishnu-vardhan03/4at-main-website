"use client";

import { useState } from "react";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Send to your backend/Zapier/HubSpot
    try {
      await fetch("/api/leads", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Form submission failed", error);
    }
  };

  if (submitted) {
    return (
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
        <p className="text-white/65">We'll be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Your name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50"
      />
      <input
        type="email"
        placeholder="Work email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50"
      />
      <input
        type="tel"
        placeholder="Phone (optional)"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50"
      />
      <input
        type="text"
        placeholder="Company name"
        value={formData.company}
        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        required
        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50"
      />
      <button
        type="submit"
        className="w-full px-4 py-3 bg-gradient-to-r from-violet-500 to-cyan-400 text-white font-bold rounded-lg hover:shadow-lg transition-all"
      >
        Get Started
      </button>
    </form>
  );
}