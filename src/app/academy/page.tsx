import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/academy/Hero";
import { HeroContent } from "@/components/academy/HeroContent";
import { ctaRoute } from "@/lib/site-data";
import { PageShell } from "@/components/academy/PageShell";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero>
          <HeroContent />
        </Hero>
        <PageShell ctaRoute={ctaRoute} />
      </main>
      <Footer />
    </>
  );
}
