import { motion } from "framer-motion";
import contactBg from "@/assets/contact_bg.png";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6 md:px-12 lg:px-20 min-h-[750px] flex items-center justify-center overflow-hidden bg-transparent text-white border-t border-white/[0.05]">

      {/* Background Image with Dark Shading */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={contactBg.src}
          alt="Contact Background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black z-10" />
        <div className="absolute inset-0 bg-black/45 z-10" />
      </div>

      <div className="max-w-[1300px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">

        {/* LEFT COLUMN: Text Info & Bullets (lg:col-span-7) */}
        <div className="lg:col-span-7 flex flex-col items-start">

          {/* Header Chip */}
          <span className="text-[10px] tracking-[0.25em] font-black text-white/95 uppercase border border-white/20 rounded-md px-4 py-1.5 bg-white/5 block mb-8">
            We're here to help
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[0.95] mb-12">
            Let’s talk<br />about your<br /><span className="text-brand-gradient">next AI project</span>
          </h2>

          {/* Connect List */}
          <div className="flex flex-col items-start gap-4">
            <span className="text-[10px] text-orange-400/80 font-bold uppercase tracking-[0.2em] mb-2 block">
              How do we connect?
            </span>

            <ul className="space-y-4">
              {[
                "Smart process automation",
                "Direct access to our team — no bots.",
                "We ask smart questions fast.",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm md:text-base font-semibold text-zinc-100">
                  {/* Paper airplane / pointer shape custom SVG path */}
                  <svg className="size-4 text-white fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* RIGHT COLUMN: Glassmorphic Form Card (lg:col-span-5) */}
        <div className="lg:col-span-5 w-full">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={(e) => e.preventDefault()}
            className="bg-white/[0.03] border border-white/[0.08] backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-2xl flex flex-col w-full text-left"
          >
            {/* Form Title */}
            <h3 className="text-lg font-black tracking-tight uppercase text-white mb-8">
              Start your AI journey
            </h3>

            {/* Input Fields */}
            <div className="space-y-6">

              {/* Name Field */}
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                  Name*
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="mt-2 w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-2.5 text-sm transition-colors placeholder:text-zinc-500/60"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                  Email*
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="mt-2 w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-2.5 text-sm transition-colors placeholder:text-zinc-500/60"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Message"
                  className="mt-2 w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-2.5 text-sm transition-colors placeholder:text-zinc-500/60 resize-none"
                />
              </div>

            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-8 bg-white hover:bg-white/95 text-black font-bold py-3.5 px-6 rounded-md transition-colors text-xs uppercase tracking-widest w-fit shadow-md"
            >
              Send Message
            </button>

          </motion.form>
        </div>

      </div>

    </section>
  );
}
