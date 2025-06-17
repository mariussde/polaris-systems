"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Lightbulb, Code2, Rocket } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from "next-themes";

function ProcessImage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <div className="relative">
      <div className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-30%" />
      <div className="bg-gradient-to-r from-background via-background/50 to-transparent absolute inset-0 z-10" />
      <Image
        src={isDark ? "/landing-page/charts.png" : "/landing-page/charts-light.png"}
        alt={isDark ? "Process visualization dark theme" : "Process visualization light theme"}
        width={1157}
        height={868}
        className="rounded-r-[15px]"
        priority
      />
    </div>
  );
}

export default function HowItWorks() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const steps = [
    {
      id: "01",
      title: "Consultation",
      description: "We begin with a thorough analysis of your business needs and objectives.",
      icon: Lightbulb
    },
    {
      id: "02",
      title: "Solution Design",
      description: "Our experts design a tailored technology solution that addresses your specific challenges.",
      icon: Code2
    },
    {
      id: "03",
      title: "Implementation",
      description: "Seamless deployment and integration of your new technology infrastructure.",
      icon: Rocket
    }
  ];

  return (
    <section ref={ref} id="how-to" className="py-12 px-4 sm:px-6 lg:px-10 max-w-[1500px] mx-auto">
      <div className="border-t border-border py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-crimson tracking-tight leading-tight mb-6 text-foreground">
                Our Process
              </h2>
              <p className="text-muted-foreground mb-8">
                We transform your business through technology. Our comprehensive approach ensures success at every step.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
              }}
              className="space-y-6"
            >
              {steps.map((step, index) => (
                <div key={step.id} className="flex gap-6 border-t border-border py-5">
                  <span className="text-muted-foreground font-bold">{step.id}</span>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <step.icon className="size-4 text-primary" />
                      <h3 className="text-foreground font-medium">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }
              }}
              className="mt-10"
            >
              <Button className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-6">
                Discover More
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3 } }
            }}
            className="relative rounded-[30px] overflow-hidden h-[500px]"
          >
            <ProcessImage />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
