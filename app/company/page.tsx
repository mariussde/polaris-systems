"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AboutProps {
  title?: string;
  description?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
  };
  breakout?: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
  };
  companiesTitle?: string;
  companies?: Array<{
    src: string;
    alt: string;
    className?: string;
  }>;
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
  }>;
}

const faqs = [
  {
    question: "What solutions does Polaris Systems offer?",
    answer:
      "We offer a comprehensive suite of software solutions including Stellaris (our space technology platform), custom landing pages, admin dashboards, and enterprise software solutions. Our expertise spans from web applications to specialized industry tools.",
  },
  {
    question: "How do you ensure quality across different products?",
    answer:
      "Each product team at Polaris Systems follows rigorous development standards and best practices. Whether it's our space technology platform Stellaris or our web solutions, we maintain consistent quality through automated testing, code reviews, and continuous integration.",
  },
  {
    question: "Can you customize solutions for specific business needs?",
    answer:
      "Absolutely! We specialize in tailoring our solutions to meet specific business requirements. From customizing admin dashboards to adapting our Stellaris platform for specific use cases, our team works closely with clients to deliver exactly what they need.",
  },
  {
    question: "What makes Polaris Systems different?",
    answer:
      "Our versatility and expertise across different domains sets us apart. We successfully deliver everything from sophisticated space technology solutions with Stellaris to beautiful, conversion-focused landing pages and powerful admin interfaces.",
  },
];

const departments = [
  {
    title: "Engineering",
    roles: [
      {
        id: "role-1",
        title: "Senior Software Engineer",
        location: "Global",
        href: "/careers",
      },
      {
        id: "role-2",
        title: "Frontend Developer",
        location: "Global",
        href: "/careers",
      },
    ],
  },
  {
    title: "Product",
    roles: [
      {
        id: "role-3",
        title: "Product Manager",
        location: "Global",
        href: "/careers",
      },
    ],
  },
];

const achievements = [
  { label: "Global Presence", value: "30+" },
  { label: "Years of Experience", value: "10+" },
  { label: "Projects Delivered", value: "500+" },
  { label: "Client Satisfaction", value: "98%" },
];

const companies = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
    alt: "Amazon",
    className: "h-6 w-auto md:h-8 grayscale hover:grayscale-0 transition-all duration-300"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png",
    alt: "Apple",
    className: "h-6 w-auto md:h-8 grayscale hover:grayscale-0 transition-all duration-300"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
    alt: "Google",
    className: "h-6 w-auto md:h-8 grayscale hover:grayscale-0 transition-all duration-300"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2560px-Microsoft_logo.svg.png",
    alt: "Microsoft",
    className: "h-6 w-auto md:h-8 grayscale hover:grayscale-0 transition-all duration-300"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png",
    alt: "Meta",
    className: "h-6 w-auto md:h-8 grayscale hover:grayscale-0 transition-all duration-300"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",
    alt: "Netflix",
    className: "h-6 w-auto md:h-8 grayscale hover:grayscale-0 transition-all duration-300"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1686px-Spotify_logo_without_text.svg.png",
    alt: "Spotify",
    className: "h-6 w-auto md:h-8 grayscale hover:grayscale-0 transition-all duration-300"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/2560px-Tesla_Motors.svg.png",
    alt: "Tesla",
    className: "h-6 w-auto md:h-8 grayscale hover:grayscale-0 transition-all duration-300"
  },
];

function About({
  title,
  description,
  mainImage,
  secondaryImage,
  breakout,
  companiesTitle,
  companies,
  achievementsTitle,
  achievementsDescription,
  achievements,
}: AboutProps) {
  return (
    <section className="py-12">
      <div className="container">
        <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
          <h1 className="text-5xl font-semibold">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div className="grid gap-7 lg:grid-cols-3">
          <img
            src={mainImage?.src}
            alt={mainImage?.alt}
            className="size-full max-h-[620px] rounded-xl object-cover lg:col-span-2"
          />
          <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
            <div className={`flex flex-col justify-between gap-6 rounded-xl bg-muted p-7 md:w-1/2 lg:w-auto ${!breakout?.src ? 'items-center text-center bg-gradient-to-br from-background via-muted to-background border border-border/50' : ''}`}>
              {breakout?.src && (
                <img
                  src={breakout.src}
                  alt={breakout.alt}
                  className="mr-auto h-12"
                />
              )}
              <div className={breakout?.src ? '' : 'space-y-4'}>
                <p className={`mb-2 text-lg font-semibold ${!breakout?.src ? 'text-2xl bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent' : ''}`}>{breakout?.title}</p>
                <p className={`text-muted-foreground ${!breakout?.src ? 'text-base max-w-md mx-auto' : ''}`}>{breakout?.description}</p>
              </div>
              <Button variant="outline" className={breakout?.src ? 'mr-auto' : 'mx-auto'} asChild>
                <a href={breakout?.buttonUrl} target="_blank">
                  {breakout?.buttonText}
                </a>
              </Button>
            </div>
            <img
              src={secondaryImage?.src}
              alt={secondaryImage?.alt}
              className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
            />
          </div>
        </div>
        <div className="py-32">
          <p className="text-center">{companiesTitle}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {companies?.map((company, idx) => (
              <div className="flex items-center gap-3" key={company.src + idx}>
                <img
                  src={company.src}
                  alt={company.alt}
                  className={company.className || "h-6 w-auto md:h-8"}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-xl bg-muted p-10 md:p-16">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-4xl font-semibold">{achievementsTitle}</h2>
            <p className="max-w-xl text-muted-foreground">
              {achievementsDescription}
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-between gap-10 text-center">
            {achievements?.map((item, idx) => (
              <div className="flex flex-col gap-4" key={item.label + idx}>
                <p>{item.label}</p>
                <span className="text-4xl font-semibold md:text-5xl">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] bg-[size:80px_80px] opacity-15 md:block"></div>
        </div>
      </div>
    </section>
  );
}

export default function CompanyPage() {
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

  const aboutProps = {
    title: "About Polaris Systems",
    description: "We're a versatile software solutions provider, delivering everything from space technology to modern web applications. Our expertise spans across industries, helping businesses transform their digital presence and operations.",
    mainImage: {
      src: "/space/assembling-booster-landscape.jpg",
      alt: "Modern technology workspace representing our diverse solutions",
    },
    secondaryImage: {
      src: "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Team collaboration in a modern office setting",
    },
    breakout: {
      src: "",
      alt: "",
      title: "Technology Excellence",
      description: "From space technology to web solutions, we deliver innovative software that drives business success. Our diverse portfolio includes Stellaris, custom landing pages, and enterprise-grade admin dashboards.",
      buttonText: "Explore Solutions",
      buttonUrl: "/contact",
    },
    companiesTitle: "Trusted by Industry Leaders",
    companies: companies,
    achievementsTitle: "Our Impact",
    achievementsDescription: "Delivering innovative solutions across multiple industries, from space technology to web applications.",
    achievements: [
      { label: "Active Products", value: "10+" },
      { label: "Client Projects", value: "500+" },
      { label: "Team Members", value: "100+" },
      { label: "Client Satisfaction", value: "98%" },
    ],
  };

  return (
    <main className="min-h-screen bg-background">
      <section ref={ref} id="about" className="py-12 px-4 sm:px-6 lg:px-10 max-w-[1500px] mx-auto">
        <div className="py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <About {...aboutProps} />
          </motion.div>
        </div>
      </section>

      <section id="faq" className="py-12 px-4 sm:px-6 lg:px-10 max-w-[1500px] mx-auto">
        <div className="border-t border-border py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
            }}
            className="text-center"
          >
            <Badge className="text-xs font-medium">FAQ</Badge>
            <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-crimson tracking-tight leading-tight text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 text-muted-foreground">
              Find answers to common questions about our services and operations.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }
            }}
            className="mx-auto mt-14"
          >
            {faqs.map((faq, index) => (
              <div key={index} className="mb-8 flex gap-4">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-secondary font-mono text-xs text-primary">
                  {index + 1}
                </span>
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="font-medium text-foreground">{faq.question}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="careers" className="py-12 px-4 sm:px-6 lg:px-10 max-w-[1500px] mx-auto">
        <div className="border-t border-border py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6 } }
            }}
            className="max-w-6xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-crimson tracking-tight leading-tight text-foreground">
              Join Our Team
            </h2>
            <p className="mt-6 text-muted-foreground">
              Explore opportunities to be part of our global team.
            </p>
          </motion.div>
          {departments.map((department, index) => (
            <motion.div
              key={department.title}
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.8 + index * 0.2 } }
              }}
              className="mt-12 md:mt-20 max-w-6xl mx-auto"
            >
              <h3 className="mb-8 text-2xl font-crimson tracking-tight leading-tight text-foreground md:text-3xl">
                {department.title}
              </h3>
              <ul className="divide-y divide-border border-y border-border">
                {department.roles.map((role) => (
                  <li key={role.id} className="group">
                    <a 
                      href={role.href} 
                      className="flex items-center py-4"
                      tabIndex={0}
                      aria-label={`View details for ${role.title} position in ${role.location}`}
                    >
                      <div>
                        <div className="font-medium text-foreground text-base md:text-lg">{role.title}</div>
                        <div className="text-xs text-muted-foreground md:mt-1 md:text-sm">
                          {role.location}
                        </div>
                      </div>
                      <ArrowRight className="ml-auto size-5 -translate-x-6 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
