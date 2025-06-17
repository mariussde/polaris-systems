"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, AlertTriangle, Key, Server } from "lucide-react";
import Image from "next/image";

export default function AegisSecurityPage() {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Advanced Threat Protection",
      description: "Real-time protection against sophisticated cyber threats and attacks."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Encryption",
      description: "End-to-end encryption to secure your sensitive data at rest and in transit."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "24/7 Monitoring",
      description: "Continuous security monitoring and threat detection across your infrastructure."
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Incident Response",
      description: "Rapid response and recovery from security incidents and breaches."
    },
    {
      icon: <Key className="w-6 h-6" />,
      title: "Access Control",
      description: "Granular access control and identity management for your systems."
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Infrastructure Security",
      description: "Comprehensive security for your cloud and on-premises infrastructure."
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
            Aegis Security
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive security solutions to protect your digital assets and ensure business continuity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full rounded-[30px] overflow-hidden h-[400px] mb-20"
        >
          <Image
            src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Cybersecurity concept visualization"
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
            Secure Your Business
          </Button>
        </motion.div>
      </section>
    </main>
  );
}
