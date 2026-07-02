import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/academy/Hero";
import { HeroContent } from "@/components/academy/HeroContent";
import { DeferredSection } from "@/components/academy/DeferredSection";
import { ctaRoute } from "@/lib/site-data";
import { ProductCurtain } from "@/components/academy/ProductCurtain";
import { PageShell } from "@/components/academy/PageShell";

export default function AcademyPage() {
  return (
    <>
      <Nav />
      <main>
        <PageShell ctaRoute={ctaRoute}>
          <Hero>
            <HeroContent />
          </Hero>
        </PageShell>
      </main>
      <Footer />
    </>
  );
}
