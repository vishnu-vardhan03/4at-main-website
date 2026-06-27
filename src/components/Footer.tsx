import { Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";
import { GlowLine } from "./GlowLine";

export function Footer() {
  return (
    <footer className="relative bg-transparent text-white">
      <GlowLine className="absolute top-0" />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        {/* Left Side: Brand Logo, Social Media */}
        <div className="w-full md:w-[45%] flex flex-col items-center justify-center py-16 px-6 border-b md:border-b-0 border-zinc-800/60">
          <span
            aria-label="4AT Logo"
            role="img"
            className="mb-6 block bg-white/75 drop-shadow-[0_0_24px_rgba(255,255,255,0.16)]"
            style={{
              width: "min(24rem, 78vw)",
              height: "min(9.5rem, 30vw)",
              WebkitMaskImage: `url(${logo.src})`,
              WebkitMaskPosition: "center",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "contain",
              maskImage: `url(${logo.src})`,
              maskPosition: "center",
              maskRepeat: "no-repeat",
              maskSize: "contain",
            }}
          />
          <span className="text-[10px] font-bold tracking-[0.3em] text-zinc-500 uppercase mb-4">
            Social Media
          </span>
          <div className="flex gap-4">
            {[
              { Icon: Linkedin, href: "#" },
              { Icon: Twitter, href: "#" },
              { Icon: Instagram, href: "#" },
              { Icon: Facebook, href: "#" }
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="size-8 rounded border border-white/10 hover:border-white/30 grid place-items-center bg-white/5 hover:bg-white/10 transition-all duration-300 text-zinc-400 hover:text-white"
              >
                <Icon className="size-3.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Locations Grid */}
        <div className="w-full md:w-[55%] grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12 py-16 px-8 md:px-12 md:border-l border-zinc-800/60">
          {/* USA */}
          <div className="space-y-2.5">
            <h4 className="text-[11px] font-black tracking-widest text-white uppercase">USA</h4>
            <div className="text-[11px] md:text-xs text-zinc-400 leading-relaxed font-medium space-y-1">
              <p>116 Village Blvd, Suite 200</p>
              <p>Princeton, New Jersey – 08540</p>
              <p className="pt-1.5">+1 609 255 3118</p>
              <p className="pt-0.5 text-zinc-500 hover:text-white transition-colors duration-200">
                <a href="mailto:info@consult-4at.com">info@consult-4at.com</a>
              </p>
            </div>
          </div>

          {/* INDIA */}
          <div className="space-y-2.5">
            <h4 className="text-[11px] font-black tracking-widest text-white uppercase">INDIA</h4>
            <div className="text-[11px] md:text-xs text-zinc-400 leading-relaxed font-medium space-y-1">
              <p>3rd Floor, D-Block</p>
              <p>I Labs Center, Madhapur, Hyderabad, TS - 500081</p>
              <p className="pt-1.5">+91 90110433456</p>
              <p>+91 9133203456</p>
              <p className="pt-0.5 text-zinc-500 hover:text-white transition-colors duration-200">
                <a href="mailto:info@consult-4at.com">info@consult-4at.com</a>
              </p>
            </div>
          </div>

          {/* AUS */}
          <div className="space-y-2.5">
            <h4 className="text-[11px] font-black tracking-widests text-white uppercase">AUS</h4>
            <div className="text-[11px] md:text-xs text-zinc-400 leading-relaxed font-medium space-y-1">
              <p>KG01-86 Courallie Avenue</p>
              <p>Homebush West, NSW – 2140</p>
              <p className="pt-1.5 text-zinc-500 hover:text-white transition-colors duration-200">
                <a href="mailto:info@consult-4at.com">info@consult-4at.com</a>
              </p>
            </div>
          </div>

          {/* UK */}
          <div className="space-y-2.5">
            <h4 className="text-[11px] font-black tracking-widest text-white uppercase">UK</h4>
            <div className="text-[11px] md:text-xs text-zinc-400 leading-relaxed font-medium space-y-1">
              <p>TBA</p>
              <p className="pt-1.5 text-zinc-500 hover:text-white transition-colors duration-200">
                <a href="mailto:info@consult-4at.com">info@consult-4at.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="border-t border-zinc-800/40 py-6 px-6 md:px-12 bg-black/40">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <span
            aria-label="4AT Logo"
            role="img"
            className="block bg-white/40"
            style={{
              width: "2rem",
              height: "0.85rem",
              WebkitMaskImage: `url(${logo.src})`,
              WebkitMaskPosition: "center",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "contain",
              maskImage: `url(${logo.src})`,
              maskPosition: "center",
              maskRepeat: "no-repeat",
              maskSize: "contain",
            }}
          />
          <span className="text-[11px] text-zinc-500 font-medium tracking-wide">
            © 2026 4AT. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
