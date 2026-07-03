import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/academy/Hero";
import { HeroContent } from "@/components/academy/HeroContent";
import { ctaRoute } from "@/lib/site-data";
import { MicrographicLoader } from "@/components/academy/MicrographicLoader";
import { PageShell } from "@/components/academy/PageShell";

export default function HomePage() {
  return (
    <>
      <Nav />
      <MicrographicLoader />
      <main>
        <div
          id="main-content"
          style={{
            opacity: 0,
          }}
        >
          <Hero>
            <HeroContent />
          </Hero>
          <PageShell ctaRoute={ctaRoute} />
        </div>
      </main>
      <Footer />
    </>
  );
}
