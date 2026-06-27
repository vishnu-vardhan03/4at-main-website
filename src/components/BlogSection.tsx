import { useState, useEffect } from "react";
import type Lenis from "lenis";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import blog1 from "@/assets/blog1.png";
import blog2 from "@/assets/blog2.png";

interface BlogPost {
  title: string;
  author: string;
  date: string;
  image: string;
  excerpt: string;
  content: React.ReactNode;
}

const BLOGS: BlogPost[] = [
  {
    title: "ESSENTIAL PRINCIPLES FOR BUSINESS TAXATION DURING COVID",
    author: "Robert Goulder",
    date: "12 Aug 2020",
    image: blog1.src,
    excerpt: "Discussing the role of corporate tax havens, CARES Act reach, and business taxation models during pandemics.",
    content: (
      <div className="space-y-6">
        <p>
          In part three of our three-part series: <em>Paying for the Pandemic</em>, Kimberly Clausing, professor of economics at Reed College, and Robert Goulder, Tax Notes International contributing editor, discuss the role of business taxation in economic recovery.
        </p>
        <p>Here are a few highlights...</p>
        
        <div>
          <h5 className="font-bold text-black uppercase text-sm mt-4 mb-2">On government pandemic loans and grants for businesses</h5>
          <p className="italic border-l-2 border-zinc-300 pl-4 text-black my-2 leading-relaxed">
            "We need to distinguish between what's temporary and what's permanent. If a business was having losses in earlier years, or if a business had a business model that no longer worked in today's economy, then we wouldn't want to be necessarily propping up such businesses. One distinction I make is between airlines and cruises . . . cruises have long had health issues that are broader than just this one. . . . Some of these judgments can be difficult to make, but I think that the goal is to help companies that you think under the normal course of business would be sustainable, but not to prop up ones whose fundamental business model has been shown to be problematic."
          </p>
          <p className="italic border-l-2 border-zinc-300 pl-4 text-black my-2 leading-relaxed">
            "We have companies like cruise ships that are conveniently headquartered in tax havens where they're receiving all the full benefits of the countries in which they operate, but they're not paying tax to any government, except for maybe minimal fees. It's hard for me to argue that hardworking taxpayers should be subsidizing the survival of such companies. In my view, it's sort of a pay-to-play system. If you want to be a responsible corporate citizen and pay your taxes and do the normal things that we expect people to do, then you expect society as a whole to support you in your time of need. But if you've gone out of your way to invert the company and put it into a tax haven so that you wouldn't ever have to owe the U.S. government anything, then I'm not sure the U.S. taxpayers should be really worried about your future."
          </p>
        </div>

        <div>
          <h5 className="font-bold text-black uppercase text-sm mt-4 mb-2">On the reach of the CARES Act</h5>
          <p className="italic border-l-2 border-zinc-300 pl-4 text-black my-2 leading-relaxed">
            "If you look at the legislation in the Coronavirus Aid, Relief, and Economic Security (CARES) Act, there were some elements that I think were well targeted and some that were poorly targeted. There were a lot of companies that got really generous loan forgiveness, even though their operations might have looked pretty indistinguishable from what they were before. I have an example of a friend who has a law firm and it's really had the same amount of business that it had all along, but it qualified for these loans that then let it actually be forgiven if it kept its payroll up. So, what you're really doing is you are now subsidizing a successful firm that hasn't seen a reduction in its business."
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "THE 6 BIGGEST TECHNOLOGY TRENDS IN ACCOUNTING & FINANCE",
    author: "Bernard Marr",
    date: "15 Oct 2023",
    image: blog2.src,
    excerpt: "Exploring automation, cloud migration, AI models, and cybersecurity challenges shaping modern finance offices.",
    content: (
      <div className="space-y-6">
        <p>
          The accounting and finance sectors are undergoing an unprecedented digital transformation. As technologies evolve, standard roles are shifting from manual transactional tasks to strategic business insights. Here are the six biggest trends shaping the future:
        </p>
        <div>
          <h5 className="font-bold text-black uppercase text-sm mt-4 mb-1">1. AI and Machine Learning Automation</h5>
          <p className="text-black">
            Artificial Intelligence is automating complex data analysis, predicting financial outcomes, and checking ledger discrepancies. By eliminating human error, AI empowers analysts to make faster and more strategic decisions.
          </p>
        </div>
        <div>
          <h5 className="font-bold text-black uppercase text-sm mt-4 mb-1">2. Robotic Process Automation (RPA)</h5>
          <p className="text-black">
            RPA software bots are taking over highly repetitive tasks like data entry, invoicing, and reconciliation. This frees up financial professionals to focus on higher-value consulting and advisory tasks.
          </p>
        </div>
        <div>
          <h5 className="font-bold text-black uppercase text-sm mt-4 mb-1">3. Cloud-Based Finance Systems</h5>
          <p className="text-black">
            Cloud platforms allow accounting firms and corporate finance departments to access financial data securely from anywhere in the world. Real-time updates improve collaboration and speed up closing times.
          </p>
        </div>
        <div>
          <h5 className="font-bold text-black uppercase text-sm mt-4 mb-1">4. Blockchain and Smart Contracts</h5>
          <p className="text-black">
            Blockchain technology secures transactions with immutable digital ledger systems, reducing fraud and streamlining auditing workflows with self-executing smart contracts.
          </p>
        </div>
        <div>
          <h5 className="font-bold text-black uppercase text-sm mt-4 mb-1">5. Big Data and Predictive Analytics</h5>
          <p className="text-black">
            Finance teams are leveraging large data sets to detect market patterns, forecast future cash flow requirements, and run predictive scenarios to mitigate operational risks.
          </p>
        </div>
        <div>
          <h5 className="font-bold text-black uppercase text-sm mt-4 mb-1">6. Advanced Cybersecurity Frameworks</h5>
          <p className="text-black">
            As financial data goes online, securing records becomes a top priority. Companies are adopting multi-factor authentication, end-to-end encryption, and AI monitoring to stop data leaks.
          </p>
        </div>
      </div>
    ),
  },
];

export function BlogSection() {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const lenis = (window as Window & { __siteLenis?: Lenis }).__siteLenis;
    if (activePost) {
      document.body.style.overflow = "hidden";
      if (typeof lenis?.stop === "function") lenis.stop();
    } else {
      document.body.style.overflow = "";
      if (typeof lenis?.start === "function") lenis.start();
    }
    return () => {
      document.body.style.overflow = "";
      if (typeof lenis?.start === "function") lenis.start();
    };
  }, [activePost]);

  return (
    <>
      <section id="blog" className="bg-transparent text-white py-24 px-6 md:px-12 lg:px-20 w-full overflow-hidden border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">

          {/* Header Area */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div className="max-w-2xl">
              {/* Top Chip */}
              <span className="text-[10px] tracking-[0.25em] font-black text-brand-accent uppercase border border-zinc-350 rounded-md px-4 py-1.5 bg-white/40 block mb-6 w-fit">
                Insights & Updates
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[0.95]">
                Stay ahead with<br /><span className="text-brand-gradient">AI knowledge</span>
              </h2>
            </div>

            {/* View All Blogs CTA */}
            <a
              href="#blog"
              className="group flex items-center border border-zinc-300 overflow-hidden hover:shadow-md transition-all rounded-sm"
            >
              <span className="bg-black text-white px-5 py-3.5 text-xs font-bold uppercase tracking-widest">
                View all blogs
              </span>
              <span className="bg-white text-black border-l border-zinc-300 px-3 py-3.5 self-stretch flex items-center justify-center">
                <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </span>
            </a>
          </div>

          {/* 2-Column Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* LEFT POST (60% width) */}
            <div
              onClick={() => setActivePost(BLOGS[0])}
              className="lg:col-span-7 flex flex-col group cursor-pointer"
            >
              <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-100 shadow-sm border border-zinc-200/50">
                <img
                  src={BLOGS[0].image}
                  alt={BLOGS[0].title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="mt-5 flex justify-between items-start gap-4">
                <h4 className="font-black text-lg md:text-xl lg:text-2xl uppercase tracking-tight text-white leading-tight group-hover:text-zinc-300 transition-colors max-w-[75%]">
                  {BLOGS[0].title}
                </h4>
                <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider whitespace-nowrap pt-1">
                  {BLOGS[0].date}
                </span>
              </div>
            </div>

            {/* RIGHT POST (40% width) */}
            <div
              onClick={() => setActivePost(BLOGS[1])}
              className="lg:col-span-5 flex flex-col group cursor-pointer"
            >
              <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-100 shadow-sm border border-zinc-200/50">
                <img
                  src={BLOGS[1].image}
                  alt={BLOGS[1].title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="mt-5 flex justify-between items-start gap-4">
                <h4 className="font-black text-lg md:text-xl lg:text-2xl uppercase tracking-tight text-white leading-tight group-hover:text-zinc-300 transition-colors max-w-[70%]">
                  {BLOGS[1].title}
                </h4>
                <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider whitespace-nowrap pt-1">
                  {BLOGS[1].date}
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Reader Modal */}
      <AnimatePresence>
        {activePost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePost(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              data-lenis-prevent
              className="bg-white rounded-3xl w-full max-w-3xl max-h-[85vh] overflow-y-auto border border-zinc-200 shadow-2xl relative"
            >
              {/* Header Image */}
              <div className="w-full h-[240px] md:h-[320px] relative overflow-hidden">
                <img
                  src={activePost.image}
                  alt={activePost.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setActivePost(null)}
                  className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white transition-colors rounded-full p-2.5 backdrop-blur-sm border border-white/10"
                >
                  <X className="size-4" />
                </button>
              </div>

              {/* Body Content */}
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 text-xs font-bold text-zinc-400 uppercase tracking-wider mb-4">
                  <span>{activePost.author}</span>
                  <span>•</span>
                  <span>{activePost.date}</span>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight text-black leading-tight mb-6">
                  {activePost.title}
                </h3>
                <div className="text-black text-sm md:text-base leading-relaxed font-medium space-y-6">
                  {activePost.content}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
