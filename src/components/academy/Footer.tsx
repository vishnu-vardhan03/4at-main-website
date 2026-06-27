import { footerLegal, partnerLogos } from "@/lib/site-data";
import Image from "next/image";

const doubledPartnerLogos = [...partnerLogos, ...partnerLogos];

export function Footer() {
  return (
    <footer id="contact-us" className="w-full bg-black text-white">
      <div className="border-y bg-[#f6f6f6] border-[#e2e8f0] py-5 overflow-hidden">
        <div className="marquee-track flex min-w-max animate-[marquee_32s_linear_infinite] hover:[animation-play-state:paused] items-center gap-12 pr-12 will-change-transform">
          {doubledPartnerLogos.map((logo, index) => (
            <div
              key={`${logo.name}-footer-${index}`}
              className="relative h-8 w-24 shrink-0 opacity-70 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-110 cursor-pointer"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                sizes="96px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="site-shell pt-12 pb-6 sm:pb-8">
        <div className="grid border-t border-white/[0.06] lg:grid-cols-[1.1fr_0.9fr] lg:gap-0 pt-8">
          <div className="flex flex-col items-center justify-center py-4 lg:border-r lg:border-white/[0.06] lg:pr-8">
            <div className="w-full py-1 overflow-hidden flex items-center justify-center">
              <span className="text-[18vw] lg:text-[9.5vw] leading-none font-black tracking-wider text-white/10 uppercase select-none whitespace-nowrap">
                4AT
              </span>
            </div>
            
            <div className="mt-6 flex flex-col items-center gap-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#e5e5e5]/50">Social Media</p>
              <div className="flex items-center gap-2">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white/5 hover:bg-white/10 rounded text-[#c6c6c6] hover:text-white transition inline-flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white/5 hover:bg-white/10 rounded text-[#c6c6c6] hover:text-white transition inline-flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white/5 hover:bg-white/10 rounded text-[#c6c6c6] hover:text-white transition inline-flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white/5 hover:bg-white/10 rounded text-[#c6c6c6] hover:text-white transition inline-flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-x-6 gap-y-4 sm:grid-cols-2 py-4 lg:pl-8">
            {/* USA */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#e5e5e5] mb-1">USA</p>
              <div className="space-y-0.5 text-[11px] text-[#a3a3a3] leading-normal">
                <p>116 Village Blvd, Suite 200</p>
                <p>Princeton, New Jersey – 08540</p>
                <p className="pt-0.5">
                  <a href="tel:+16092553118" className="hover:text-white transition text-[#c6c6c6]">+1 609 255 3118</a>
                </p>
                <p>
                  <a href="mailto:info@consult-4at.com" className="hover:text-white transition text-[#c6c6c6]">info@consult-4at.com</a>
                </p>
              </div>
            </div>

            {/* INDIA */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#e5e5e5] mb-1">INDIA</p>
              <div className="space-y-0.5 text-[11px] text-[#a3a3a3] leading-normal">
                <p>3rd Floor, D-Block</p>
                <p>I Labs Center, Madhapur, Hyderabad, TS - 500081</p>
                <p className="pt-0.5 flex flex-col">
                  <a href="tel:+919010433456" className="hover:text-white transition text-[#c6c6c6]">+91 9010433456</a>
                  <a href="tel:+919133203456" className="hover:text-white transition text-[#c6c6c6]">+91 9133203456</a>
                </p>
                <p>
                  <a href="mailto:info@consult-4at.com" className="hover:text-white transition text-[#c6c6c6]">info@consult-4at.com</a>
                </p>
              </div>
            </div>

            {/* AUS */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#e5e5e5] mb-1">AUS</p>
              <div className="space-y-0.5 text-[11px] text-[#a3a3a3] leading-normal">
                <p>KG01-86 Courallie Avenue</p>
                <p>Homebush West, NSW – 2140</p>
                <p className="pt-0.5">
                  <a href="mailto:info@consult-4at.com" className="hover:text-white transition text-[#c6c6c6]">info@consult-4at.com</a>
                </p>
              </div>
            </div>

            {/* UK */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#e5e5e5] mb-1">UK</p>
              <div className="space-y-0.5 text-[11px] text-[#a3a3a3] leading-normal">
                <p>TBA</p>
                <p className="pt-0.5">
                  <a href="mailto:info@consult-4at.com" className="hover:text-white transition text-[#c6c6c6]">info@consult-4at.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="border-t border-white/[0.06] pt-3 text-xs text-[#c6c6c6]/50 text-center lg:text-left">{footerLegal}</p>
      </div>
    </footer>
  );
}
