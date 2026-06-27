import { ArrowUpRight } from "lucide-react";
import excellenceBg from "@/assets/excellence_bg.png";

export function ExcellenceSection() {
  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen bg-black text-white flex flex-col justify-between overflow-hidden border-t border-zinc-900">
      {/* Background Image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-75 z-0"
        style={{ backgroundImage: `url(${excellenceBg.src})` }}
      />
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60 z-10" />

      <div className="relative z-20 w-full flex-1 flex flex-col justify-between px-6 md:px-12 lg:px-24 pt-24 pb-0">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center my-auto">
          {/* Left side: SINCE 2019 */}
          <div className="flex flex-col select-none">
            <span className="text-7xl md:text-[9rem] lg:text-[11.5rem] font-black tracking-tighter leading-none text-white/25">
              SINCE
            </span>
            <span className="text-7xl md:text-[9rem] lg:text-[11.5rem] font-black tracking-tighter leading-none text-white/35 -mt-2 md:-mt-6">
              2019
            </span>
          </div>

          {/* Right side: Quote & Call to Action */}
          <div className="flex flex-col items-end text-right">
            {/* Brand Label */}
            <div className="flex items-center gap-2 text-white/40 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              4AT®
            </div>

            {/* Quote */}
            <p className="text-lg md:text-2xl font-bold uppercase leading-tight tracking-tight text-white mb-8 max-w-lg">
              “AI SHOULD SIMPLIFY DECISIONS, NOT COMPLICATE THEM. OUR MISSION IS TO MAKE INTELLIGENCE PRACTICAL FOR EVERY BUSINESS.”
            </p>

            {/* Sub-headline & Call to Action Button */}
            <div className="flex flex-col items-end gap-4">
              <span className="text-[10px] md:text-xs font-bold tracking-widest text-white/40 uppercase">
                BOOK A CALL AND LET'S SEE WHAT WE CAN DO.
              </span>
              <a 
                href="#contact" 
                className="group flex items-center bg-black/60 hover:bg-white hover:text-black border border-white/20 transition-all duration-300 pl-6 pr-1.5 py-1.5 text-xs font-bold tracking-widest uppercase gap-4"
              >
                Book a call
                <div className="w-8 h-8 bg-white text-black flex items-center justify-center transition-colors group-hover:bg-black group-hover:text-white">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Stats Row */}
        <div className="w-full border-t border-white/10 mt-16 grid grid-cols-2 md:grid-cols-6 bg-black/25 backdrop-blur-sm">
          {/* Stat 1 */}
          <div className="p-6 md:p-8 border-r border-white/10 flex flex-col gap-2">
            <span className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white">5X</span>
            <span className="text-[10px] md:text-xs text-white/50 uppercase tracking-wider font-bold leading-snug">
              Faster AI<br />Implementations
            </span>
          </div>
          {/* Stat 2 */}
          <div className="p-6 md:p-8 border-r border-white/10 flex flex-col gap-2">
            <span className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white">62+</span>
            <span className="text-[10px] md:text-xs text-white/50 uppercase tracking-wider font-bold leading-snug">
              Businesses<br />empowered
            </span>
          </div>
          {/* Stat 3 */}
          <div className="p-6 md:p-8 border-r border-white/10 flex flex-col gap-2">
            <span className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white">99%</span>
            <span className="text-[10px] md:text-xs text-white/50 uppercase tracking-wider font-bold leading-snug">
              System uptime
            </span>
          </div>
          {/* Gap Column (Visible on Desktop only) */}
          <div className="hidden md:block border-r border-white/10" />
          {/* Stat 4 */}
          <div className="p-6 md:p-8 border-r border-white/10 flex flex-col gap-2">
            <span className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white">50+</span>
            <span className="text-[10px] md:text-xs text-white/50 uppercase tracking-wider font-bold leading-snug">
              AI models for<br />smarter decisions
            </span>
          </div>
          {/* Stat 5 */}
          <div className="p-6 md:p-8 flex flex-col gap-2">
            <span className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white">98%</span>
            <span className="text-[10px] md:text-xs text-white/50 uppercase tracking-wider font-bold leading-snug">
              Client satisfaction<br />rate
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
