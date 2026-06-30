"use client";

import { motion } from "framer-motion";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { BlurredStagger } from "@/components/about/ui/blurred-stagger-text";
import { MagicText } from "@/components/about/ui/magic-text";
import { GrowthTimeline } from "@/components/about/GrowthTimeline";
import { ExecutiveTeam } from "@/components/about/ExecutiveTeam";

const leadershipPrinciples = [
  {
    number: "01",
    title: "Start with the client's real problem",
    body: "Before proposing a service, a tool, or a solution, a 4AT leader understands the actual business problem behind the request. We do not sell what we have. We solve what the client needs. If the fit is not right, we say so.",
    accent: "#38bdf8",
  },
  {
    number: "02",
    title: "Own the output, not just the process",
    body: '"I handed it to the team" is not accountability. A 4AT leader is accountable for the quality of what leaves the firm, whether it is a reconciliation, an AI model output, a curriculum module, or a client recommendation. The work is yours until the client signs off.',
    accent: "#a78bfa",
  },
  {
    number: "03",
    title: "Stay close to the detail",
    body: "Leaders at 4AT operate at every level. No engagement detail is beneath a senior leader's attention. If the numbers do not feel right, if the model output is unusual, if the client's tone shifts, a 4AT leader notices, asks, and investigates. Distance from the work is where quality dies.",
    accent: "#2dd4bf",
  },
  {
    number: "04",
    title: "Develop the next person before yourself",
    body: "A 4AT leader's primary job is to make the person below them more capable. If your team cannot operate without you, you have not led. You have created dependency. Develop, delegate, and raise the standard. Then raise it again.",
    accent: "#7dd3fc",
  },
  {
    number: "05",
    title: "Say what is true, then commit",
    body: "A 4AT leader speaks the difficult truth in the room to clients, colleagues, and leadership. They do not soften assessments to avoid discomfort. Once a decision is made after honest debate, they commit to it fully and without reservation. Silence is not diplomacy. It is a failure to lead.",
    accent: "#c084fc",
  },
  {
    number: "06",
    title: "Hold the standard when no one is watching",
    body: "In finance, the errors that matter most happen when no one is checking. A 4AT leader applies the same rigor to a routine reconciliation as to a high-stakes audit deliverable. The standard does not change based on the audience, the deadline, or the pressure.",
    accent: "#38bdf8",
  },
  {
    number: "07",
    title: "Know the domain before you use the tool",
    body: "A 4AT leader understands every workflow they automate. They do not deploy AI where they cannot explain the manual process first. Tools extend expertise. They do not replace the requirement to have it.",
    accent: "#2dd4bf",
  },
  {
    number: "08",
    title: "Move fast, but never ahead of accuracy",
    body: "Speed is expected. Cutting corners is not. When a 4AT leader faces a choice between delivering faster and delivering right, they choose right and communicate the timeline clearly rather than deliver quietly on a lower standard.",
    accent: "#a78bfa",
  },
];


export default function AboutClient() {
  return (
    <div className="about-page constant-site-background min-h-screen overflow-x-hidden text-white">
      <Nav />

      <main>
        <section className="relative overflow-hidden bg-transparent site-section pt-32 md:pt-36">
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:88px_88px]" />
          <div className="absolute -left-32 top-10 size-[26rem] rounded-full bg-[#38bdf8]/12 blur-3xl" />

          <div className="relative z-10 mx-auto w-full max-w-[1200px]">
            <div className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-xs font-black uppercase tracking-[0.28em] text-[#7dd3fc]">
                  Vision
                </span>
                <h2 className="mt-5 site-heading uppercase xl:whitespace-nowrap">
                  The future we are <span className="text-brand-gradient-flow">building toward.</span>
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="relative mt-12 w-full"
              >
                <div className="mb-8 h-px w-full bg-gradient-to-r from-[#7dd3fc]/60 via-white/15 to-transparent" />
                <p className="text-2xl font-black leading-tight tracking-tight text-white md:text-4xl">
                  <BlurredStagger text="To create a future where every finance team runs on " />
                  <BlurredStagger text="hybrid services." className="text-brand-gradient-flow" />
                </p>
                <p className="mt-7 text-base font-semibold leading-relaxed text-white/72 md:text-lg">
                  People, process, and AI working together, so accounting is faster, more insightful, and always reliable.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-transparent site-section">
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.07)_1px,transparent_1px)] bg-[size:88px_88px]" />
          <div className="absolute -right-32 bottom-10 size-[28rem] rounded-full bg-[#a78bfa]/14 blur-3xl" />

          <div className="relative z-10 mx-auto w-full max-w-[1200px]">
            <div className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-xs font-black uppercase tracking-[0.28em] text-[#a78bfa]">
                  Mission
                </span>
                <h2 className="mt-5 site-heading uppercase">
                  The role we are <span className="text-brand-gradient-flow">built to own.</span>
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="relative mt-12 w-full"
              >
                <div className="mb-8 h-px w-full bg-gradient-to-r from-[#a78bfa]/60 via-white/15 to-transparent" />
                <MagicText
                  text="Our mission is to unite the world of business with hybrid services. Regardless of size or stage, we are built to be the accounting, audit, assurance, advisory and transformation (4AT) partner that lasts."
                  className="text-lg font-bold text-white/86 md:text-2xl"
                />
                <MagicText
                  text="The one designed to outgrow the technological chaos created by outsourcing and AI, through an innovative hybrid ecosystem that integrates with ever-evolving technology and scales with every business we serve."
                  className="text-base font-semibold text-white/64 md:text-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <GrowthTimeline />

        <ExecutiveTeam />

        <section className="relative overflow-hidden bg-transparent site-section">
          <div className="pointer-events-none absolute inset-0 opacity-15 bg-[linear-gradient(to_right,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:84px_84px]" />
          <div className="pointer-events-none absolute -left-40 top-20 size-[30rem] rounded-full bg-[#38bdf8]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-40 bottom-20 size-[30rem] rounded-full bg-[#a78bfa]/12 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-[1200px]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl"
            >
              <span className="text-xs font-black uppercase tracking-[0.28em] text-[#7dd3fc]">
                Leadership Principles
              </span>
              <h2 className="mt-5 site-heading uppercase">
                The standard behind{" "}
                <span className="text-brand-gradient-flow">how 4AT leads.</span>
              </h2>
              <p className="mt-6 max-w-3xl text-base font-semibold leading-relaxed text-white/70 md:text-lg">
                Eight operating principles that define how we think, decide, review,
                and deliver when client trust is on the line.
              </p>
            </motion.div>

            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {leadershipPrinciples.map((principle, index) => (
                <motion.article
                  key={principle.number}
                  initial={{ opacity: 0, y: 34 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    delay: Math.min(index * 0.05, 0.25),
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative min-h-[300px] overflow-hidden rounded-2xl border border-white/12 bg-[#090f1f]/88 p-7 shadow-[0_24px_70px_rgba(0,0,0,0.34)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/22 md:p-8"
                >
                  <div
                    className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full opacity-20 blur-3xl transition-opacity duration-300 group-hover:opacity-35"
                    style={{ backgroundColor: principle.accent }}
                  />
                  <div
                    className="absolute left-0 top-0 h-full w-1 opacity-80"
                    style={{ backgroundColor: principle.accent }}
                  />

                  <div className="relative flex h-full flex-col">
                    <div className="mb-8 flex items-start justify-between gap-6">
                      <span
                        className="font-mono text-5xl font-black leading-none md:text-6xl"
                        style={{ color: principle.accent }}
                      >
                        {principle.number}
                      </span>
                      <span className="mt-4 h-px flex-1 bg-gradient-to-r from-white/25 to-transparent" />
                    </div>

                    <h3 className="text-2xl font-black uppercase leading-tight tracking-tight text-white md:text-3xl">
                      {principle.title}
                    </h3>
                    <p className="mt-5 text-sm font-semibold leading-relaxed text-white/66 md:text-base">
                      {principle.body}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
