"use client";

import { motion } from "framer-motion";
import { Network, Globe, BarChart } from "lucide-react";
import Image from "next/image";
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Benefits() {
  return (
    <section>
      <div className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-lg space-y-6">
              <h2 className="text-balance text-3xl font-semibold md:text-4xl lg:text-5xl">Technology Excellence</h2>
              <p className="text-muted-foreground">Polaris Systems delivers innovative solutions that drive business growth and digital transformation.</p>

              <Button
                variant="outline"
                size="sm"
                asChild>
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>

            <div className="[mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)]">
              <div className="rounded-xl border px-6 pb-12 pt-3 shadow-xl">
                <Benefit
                  icon={<Network className="size-5" />}
                  name="Enterprise Solutions"
                  description="Comprehensive software solutions tailored to your business needs, from custom development to cloud infrastructure."
                />
                <Benefit
                  icon={<Globe className="size-5" />}
                  name="Global Expertise"
                  description="Leverage our worldwide presence and deep industry knowledge to transform your business operations."
                />
                <Benefit
                  icon={<BarChart className="size-5" />}
                  name="Innovation Hub"
                  description="Stay ahead with cutting-edge technology solutions and digital transformation strategies."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Benefit = ({ icon, name, description }: { icon: React.ReactNode; name: string; description: string }) => {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-dashed py-3 last:border-b-0">
      <div className="flex size-12 items-center justify-center rounded-lg border">{icon}</div>
      <div className="space-y-0.5">
        <h3 className="text-sm font-medium">{name}</h3>
        <p className="text-muted-foreground line-clamp-1 text-sm">{description}</p>
      </div>
      <Button
        variant="outline"
        size="icon"
        asChild
        aria-label={`Learn more about ${name}`}>
        <Link href={`#${name.toLowerCase().replace(/\s+/g, '-')}`}>
          <Network className="size-4" />
        </Link>
      </Button>
    </div>
  );
}
