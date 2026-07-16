'use client'

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils";

type FeatureSection = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    reverse: boolean;
};

function ParallaxFeature({ section }: { section: FeatureSection }) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "center start"]
    });
    const opacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
    const clipPath = useTransform(scrollYProgress, [0, 0.7], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);
    const translateY = useTransform(scrollYProgress, [0, 1], [-50, 0]);

    return (
        <div
            ref={sectionRef}
            className={cn(
                "h-screen flex items-center justify-center md:gap-40 gap-20",
                section.reverse ? "flex-row-reverse" : ""
            )}
        >
            <motion.div style={{ y: translateY }}>
                <div className="text-6xl max-w-sm">{section.title}</div>
                <motion.p style={{ y: translateY }} className="text-white/70 max-w-sm mt-10">
                    {section.description}
                </motion.p>
            </motion.div>
            <motion.div style={{ opacity, clipPath }} className="relative size-80">
                <Image src={section.imageUrl} fill sizes="320px" className="object-cover" alt={`Section ${section.id}`} />
            </motion.div>
        </div>
    );
}

export const Component = () => {
    // Array of section data
    const sections = [
        {
            id: 1,
            title: "Feature 1",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab maxime sequi, pariatur illum, adipisci ullam optio quod tempora necessitatibus consectetur eaque deleniti id totam possimus unde dolorum inventore incidunt. Ea.",
            imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
            reverse: false
        },
        {
            id: 2,
            title: "Feature 2",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab maxime sequi, pariatur illum, adipisci ullam optio quod tempora necessitatibus consectetur eaque deleniti id totam possimus unde dolorum inventore incidunt. Ea.",
            imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=600&q=80',
            reverse: true
        },
        {
            id: 3,
            title: "Feature 3",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab maxime sequi, pariatur illum, adipisci ullam optio quod tempora necessitatibus consectetur eaque deleniti id totam possimus unde dolorum inventore incidunt. Ea.",
            imageUrl: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=600&q=80',
            reverse: false
        }
    ]

  return (
    <div>
      <div className='min-h-screen w-screen flex flex-col items-center justify-center'>
        <h1 className='text-6xl max-w-2xl text-center'>PARALLAX SCROLL FEATURE SECTION</h1>
        <p className='mt-20 flex items-center gap-1.5 text-sm'>SCROLL <ArrowDown size={15} /></p>
      </div>
       <div className="flex flex-col md:px-0 px-10">
            {sections.map((section) => <ParallaxFeature key={section.id} section={section} />)}
        </div>
       <div className='min-h-screen w-screen flex flex-col items-center justify-center'>
        <h1 className='text-8xl'>The End</h1>
      </div>
    </div>
  );
};
