"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Mail, MapPin, Phone, Building2, Users, HelpCircle, Code2, Satellite, Cloud, ShieldCheck, Bot, Coins, Check } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const year = new Date().getFullYear();
  const { resolvedTheme } = useTheme();
  const [emailCopied, setEmailCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("contact@polarissystems.com");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <footer id="footer-contact" className="py-10 px-4 sm:px-6 lg:px-10 max-w-[1500px] mx-auto">
      <div className="flex flex-col space-y-10">
        {/* Top Divider */}
        <div className="border-t border-border py-2" />
        
        {/* Contact Section */}
        <div className="grid gap-10 md:grid-cols-3 px-4 md:px-8 lg:px-16">
          <div>
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <Mail className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">Email</p>
            <p className="mb-3 text-muted-foreground">We respond to all emails within 24 hours.</p>
            <div className="flex items-center gap-2">
              <a
                href="mailto:contact@polarissystems.com"
                className="font-semibold hover:underline"
                tabIndex={0}
                aria-label="Send us an email"
              >
                contact@polarissystems.com
              </a>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopyEmail}
                className={`h-8 px-2 rounded-full bg-accent hover:bg-accent/80 ${emailCopied ? 'text-muted-foreground' : ''}`}
                disabled={emailCopied}
              >
                {emailCopied ? (
                  <span className="flex items-center gap-1 text-xs">
                    <Check className="h-3 w-3" />
                    Copied!
                  </span>
                ) : (
                  <span className="text-xs">Copy</span>
                )}
              </Button>
            </div>
          </div>
          <div>
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <MapPin className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">Office</p>
            <p className="mb-3 text-muted-foreground">Drop by our office for a chat.</p>
            <a 
              href="#" 
              className="font-semibold hover:underline"
              tabIndex={0}
              aria-label="View our office location"
            >
              Global Headquarters: 1 Eagle St, Brisbane, QLD, 4000
            </a>
          </div>
          <div>
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <Phone className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">Phone</p>
            <p className="mb-3 text-muted-foreground">We're available Mon-Fri, 9am-5pm.</p>
            <a 
              href="tel:+61234567890" 
              className="font-semibold hover:underline"
              tabIndex={0}
              aria-label="Call us"
            >
              +61 2 3456 7890
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* Navigation Links */}
        <div className="grid gap-8 md:grid-cols-4 px-4 md:px-8 lg:px-16">
          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/company#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/company#careers" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/company#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  <HelpCircle className="h-4 w-4" />
                  FAQ
                </Link>
              </li>
            </ul>

            <div className="h-0.3" />

            <h3 className="text-sm font-semibold">
              <Link href="/pricing" className="flex items-center gap-2">
                Pricing
              </Link>
            </h3>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products/software" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  <Code2 className="h-4 w-4" />
                  Software Solutions
                </Link>
              </li>
              <li>
                <Link href="/products/stellaris" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  <Satellite className="h-4 w-4" />
                  Stellaris
                </Link>
              </li>
              <li>
                <Link href="/products/cloud" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  <Cloud className="h-4 w-4" />
                  Polaris Cloud
                </Link>
              </li>
              <li>
                <Link href="/products/security" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" />
                  Aegis Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/documentation" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Logo and Copyright */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src={resolvedTheme === "dark" ? "/logo/logo-green.png" : "/logo/logo-creamy.png"}
              alt="Polaris Systems Logo"
              width={48}
              height={48}
              className="transition-colors duration-200"
              priority
            />
            <span className={`font-crimson text-lg tracking-wide transition-colors duration-200 hidden custom-text:block ${
              resolvedTheme === "dark" ? "text-[#EDC06D]" : "text-[#836243]"
            }`}>
              POLARIS SYSTEMS
            </span>
          </div>
          <div className={`text-sm transition-colors duration-200 ${
            resolvedTheme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}>
            © {year} Polaris Systems.
          </div>
        </div>
      </div>
    </footer>
  );
}
