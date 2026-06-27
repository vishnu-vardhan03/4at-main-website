import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import type { StaticImageData } from "next/image";
import client1 from "@/assets/client1.png";
import client2 from "@/assets/client2.png";
import client3 from "@/assets/client3.png";
import client4 from "@/assets/client4.png";
import client5 from "@/assets/client5.png";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: StaticImageData;
  logo: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 0,
    name: "SARAH MITCHELL",
    role: "CTO, BrightPath Logistics",
    quote: "The AI consulting process was smooth and transparent. From strategy to implementation, every step was handled with real expertise and a focus on business outcomes.",
    rating: 5,
    image: client4,
    logo: "monaco",
  },
  {
    id: 1,
    name: "DANIEL CARTER",
    role: "Operations Manager",
    quote: "The team brought innovative ideas to the table while staying aligned with our business goals. A streamlined experience from discovery to deployment.",
    rating: 4.5,
    image: client2,
    logo: "Madrid",
  },
  {
    id: 2,
    name: "DANIEL CHEN",
    role: "VP of Engineering, VeloTech",
    quote: "Integrating custom machine learning models into our workflow saved us hundreds of hours. 4AT's engineering talent is top-tier.",
    rating: 5,
    image: client1,
    logo: "velotech",
  },
  {
    id: 3,
    name: "MARCUS VANCE",
    role: "Founder, Theory Partners",
    quote: "Their predictive analytics insights helped us capture new markets. The speed and quality of deliverables exceeded our expectations.",
    rating: 5,
    image: client3,
    logo: "theor",
  },
  {
    id: 4,
    name: "HIROSHI TANAKA",
    role: "Managing Director, Rising Sun",
    quote: "4AT helped us architect an enterprise data platform that scales seamlessly. Their security standards gave us full confidence.",
    rating: 5,
    image: client5,
    logo: "Rise",
  },
];

export function ClientVoices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handleSelect = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const current = TESTIMONIALS[activeIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 150 : -150,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -150 : 150,
      opacity: 0,
    }),
  };

  return (
    <section id="client-voices" className="bg-transparent text-white py-24 px-6 md:px-12 lg:px-20 relative w-full overflow-hidden border-t border-white/10">
      
      {/* Centered Top Chip */}
      <div className="flex justify-center mb-12">
        <span className="text-[10px] tracking-[0.25em] font-black text-[#0052d4] uppercase border border-zinc-300 rounded-md px-4 py-1 bg-white/50 backdrop-blur">
          Client Voices
        </span>
      </div>

      {/* Giant Background Watermark Text "VOICES OF TRUST" */}
      <div className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden leading-none">
        <span 
          className="font-black text-zinc-200/50 uppercase tracking-[0.05em]"
          style={{ fontSize: "clamp(64px, 12vw, 160px)" }}
        >
          Voices of trust
        </span>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Central Card with slide animation */}
        <div className="w-full max-w-[440px] min-h-[500px] mb-8 relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="bg-[#0c0c0c] text-white rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-white/[0.08] flex flex-col w-full h-full"
            >
              {/* Header Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900">
                <img 
                  src={current.image.src} 
                  alt={current.name} 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                
                {/* Monaco style Logo overlay */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/45 border border-white/10 backdrop-blur px-3 py-1 rounded-md flex items-center gap-1.5">
                  <div className="size-2 rounded-full bg-white" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/95">
                    {current.logo}
                  </span>
                </div>
              </div>

              {/* Quote & Details */}
              <div className="p-8 flex flex-col items-center text-center flex-1 justify-between">
                <p className="text-zinc-300 text-xs md:text-sm leading-relaxed font-medium mb-6">
                  “{current.quote}”
                </p>

                <div className="flex flex-col items-center">
                  {/* Rating Stars */}
                  <div className="flex gap-0.5 mb-4 items-center">
                    {(() => {
                      const stars = [];
                      const rating = current.rating;
                      const fullStars = Math.floor(rating);
                      const hasHalf = rating % 1 !== 0;
                      
                      for (let i = 0; i < 5; i++) {
                        if (i < fullStars) {
                          stars.push(
                            <Star key={i} className="size-4 fill-yellow-500 stroke-yellow-500" />
                          );
                        } else if (i === fullStars && hasHalf) {
                          stars.push(
                            <div key={i} className="relative size-4">
                              <Star className="absolute top-0 left-0 size-4 text-zinc-700" />
                              <div className="absolute top-0 left-0 size-4 overflow-hidden w-[50%]">
                                <Star className="size-4 fill-yellow-500 stroke-yellow-500" />
                              </div>
                            </div>
                          );
                        } else {
                          stars.push(
                            <Star key={i} className="size-4 text-zinc-700" />
                          );
                        }
                      }
                      return stars;
                    })()}
                  </div>

                  {/* Name & Title */}
                  <h4 className="text-sm font-black tracking-widest text-white uppercase">
                    {current.name}
                  </h4>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase mt-1 tracking-wider">
                    {current.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide navigation: Previous Button, Progress Indicator Line, Next Button */}
        <div className="flex items-center gap-6 w-full max-w-[340px] mb-16 justify-between">
          <button 
            onClick={handlePrev}
            className="size-8 rounded-full border border-zinc-300 hover:border-black flex items-center justify-center hover:bg-white transition-all shadow-sm"
          >
            <ChevronLeft className="size-4 text-zinc-700" />
          </button>

          {/* Progress bar line */}
          <div className="h-0.5 flex-1 bg-zinc-200 rounded relative overflow-hidden">
            <motion.div 
              className="absolute left-0 top-0 h-full bg-zinc-800"
              initial={{ width: "20%" }}
              animate={{ width: `${((activeIndex + 1) / TESTIMONIALS.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <button 
            onClick={handleNext}
            className="size-8 rounded-full border border-zinc-300 hover:border-black flex items-center justify-center hover:bg-white transition-all shadow-sm"
          >
            <ChevronRight className="size-4 text-zinc-700" />
          </button>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8 border-t border-white/10 pt-8">
          
          {/* Left: Overall rating info */}
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-2">
              <Star className="size-5 fill-yellow-500 stroke-yellow-500" />
              <span className="text-2xl md:text-3xl font-black text-white tracking-tight leading-none">
                4.9<span className="text-zinc-400 font-bold text-sm md:text-base">/5</span>
              </span>
            </div>
            <p className="text-[9px] md:text-[10px] text-zinc-400 font-bold uppercase tracking-widest mt-1">
              Review by 356 users worldwide
            </p>
          </div>

          {/* Right: Five client thumbnail selector buttons */}
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => handleSelect(idx)}
                className={`size-12 rounded-xl overflow-hidden border-2 transition-all duration-300 shadow-sm relative ${
                  activeIndex === idx 
                    ? "border-black scale-110 shadow-md" 
                    : "border-zinc-300 hover:border-zinc-500 scale-100 opacity-80"
                }`}
              >
                <img 
                  src={t.image.src} 
                  alt={t.name} 
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}
