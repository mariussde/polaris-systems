"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { About3 } from "@/components/about3";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "What is Polaris Systems and what do we do?",
    answer:
      "Polaris Systems is a leading technology solutions provider, specializing in innovative software development and digital transformation. We offer comprehensive services including custom software development, cloud solutions, and digital strategy consulting.",
  },
  {
    question: "How long has Polaris Systems been in business?",
    answer:
      "With years of experience in the industry, Polaris Systems has established itself as a trusted partner in technology innovation and digital transformation.",
  },
  {
    question: "What makes Polaris Systems different from other tech companies?",
    answer:
      "Our unique combination of technical expertise, innovative approach, and comprehensive service offerings sets us apart. We provide end-to-end solutions tailored to our clients' specific needs.",
  },
  {
    question: "How can I partner with Polaris Systems?",
    answer:
      "We welcome partnerships with businesses of all sizes. Our team is ready to discuss how we can support your digital transformation and technology needs.",
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
        title: "DevOps Engineer",
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

  return (
    <main className="min-h-screen bg-background">
      <section ref={ref} id="about" className="container mx-auto py-32">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <About3
              title="About Polaris Systems"
              description="Polaris Systems is a global leader in technology solutions and digital transformation, serving clients worldwide with excellence and innovation."
              mainImage={{
                src: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                alt: "Mountain range representing our global reach",
              }}
              secondaryImage={{
                src: "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                alt: "Winding path representing our journey",
              }}
              breakout={{
                src: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                alt: "Concrete spheres representing balance and stability",
                title: "Technology Excellence",
                description: "Delivering innovative technology solutions across the globe with precision and reliability.",
                buttonText: "Learn More",
                buttonUrl: "/contact",
              }}
              companiesTitle="Trusted by Industry Leaders"
              companies={companies}
              achievementsTitle="Our Global Impact"
              achievementsDescription="Building a sustainable future through innovative technology solutions and global partnerships."
              achievements={achievements}
            />
          </motion.div>
        </div>
      </section>

      <section id="faq" className="container mx-auto py-18">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
            }}
            className="text-center"
          >
            <Badge className="text-xs font-medium">FAQ</Badge>
            <h2 className="mt-4 text-4xl font-semibold">Frequently Asked Questions</h2>
            <p className="mt-6 font-medium text-muted-foreground">
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
                    <h3 className="font-medium">{faq.question}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="careers" className="container mx-auto py-32">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6 } }
            }}
          >
            <h2 className="text-4xl font-medium md:text-6xl">Join Our Team</h2>
            <p className="mt-6 whitespace-pre-wrap text-muted-foreground md:mb-20 md:text-lg">
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
              className="mt-12 md:mt-20"
            >
              <h3 className="mb-8 text-3xl font-medium md:text-4xl">
                {department.title}
              </h3>
              <ul className="divide-y divide-border border-y border-border">
                {department.roles.map((role) => (
                  <li key={role.id} className="group">
                    <a 
                      href={role.href} 
                      className="flex items-center py-6"
                      tabIndex={0}
                      aria-label={`View details for ${role.title} position in ${role.location}`}
                    >
                      <div>
                        <div className="font-medium md:text-lg">{role.title}</div>
                        <div className="text-xs text-muted-foreground md:mt-2 md:text-sm">
                          {role.location}
                        </div>
                      </div>
                      <ArrowRight className="ml-auto size-6 -translate-x-6 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
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
