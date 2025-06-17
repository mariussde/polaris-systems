"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { TextEffect } from "@/components/ui/text-effect";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function Hero() {
  const controls = useAnimation();
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Don't render the image until mounted and theme is resolved
  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';
  
  return (
    <header ref={ref} className="pt-6 pb-10 px-4 sm:px-6 lg:px-10 max-w-[1500px] mx-auto">
      <div className="relative pt-12 md:pt-24"> 
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h1"
                className="mt-6 text-balance text-6xl md:text-7xl lg:mt-12 xl:text-[5.25rem] font-crimson"
              >
                Reach new limits.
              </TextEffect>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
              }}
            >
              <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.5}
                as="p"
                className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground"
              >
                Highly customizable components for building modern websites and applications that look and feel the way you mean it.
              </TextEffect>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }
              }}
              className="mt-8 flex flex-col items-center justify-center gap-2 md:flex-row"
            >
              <Button
                asChild
                size="lg"
                className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-6"
              >
                <Link href="#link">
                  <span className="text-nowrap">Start Building</span>
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-6"
              >
                <Link href="#link">
                  <span className="text-nowrap">Request a demo</span>
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } }
          }}
        >
          <div className="relative mt-8 overflow-x-hidden px-4 sm:mt-12 md:mt-16">
            <div
              aria-hidden
              className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
            />
            <div className="relative mx-auto max-w-6xl">
              <div className="relative aspect-[1580/1264] overflow-hidden">
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl border border-muted-foreground/20 z-10 pointer-events-none [mask-image:linear-gradient(to_bottom,black,black_85%,transparent)]" />
                <Image
                  className="object-contain rounded-xl sm:rounded-2xl"
                  src={isDark ? "/landing-page/app-dark.png" : "/landing-page/app-light.png"}
                  alt="app screen"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                  priority
                  quality={100}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}