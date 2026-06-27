const comparisonRows = [
  ["Cost", "$$$$ hourly", "$ but risky", "Flat subscription"],
  ["Speed", "Weeks", "Seconds", "Seconds + same-day human review"],
  ["Trust", "High but slow", "Low — no judgment", "High — humans verify edge cases"],
  ["Coverage", "What you can afford", "Only what AI handles", "End-to-end APO, controls, tax, FP&A"],
  ["Model", "Hourly billing", "Self-serve software", "Subscription. We handle it."],
];

export function OurVision() {
  return (
    <section id="our-vision" className="relative overflow-hidden bg-transparent px-6 py-20 text-white md:px-12 md:py-28">
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="relative mx-auto max-w-[1200px]">
        <div className="max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-[.24em] text-[#7dd3fc]">The market gap</span>
          <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
            Beyond the <span className="text-brand-gradient-flow">Trade-off.</span>
          </h2>
          <p className="mt-6 max-w-4xl text-base leading-relaxed text-white/75 md:text-lg">
            Traditional firms are too slow. Pure AI is too risky. We engineered a third way.
          </p>
          <p className="mt-5 text-lg font-semibold text-white md:text-xl">
            <span className="text-brand-gradient">4AT Hybrid Services</span> is the third option.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto rounded-2xl border border-[#2dd4bf]/30 bg-[#0b1020]/90 shadow-2xl shadow-black/30 ring-1 ring-[#2dd4bf]/10">
          <table className="w-full min-w-[760px] border-collapse text-left">
            <thead>
              <tr className="border-b border-white/15 text-xs uppercase tracking-[.16em] text-white/55">
                <th className="px-6 py-6 font-semibold">Compare the models</th>
                <th className="px-6 py-6 font-semibold">Traditional Firms</th>
                <th className="px-6 py-6 font-semibold">Pure AI Tools</th>
                <th className="bg-[#2dd4bf]/15 px-6 py-6 font-bold text-[#8ff5e4]">4AT Hybrid Services</th>
              </tr>
            </thead>
            <tbody className="text-sm md:text-base">
              {comparisonRows.map(([need, traditional, ai, hybrid]) => (
                <tr key={need} className="border-b border-white/10 last:border-0">
                  <th scope="row" className="px-6 py-5 font-semibold text-white">{need}</th>
                  <td className="px-6 py-5 text-white/60">{traditional}</td>
                  <td className="px-6 py-5 text-white/60">{ai}</td>
                  <td className="bg-[#2dd4bf]/[0.07] px-6 py-5 font-semibold text-[#c5fff6]">{hybrid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mx-auto mt-10 max-w-3xl text-center">
          <p className="text-xl font-semibold leading-relaxed text-white md:text-2xl">You pick the outcome. We pick the right tool — AI or human — for each task.</p>
          <a href="#process" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#7dd3fc] transition hover:text-white">
            See exactly how the work gets split <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
