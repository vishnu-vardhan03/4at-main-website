"use client";

import FUITestimonialWithSlide from "@/components/ui/sliding-testimonial";

export function TestimonialsSocialProof() {
  return (
    <section
      id="testimonials"
      className="w-full bg-transparent text-white section-padding overflow-visible relative"
    >
      {/* Background ambient lighting blobs handled by traveling orb */}

      <FUITestimonialWithSlide />
    </section>
  );
}