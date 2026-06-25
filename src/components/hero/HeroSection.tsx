"use client";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#04060f]"
    >
     {/* Background */}
<div className="absolute inset-0">

  {/* Video Background */}
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    className="absolute inset-0 w-full h-full object-cover "
  >
   <source src="/hero-bg.mp4" type="video/mp4" />
  </video>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-[#04060f]/70" />


        {/* Stars
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        /> */}

        {/* Purple Glow */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "900px",
            height: "900px",
            background:
              "radial-gradient(circle, rgba(167,139,250,.18) 0%, transparent 70%)",
            filter: "blur(120px)",
          }}
        />

        {/* Bottom Grid */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[250px] opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(167,139,250,.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(167,139,250,.15) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            transform: "perspective(800px) rotateX(75deg)",
            transformOrigin: "bottom",
          }}
        />

        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 0%, rgba(4,6,15,.25) 55%, rgba(4,6,15,.95) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full mb-8"
            style={{
              border: "1px solid rgba(167,139,250,.25)",
              background: "rgba(167,139,250,.05)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div className="w-2 h-2 rounded-full bg-violet-400" />
            <span
              className="uppercase tracking-[4px] text-xs font-medium"
              style={{ color: "#a78bfa" }}
            >
              Applied AI For Finance
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-black leading-[0.8] tracking-[-0.05em]">
  <span className="block text-white text-[clamp(3rem,7vw,6rem)]">
    FINANCE-NATIVE
  </span>

  <span className="block text-[clamp(3rem,7vw,6rem)] bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">
    AI FOR ACCOUNTING
  </span>

  <span className="block text-violet-400 text-[1.5em] my-2">
    ✦
  </span>

  <span className="block text-[clamp(2.6rem,6vw,5rem)] text-white/35">
    FINANCE WORKFLOWS
  </span>
</h1>

          {/* Description */}
          <p
            className="mx-auto mt-10 max-w-4xl leading-relaxed"
            style={{
              fontSize: "clamp(1.1rem,1.6vw,1.35rem)",
              color: "rgba(255,255,255,.72)",
            }}
          >
            4AT brings finance-native AI into the workflows where accounting
            teams lose the most time, reconciliation, exception review,
            document handling, and reporting, so automation fits the realities
            of finance, not just the promise of software.
          </p>

          {/* Capability Pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {[
              "Reconciliation",
              "Exception Review",
              "Document Handling",
              "Financial Reporting",
              "Audit Support",
              "ERP Integration",
            ].map((item) => (
              <span
                key={item}
                className="px-5 py-2 rounded-xl text-sm"
                style={{
                  border: "1px solid rgba(167,139,250,.2)",
                  background: "rgba(255,255,255,.02)",
                  color: "rgba(255,255,255,.8)",
                }}
              >
                {item}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <button
              className="px-8 py-4 rounded-xl text-white font-semibold transition-all hover:-translate-y-1"
              style={{
                background:
                  "linear-gradient(90deg,#a78bfa,#c084fc)",
              }}
            >
              Explore AI Solutions →
            </button>

            <button
              className="px-8 py-4 rounded-xl text-white font-semibold border"
              style={{
                borderColor: "rgba(255,255,255,.15)",
                background: "rgba(255,255,255,.03)",
              }}
            >
              Book a Demo
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Hint */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[3px]"
        style={{ color: "rgba(255,255,255,.25)" }}
      >
        Scroll
      </div>
    </section>
  );
}
