"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Building2, Code2, Home, Briefcase, Wrench, HelpCircle, Users, Cloud, ShieldCheck, Bot, Phone, Coins } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from "next-themes";
import Image from "next/image";
import { ThemeButton } from "./ThemeButton";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';

export default function TopNavigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      
      setLastScrollY(currentScrollY);
      setScrolled(currentScrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  if (!mounted) {
    return <div className="fixed top-0 left-0 w-full z-50 h-20" />;
  }

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Desktop Navigation */}
      <div className="hidden custom:block">
        <div className="max-w-[1500px] mx-auto px-8 h-20 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
          {/* Logo */}
          <div className="flex justify-start">
            <div className={`flex items-center gap-2 transition-opacity duration-300 ${scrollDirection === 'down' && scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src={resolvedTheme === "dark" ? "/logo/logo-green.png" : "/logo/logo-creamy.png"}
                  alt="Polaris Systems Logo"
                  width={48}
                  height={48}
                  className="transition-colors duration-200"
                  priority
                />
                <span className="font-crimson text-lg tracking-wide text-primary hidden custom-text:block">
                  POLARIS SYSTEMS
                </span>
              </Link>
            </div>
          </div>

          {/* Center Navigation */}
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn(
              "transition-all duration-300",
              scrolled ? 'bg-background/80 backdrop-blur-sm shadow-md rounded-full' : ''
            )}
          >
            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-1 px-4 py-1">
                <NavigationMenuItem>
                  <Link href="/" onClick={(e) => e.currentTarget.blur()} className={cn(navigationMenuTriggerStyle(), "bg-transparent text-sm rounded-full")}>
                    <Home className="h-4 w-4 " />
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/company" onClick={(e) => e.currentTarget.blur()} className={cn(navigationMenuTriggerStyle(), "bg-transparent text-sm rounded-full")}>
                    Company
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-sm rounded-full">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/products/software-solutions"
                            onClick={(e) => e.currentTarget.blur()}
                          >
                            <Code2 className="h-6 w-6" />
                            <div className="mt-4 mb-2 text-lg font-medium">
                              Software Solutions
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Our cutting-edge software products
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/products/services"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            onClick={(e) => e.currentTarget.blur()}
                          >
                            <div className="flex items-center gap-2 text-sm font-medium leading-none">
                              <Briefcase className="h-4 w-4" />
                              Services
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Professional services and consulting
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/products/polaris-cloud"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            onClick={(e) => e.currentTarget.blur()}
                          >
                            <div className="flex items-center gap-2 text-sm font-medium leading-none">
                              <Cloud className="h-4 w-4" />
                              Polaris Cloud
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Our scalable and secure cloud platform.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/products/aegis-security"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            onClick={(e) => e.currentTarget.blur()}
                          >
                            <div className="flex items-center gap-2 text-sm font-medium leading-none">
                              <ShieldCheck className="h-4 w-4" />
                              Aegis Security
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Comprehensive security suite for your applications.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/pricing" onClick={(e) => e.currentTarget.blur()} className={cn(navigationMenuTriggerStyle(), "bg-transparent text-sm rounded-full")}>
                    Pricing
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <button
                    onClick={(e) => {
                      scrollToSection('footer-contact');
                      e.currentTarget.blur();
                    }}
                    className={cn(navigationMenuTriggerStyle(), "bg-transparent text-sm rounded-full")}
                  >
                    Contact
                  </button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </motion.div>

          {/* Theme Toggle */}
          <div className="flex justify-end">
            <div className={`transition-opacity duration-300 ${scrollDirection === 'down' && scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              <ThemeButton />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="custom:hidden">
        <div className={cn(
          "transition-all duration-300",
          scrolled ? 'bg-background/80 backdrop-blur-sm shadow-sm rounded-b-2xl' : 'bg-transparent'
        )}>
          <div className="px-4 py-3 flex items-center justify-between">
            {/* Logo and Company Name */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={resolvedTheme === "dark" ? "/logo/logo-green.png" : "/logo/logo-creamy.png"}
                alt="Polaris Systems Logo"
                width={40}
                height={40}
                className="transition-colors duration-200"
                priority
              />
              <span className="font-crimson text-base tracking-wide text-primary">
                POLARIS SYSTEMS
              </span>
            </Link>

            {/* Theme Toggle and Menu */}
            <div className="flex items-center">
              <ThemeButton />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-full hover:bg-accent transition-colors"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5 text-foreground" /> : <Menu className="w-5 h-5 text-foreground" />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 w-full bg-card/95 backdrop-blur-lg shadow-lg rounded-b-2xl"
            >
              <div className="px-4 py-4 space-y-4">
                {/* Home Section */}
                <Link
                  href="/"
                  onClick={(e) => {
                    setIsMobileMenuOpen(false);
                    e.currentTarget.blur();
                  }}
                  className="flex items-center gap-2 px-3 font-semibold text-sm text-foreground mb-2"
                >
                  <Home className="h-4 w-4" />
                  Home
                </Link>

                {/* Company Section */}
                <Link
                    href="/company"
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      e.currentTarget.blur();
                    }}
                    className="px-3 font-semibold text-sm text-foreground"
                  >
                    Company
                  </Link>


                {/* Products Section */}
                <div className="space-y-2">
                  <p className="px-3 font-semibold text-sm text-foreground">Products</p>
                  <div className="pl-4 space-y-1">
                    <Link
                      href="/products/software-solutions"
                      onClick={(e) => {
                        setIsMobileMenuOpen(false);
                        e.currentTarget.blur();
                      }}
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground rounded-md px-3 py-2 transition-colors duration-200"
                    >
                      <Code2 className="h-4 w-4" />
                      Software Solutions
                    </Link>
                    <Link
                      href="/products/services"
                      onClick={(e) => {
                        setIsMobileMenuOpen(false);
                        e.currentTarget.blur();
                      }}
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground rounded-md px-3 py-2 transition-colors duration-200"
                    >
                      <Briefcase className="h-4 w-4" />
                      Services
                    </Link>
                    <Link
                      href="/products/polaris-cloud"
                      onClick={(e) => {
                        setIsMobileMenuOpen(false);
                        e.currentTarget.blur();
                      }}
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground rounded-md px-3 py-2 transition-colors duration-200"
                    >
                      <Cloud className="h-4 w-4" />
                      Polaris Cloud
                    </Link>
                    <Link
                      href="/products/aegis-security"
                      onClick={(e) => {
                        setIsMobileMenuOpen(false);
                        e.currentTarget.blur();
                      }}
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground rounded-md px-3 py-2 transition-colors duration-200"
                    >
                      <ShieldCheck className="h-4 w-4" />
                      Aegis Security
                    </Link>
                  </div>
                </div>

                {/* Other Links */}
                <div className="space-y-7">
                  <Link
                    href="/pricing"
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      e.currentTarget.blur();
                    }}
                    className="px-3 font-semibold text-sm text-foreground"
                  >
                    Pricing
                  </Link>
                  <button
                    onClick={(e) => {
                      scrollToSection('footer-contact');
                      setIsMobileMenuOpen(false);
                      e.currentTarget.blur();
                    }}
                    className="px-3 font-semibold text-sm text-foreground w-full text-left"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
} 
