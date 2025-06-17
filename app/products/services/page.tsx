"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Wrench, Users, BarChart, Lightbulb, MessageSquare, Rocket } from "lucide-react";
import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Technical Consulting",
      description: "Expert guidance on technology strategy, architecture, and implementation."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Augmentation",
      description: "Enhance your team with skilled professionals for your projects."
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Business Analytics",
      description: "Data-driven insights to optimize your business operations and growth."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation Workshops",
      description: "Collaborative sessions to drive innovation and digital transformation."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Technical Support",
      description: "24/7 support and maintenance for your technology infrastructure."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Digital Transformation",
      description: "End-to-end support for your organization's digital journey."
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-10 max-w-[1500px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-crimson tracking-tight mb-6 dark:text-gray-200">
            Professional Services
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive technology services to help your business thrive in the digital age.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full rounded-[30px] overflow-hidden h-[400px] mb-20"
        >
          <Image
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Team collaboration in modern office"
            className="w-full h-full object-cover"
            width={1260}
            height={750}
            priority
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="border-t border-gray-200 pt-8 pb-6"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="font-crimson text-lg mb-3 dark:text-gray-200">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Button className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-6">
            Explore Services
          </Button>
        </motion.div>
      </section>
    </main>
  );
}
