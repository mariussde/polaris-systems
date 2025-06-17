"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { FloatingProductCard } from "@/components/ui/floating-product";
import {
  Accessibility,
  BadgeCheck,
  Figma,
  Gem,
  LayoutDashboard,
  ListChecks,
  Moon,
  Settings2,
  Type,
  Check,
  X,
} from "lucide-react";

const CheckIcon = ({ isPrimary }: { isPrimary: boolean }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.2083 0.8225L3.20833 7.8225L0 4.61417L0.8225 3.79167L3.20833 6.17167L9.38583 0L10.2083 0.8225Z" fill={isPrimary ? "#485C11" : "#6F6F6F"} />
  </svg>
);

const CrossIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 6L12 11V12H11L7 8L3 12H2V11L6 7L2 3V2H3L7 6L11 2H12V3L7 6Z" fill="#6F6F6F" />
  </svg>
);

type Feature = {
  icon: React.ReactNode;
  label: string;
  description: string;
  area: true | false | "partial";
  websurge: true | false | "partial";
  tooltip?: { content: React.ReactNode };
};

const features: Feature[] = [
  {
    icon: <LayoutDashboard className="text-muted-foreground" />,
    label: "Cloud Infrastructure",
    description: "Enterprise-grade cloud solutions with advanced security and scalability.",
    area: true,
    websurge: false,
  },
  {
    icon: <Settings2 className="text-muted-foreground" />,
    label: "AI Integration",
    description: "Seamless integration of AI models and machine learning capabilities.",
    area: true,
    websurge: false,
  },
  {
    icon: <Moon className="text-muted-foreground" />,
    label: "Data Analytics",
    description: "Advanced analytics and real-time data processing capabilities.",
    area: true,
    websurge: "partial",
  },
  {
    icon: <Type className="text-muted-foreground" />,
    label: "API Development",
    description: "Robust API development with comprehensive documentation.",
    area: true,
    websurge: false,
  },
  {
    icon: <Accessibility className="text-muted-foreground" />,
    label: "Security",
    description: "Enterprise-grade security with advanced threat protection.",
    area: true,
    websurge: false,
  },
  {
    icon: <ListChecks className="text-muted-foreground" />,
    label: "Monitoring",
    description: "24/7 system monitoring and automated alerting.",
    area: true,
    websurge: true,
  },
  {
    icon: <BadgeCheck className="text-muted-foreground" />,
    label: "Compliance",
    description: "Full compliance with industry standards and regulations.",
    area: true,
    websurge: true,
  },
  {
    icon: <Gem className="text-muted-foreground" />,
    label: "Custom Solutions",
    description: "Tailored solutions for specific business needs.",
    area: true,
    websurge: false,
    tooltip: {
      content: (
        <>
          <span className="mb-1 block font-semibold">Enterprise Solutions</span>
          Custom development and integration services available for enterprise clients.
        </>
      ),
    },
  },
  {
    icon: <Figma className="text-muted-foreground" />,
    label: "UI/UX Design",
    description: "Modern, responsive design with accessibility features.",
    area: true,
    websurge: false,
    tooltip: {
      content: (
        <>
          <span className="mb-1 block font-semibold">Design Excellence</span>
          Professional UI/UX design services with modern frameworks and best practices.
        </>
      ),
    },
  },
];

export default function Features() {
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

  const mainFeatures = [
    "Enterprise-Grade Cloud: Scalable infrastructure with advanced security features.",
    "AI-Powered Solutions: Cutting-edge AI integration for enhanced capabilities.",
    "24/7 Support: Round-the-clock technical support and system monitoring.",
    "Custom Development: Tailored solutions for your unique business needs."
  ];

  return (
    <section ref={ref} id="specifications" className="py-12 px-4 sm:px-6 lg:px-10 max-w-[1500px] mx-auto">
      <div className="border-t border-border py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-crimson tracking-tight leading-tight mb-6 text-foreground">
                Why Choose Polaris?
              </h2>
              <p className="text-muted-foreground mb-8">
                Experience the power of enterprise-grade technology solutions designed for modern businesses.
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
              {mainFeatures.map((feature, index) => (
                <div key={index} className="flex gap-6 border-t border-border py-5">
                  <span className="text-muted-foreground font-bold">0{index + 1}</span>
                  <p className="text-foreground">{feature}</p>
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
                Get Started
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
            <FloatingProductCard />
          </motion.div>
        </div>

        <div className="border-t border-border py-12">
          <div className="text-center mb-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-crimson tracking-tight leading-tight mb-4 text-foreground">
              Our Technology Stack
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              We combine cutting-edge technologies with industry best practices to deliver exceptional results.
            </p>
            <Button className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-6 mb-12">
              Explore Solutions
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }
            }}
            className="mx-auto max-w-4xl divide-y divide-border overflow-hidden rounded-lg border border-border bg-card shadow-lg"
          >
            <div className="hidden rounded-t-lg bg-muted/50 text-left text-base font-semibold text-foreground sm:flex">
              <div className="w-16 px-6 py-4"></div>
              <div className="flex-1 px-6 py-4">Feature</div>
              <div className="w-40 px-6 py-4">Enterprise</div>
              <div className="w-40 px-6 py-4">Standard</div>
            </div>
            {features.map((row) => (
              <div
                key={row.label}
                className="flex flex-col items-start text-left sm:flex-row sm:items-center hover:bg-muted/50 transition-colors"
              >
                <div className="flex w-full items-center justify-start px-6 pt-4 sm:w-16 sm:justify-center sm:py-4">
                  {row.icon}
                  <span className="ml-3 text-base font-medium text-foreground sm:hidden">
                    {row.label}
                  </span>
                </div>
                <div className="w-full flex-1 px-6 pb-2 sm:py-4">
                  <div className="hidden font-medium text-foreground sm:block">{row.label}</div>
                  <div className="mt-2 mb-2 text-sm text-muted-foreground sm:mb-0">
                    {row.description}
                  </div>
                </div>
                <div className="flex w-full items-center justify-start px-6 pb-2 sm:w-40 sm:justify-center sm:py-4">
                  {row.area === true ? (
                    <Check className="size-5 text-green-600 dark:text-green-500" />
                  ) : row.area === "partial" ? (
                    <Check className="size-5 text-yellow-500" />
                  ) : (
                    <X className="size-5 text-destructive" />
                  )}
                  <span className="ml-2 text-xs font-medium text-muted-foreground sm:hidden">
                    Enterprise
                  </span>
                </div>
                <div className="flex w-full items-center justify-start border-border px-6 pb-4 sm:w-40 sm:justify-center sm:border-0 sm:py-4">
                  {row.websurge === true ? (
                    <Check className="size-5 text-green-600 dark:text-green-500" />
                  ) : row.websurge === "partial" ? (
                    <Check className="size-5 text-yellow-500" />
                  ) : row.websurge === false && row.tooltip ? (
                    <span className="inline-block h-5 text-muted-foreground">—</span>
                  ) : (
                    <X className="size-5 text-destructive" />
                  )}
                  <span className="ml-2 text-xs font-medium text-muted-foreground sm:hidden">
                    Standard
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
