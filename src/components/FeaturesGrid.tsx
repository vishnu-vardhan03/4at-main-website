import { motion } from "framer-motion";
import profilePhoto from "@/assets/ethan_portrait.png";
import logo from "@/assets/logo.png";

const AVATARS = [
  profilePhoto.src,
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&h=120&q=80",
];

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export function FeaturesGrid() {
  return (
    <section id="features-grid" className="relative overflow-hidden border-t border-white/10 bg-[#04060f] px-6 py-24 text-white [background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:80px_80px] md:px-12 lg:px-20">
      <div className="relative max-w-[1180px] mx-auto">
        <div className="mb-12 text-center">
          <span className="text-[11px] font-bold uppercase tracking-[3px] text-sky-300">Why choose us</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight leading-none">Built to feel like your <span className="bg-gradient-to-r from-teal-300 via-sky-300 to-violet-400 bg-clip-text text-transparent">extended team.</span></h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.15fr_0.9fr] lg:items-stretch">
          <motion.article {...reveal(0)} className="relative min-h-[560px] overflow-hidden rounded-[22px] border border-sky-400/25 bg-gradient-to-br from-[#0a1023] via-[#080b1a] to-[#060814] p-8">
            <div className="absolute -right-24 -top-24 size-72 rounded-full bg-sky-400/15 blur-3xl" />
            <div className="relative flex h-full flex-col">
              <span className="w-fit rounded-full border border-white/15 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">Extended team</span>
              <h3 className="mt-6 text-2xl font-bold leading-tight">Works like your in-house team</h3>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-zinc-400">Our specialists integrate into your processes and work in your timezone as an extension of your firm, not a distant supplier.</p>
              <ul className="mt-8 space-y-3 text-sm font-medium text-zinc-200">
                {["Integrated into your workflows", "In your timezone when it matters", "Full visibility and control"].map((item) => <li key={item} className="flex gap-3"><span className="text-sky-300">›</span>{item}</li>)}
              </ul>
            </div>
          </motion.article>

          <motion.article {...reveal(0.12)} className="relative min-h-[560px] overflow-hidden rounded-[22px] border border-white/10 bg-[rgba(255,255,255,0.04)] p-8 text-center backdrop-blur-md">
            <div className="absolute -right-12 -top-12 size-48 rounded-full bg-violet-400/20 blur-3xl" />
            <div className="relative flex h-full flex-col items-center">
              <span className="w-full rounded-full border border-white/15 bg-black/10 px-4 py-3 text-left text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">4AT</span>
              <div className="relative mt-5 h-72 w-full max-w-sm">
                <div className="absolute left-1/2 top-1/2 size-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/15 animate-[spin_30s_linear_infinite]" />
                <div className="absolute left-1/2 top-1/2 size-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10 animate-[spin_22s_linear_infinite_reverse]" />
                <div className="absolute left-1/2 top-1/2 z-10 grid h-[58px] w-[88px] -translate-x-1/2 -translate-y-1/2 place-items-center"><span aria-label="4AT" role="img" className="brand-logo-gradient h-full w-full drop-shadow-[0_0_20px_rgba(125,211,252,0.7)]" style={{ WebkitMaskImage: `url(${logo.src})`, maskImage: `url(${logo.src})` }} /></div>
                {AVATARS.map((avatar, index) => {
                  const positions = ["left-[8%] top-[35%]", "left-[27%] top-[5%]", "right-[8%] top-[30%]", "left-[18%] bottom-[10%]", "right-[18%] bottom-[10%]", "right-[27%] top-[5%]"];
                  return <img key={avatar} src={avatar} alt="4AT specialist" className={`absolute ${positions[index]} size-14 rounded-full border-2 border-slate-200 object-cover shadow-lg`} />;
                })}
              </div>
              <h3 className="mt-auto text-2xl font-bold">Expert professional team</h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-400">90+ specialists across finance, accounting and technology, providing capacity on demand.</p>
            </div>
          </motion.article>

          <div className="grid gap-6">
            <motion.article {...reveal(0.22)} className="relative min-h-[268px] overflow-hidden rounded-[22px] border border-white/10 bg-[rgba(255,255,255,0.04)] p-8 backdrop-blur-md">
              <div className="absolute right-7 top-6 z-10 text-3xl font-bold tracking-tighter text-cyan-300">24/7</div>
              <div className="absolute -right-16 -top-16 size-48 rounded-full bg-teal-400/25 blur-3xl" />
              <span className="relative rounded-full border border-white/15 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">Reliable</span>
              <h3 className="relative mt-10 text-2xl font-bold leading-tight">Lower cost,<br />no overhead</h3>
              <p className="relative mt-4 max-w-xs text-sm leading-relaxed text-zinc-300">Full-team capacity and expertise without the cost, recruitment or management burden of building it yourself.</p>
            </motion.article>

            <motion.article {...reveal(0.32)} className="relative min-h-[268px] overflow-hidden rounded-[22px] border border-white/10 bg-[rgba(255,255,255,0.04)] p-8 backdrop-blur-md">
              <div className="absolute -bottom-20 -right-16 size-56 rounded-full bg-violet-400/30 blur-3xl" />
              <span className="relative rounded-full border border-white/15 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">Proven</span>
              <h3 className="relative mt-6 text-2xl font-bold leading-tight">Three pillars, proven &amp; growing</h3>
          <p className="relative mt-4 max-w-xs text-sm leading-relaxed text-zinc-300">Consulting, AI and Academy under one brand. An offshore partner since 2019, now with 90+ specialists trusted worldwide.</p>
              <span className="absolute bottom-6 right-7 text-3xl font-black text-violet-200/70">✓</span>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}
