"use client";

import { CircleCheck } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

interface PricingFeature {
  text: string;
}

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
  features: PricingFeature[];
  button: {
    text: string;
    url: string;
  };
}

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  const pricingPlans = [
    {
      id: "basic",
      name: "Basic",
      description: "Perfect for small businesses",
      monthlyPrice: "€99",
      yearlyPrice: "€990",
      features: [
        { text: "Up to 5 team members" },
        { text: "Basic automation workflows" },
        { text: "Email support" },
        { text: "Standard security features" },
        { text: "Basic analytics dashboard" },
      ],
      button: {
        text: "Subscribe",
        url: "/contact",
      },
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "For growing organizations",
      monthlyPrice: "€299",
      yearlyPrice: "€2,990",
      features: [
        { text: "Unlimited team members" },
        { text: "Advanced automation workflows" },
        { text: "24/7 priority support" },
        { text: "Advanced security features" },
        { text: "Custom integrations" },
        { text: "Advanced analytics & reporting" },
        { text: "Dedicated account manager" },
      ],
      button: {
        text: "Subscribe",
        url: "/contact",
      },
    },
    {
      id: "one-time",
      name: "One-Time Payment",
      description: "Pay once, use forever",
      monthlyPrice: "€799",
      yearlyPrice: "€799",
      features: [
        { text: "Lifetime access" },
        { text: "All Enterprise features" },
        { text: "One-time payment" },
        { text: "Free updates" },
        { text: "Priority support" },
        { text: "Self-hosted option" },
        { text: "Source code access" },
      ],
      button: {
        text: "Buy Now",
        url: "/contact",
      },
    },
    {
      id: "custom",
      name: "Custom Solution",
      description: "Tailored for your unique needs",
      monthlyPrice: "Custom",
      yearlyPrice: "Custom",
      features: [
        { text: "Fully customized solution" },
        { text: "Dedicated development team" },
        { text: "Custom integrations & APIs" },
        { text: "White-label options" },
        { text: "Advanced security & compliance" },
        { text: "Custom analytics & reporting" },
        { text: "24/7 dedicated support" },
        { text: "SLA guarantees" },
      ],
      button: {
        text: "Contact Us",
        url: "/contact",
      },
    },
  ];

  return (
    <main className="min-h-screen bg-background font-dm-sans">
      <section className="py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center">
            <h2 className="text-4xl font-semibold text-pretty lg:text-6xl">
              Simple, Transparent Pricing
            </h2>
            <div className="text-muted-foreground lg:text-xl">
              Choose the perfect plan for your business needs
            </div>
            <div className="flex items-center gap-3 text-lg">
              Monthly
              <Switch
                checked={isYearly}
                onCheckedChange={() => setIsYearly(!isYearly)}
              />
              Yearly
            </div>
            <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {pricingPlans.map((plan) => (
                <Card
                  key={plan.id}
                  className="relative flex min-h-[600px] flex-col text-left"
                >
                  <CardHeader>
                    <CardTitle className="text-xl">
                      {plan.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {plan.description}
                    </p>
                    <div className="mt-4 flex items-end">
                      {plan.monthlyPrice === "Custom" ? (
                        <span className="text-4xl font-semibold">Custom</span>
                      ) : plan.id === "one-time" ? (
                        <span className="text-4xl font-semibold">€799</span>
                      ) : (
                        <>
                          <span className="text-4xl font-semibold">
                            {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                          </span>
                          <span className="text-2xl font-semibold text-muted-foreground">
                            {isYearly ? "/yr" : "/mo"}
                          </span>
                        </>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Separator className="mb-6" />
                    <ul className="space-y-4">
                      {plan.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-sm"
                        >
                          <CircleCheck className="size-4 flex-shrink-0" />
                          <span>{feature.text}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button 
                      asChild 
                      className={`w-full ${plan.id === "custom" ? "bg-primary hover:bg-primary/90" : ""}`}
                    >
                      <a href={plan.button.url}>{plan.button.text}</a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
