"use client";

import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import React, { useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./Button";
import { lmsCourses } from "@/lib/site-data";
import posthog from "posthog-js";
import { NeonGlowOrb } from "@/components/academy/NeonGlowOrb";

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    courseInterest: "",
    message: "",
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Info column reveal
      gsap.fromTo(
        ".contact-info-side",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Form card reveal
      gsap.fromTo(
        ".contact-form-side",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, sectionRef.current || undefined);

    return () => ctx.revert();
  }, []);

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = "Full name is required";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone || formData.phone.length < 8) {
      tempErrors.phone = "Enter a valid phone number";
    }

    if (!formData.courseInterest) {
      tempErrors.courseInterest = "Please select a course or inquiry topic";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch("/api/academy-inquiry", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (response.ok) {
          setIsSubmitted(true);
          // Analytics capture for low-intent inquiry submit success
          posthog.capture("inquiry_submitted", {
            course_interest: formData.courseInterest,
            has_message: !!formData.message,
          });
        } else {
          setErrors({ form: data.error || "Something went wrong." });
        }
      } catch (error) {
        console.error("Submission error:", error);
        setErrors({ form: "Failed to submit inquiry. Please try again." });
      }
    }
  };

  return (
    <section ref={sectionRef} id="contact-us" className="relative w-full overflow-visible bg-transparent text-ink-primary pt-24 pb-16 sm:pt-32 sm:pb-24">
      <NeonGlowOrb 
        className="left-[25%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-0"
        size={450}
        opacity={0.18}
        blur={50}
      />

      <div className="site-shell relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-16 lg:gap-24 items-center">

          {/* Left Column: Contact details & pitch */}
          <div className="contact-info-side">
            <span className="section-eyebrow mb-6 text-accent uppercase tracking-widest text-[11px] font-bold">
              GET IN TOUCH
            </span>
            <h2 className="font-sans text-4xl sm:text-5xl font-bold tracking-tight text-white mt-6 leading-none">
              Start Your <span className="font-serif italic font-bold text-accent">Career</span>
              <br />
              Transition Today.
            </h2>
            <p className="mt-6 text-base text-ink-secondary leading-relaxed max-w-[48ch]">
              Have questions about our training tracks, corporate partnerships, or placement assistance? Speak with our admissions advisors to find your path.
            </p>

            <div className="mt-12 space-y-8">
              <div className="contact-detail-item flex items-center gap-4 group">
                <div className="flex items-center justify-center w-[36px] h-[36px] bg-white/[0.03] border border-white/10 rounded-[8px] shrink-0">
                  <Mail className="size-4 text-accent" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.13em] uppercase text-slate-500 leading-none mb-1.5">EMAIL US</p>
                  <a href="mailto:hello@4atacademy.com" className="text-sm font-medium text-slate-300 hover:text-accent transition duration-200">
                    hello@4atacademy.com
                  </a>
                </div>
              </div>

              <div className="contact-detail-item flex items-center gap-4 group">
                <div className="flex items-center justify-center w-[36px] h-[36px] bg-white/[0.03] border border-white/10 rounded-[8px] shrink-0">
                  <Phone className="size-4 text-accent" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.13em] uppercase text-slate-500 leading-none mb-1.5">CALL US</p>
                  <a href="tel:+919000000000" className="text-sm font-medium text-slate-300 hover:text-accent transition duration-200">
                    +91 90000 00000
                  </a>
                </div>
              </div>

              <div className="contact-detail-item flex items-center gap-4 group">
                <div className="flex items-center justify-center w-[36px] h-[36px] bg-white/[0.03] border border-white/10 rounded-[8px] shrink-0">
                  <MapPin className="size-4 text-accent" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.13em] uppercase text-slate-500 leading-none mb-1.5">HEADQUARTERS</p>
                  <span className="text-sm font-medium text-slate-300">Mumbai, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Glassmorphic inquiry Form Card */}
          <div className="contact-form-side relative rounded-3xl border border-white/8 bg-[#121212] p-8 sm:p-10 shadow-2xl overflow-hidden max-w-[480px] mx-auto lg:ml-auto w-full">
            <div className="absolute -inset-px bg-gradient-to-br from-accent/10 to-transparent rounded-3xl pointer-events-none z-0" />

            <div className="relative z-10">
              {isSubmitted ? (
                // Success State
                <div className="py-8 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="size-8 text-accent animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Thank you for reaching out. An advisor will review your query regarding <strong>{formData.courseInterest}</strong> and get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-2xl font-bold text-white leading-tight">Quick Inquiry</h3>
                  <p className="text-sm text-slate-400 leading-snug">Fill out the details below and an advisor will contact you within 24 hours.</p>

                  {errors.form && (
                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs">
                      {errors.form}
                    </div>
                  )}

                  <div className="space-y-4 pt-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Full Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="Enter full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-white/8 bg-[#04060f]/60 px-4 py-3.5 text-sm text-white placeholder-slate-600 outline-none hover:border-white/15 focus:border-accent focus:bg-[#04060f]/80 transition-colors"
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Email Address <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-white/8 bg-[#04060f]/60 px-4 py-3.5 text-sm text-white placeholder-slate-600 outline-none hover:border-white/15 focus:border-accent focus:bg-[#04060f]/80 transition-colors"
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Phone Number <span className="text-accent">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        placeholder="Enter your mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-white/8 bg-[#04060f]/60 px-4 py-3.5 text-sm text-white placeholder-slate-600 outline-none hover:border-white/15 focus:border-accent focus:bg-[#04060f]/80 transition-colors"
                      />
                      {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label htmlFor="courseInterest" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Course Interest / Topic <span className="text-accent">*</span>
                      </label>
                      <select
                        id="courseInterest"
                        required
                        value={formData.courseInterest}
                        onChange={(e) => setFormData({ ...formData, courseInterest: e.target.value })}
                        className="w-full rounded-xl border border-white/8 bg-[#04060f]/60 px-4 py-3.5 text-sm text-white outline-none hover:border-white/15 focus:border-accent focus:bg-[#04060f]/80 transition-colors appearance-none cursor-pointer"
                        style={{
                          backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 16px center",
                          backgroundSize: "16px"
                        }}
                      >
                        <option value="" className="bg-[#0b0e1a]">Select topic</option>
                        {lmsCourses.map((c) => (
                          <option key={c.title} value={c.title} className="bg-[#0b0e1a]">{c.title}</option>
                        ))}
                        <option value="General Inquiry" className="bg-[#0b0e1a]">General Inquiry / Placements</option>
                        <option value="Other" className="bg-[#0b0e1a]">Other</option>
                      </select>
                      {errors.courseInterest && <p className="text-red-400 text-xs mt-1">{errors.courseInterest}</p>}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Message / Query
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        placeholder="Write your query details here..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-xl border border-white/8 bg-[#04060f]/60 px-4 py-3.5 text-sm text-white placeholder-slate-600 outline-none hover:border-white/15 focus:border-accent focus:bg-[#04060f]/80 transition-colors resize-none"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    className="group w-full py-4 text-xs rounded-xl mt-4"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="size-3.5 text-[#04060f] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ml-1.5" />
                  </Button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

