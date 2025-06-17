"use client";

import { Pricing2 } from "@/components/pricing2";

export default function PricingPage() {
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Pricing2
            heading="Simple, Transparent Pricing"
            description="Choose the perfect plan for your business needs"
            plans={pricingPlans}
          />
        </div>
      </div>
    </main>
  );
}
