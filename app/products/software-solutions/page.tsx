"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code2, Cpu, Database, Globe, Shield, Zap } from "lucide-react";
import Image from "next/image";

export default function SoftwareSolutionsPage() {
  const features = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Custom Software Development",
      description: "Tailored solutions designed to meet your specific business needs and challenges."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI & Machine Learning",
      description: "Intelligent systems that learn and adapt to optimize your business processes."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with our advanced analytics platform."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Cloud Solutions",
      description: "Scalable and secure cloud infrastructure to power your digital transformation."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and data."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Enhance your systems' speed and efficiency with our optimization services."
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
            Software Solutions
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Empowering businesses with cutting-edge software solutions that drive innovation and growth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full rounded-[30px] overflow-hidden h-[400px] mb-20"
        >
          <Image
            src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Software development team collaborating"
            className="w-full h-full object-cover"
            width={1260}
            height={750}
            priority
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="border-t border-gray-200 pt-8 pb-6"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="font-crimson text-lg mb-3 dark:text-gray-200">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
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
            Get Started
          </Button>
        </motion.div>
      </section>
    </main>
  );
}
