import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Rocket, Satellite, Globe2, Shield, Zap, BarChart3, ArrowRight } from "lucide-react";

const images = {
  hero: {
    src: "/space/3x-raptor-fire.jpg",
    alt: "Rocket Engine Fire",
  },
  missionControl: {
    src: "/space/super-heavy-booster.webp",
    alt: "Super Heavy Booster in Assembly",
  },
  launch: {
    src: "/space/launching-landscape.jpeg",
    alt: "Rocket Launch at Sunset",
  },
  timelapse: {
    src: "/space/timelapse-square.jpg",
    alt: "Space Timelapse Photography",
  },
  fire: {
    src: "/space/fire-square.jpeg",
    alt: "Rocket Engine Test Fire",
  },
  iss: {
    src: "/space/iss-landscape.png",
    alt: "International Space Station orbiting Earth",
  },
  pluto: {
    src: "/space/pluto-blue-haze-landscape.png",
    alt: "Pluto's Blue Atmospheric Haze",
  },
};

export default function StellarisSolutions() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background">
      {/* Hero Section - Bento Grid Layout */}
      <div className="w-full px-4 py-10 md:py-20">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Main Title Card */}
          <Card className="col-span-1 md:col-span-2 lg:col-span-2 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-background via-muted to-background border-border/50 flex flex-col justify-between min-h-[300px] relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                Stellaris
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl">
                Control and monitor our constellation of artificial satellites with cutting-edge software solutions
              </p>
              <Button size="lg" className="rounded-full bg-primary/90 hover:bg-primary/80 backdrop-blur-sm">
                <Rocket className="mr-2 h-5 w-5" />
                Schedule a Demo
              </Button>
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 h-1/2 opacity-20 pointer-events-none">
              <Image
                src={images.fire.src}
                alt=""
                fill
                className="object-cover rounded-tl-[100px]"
              />
            </div>
          </Card>

          {/* Feature Highlight */}
          <Card className="rounded-3xl overflow-hidden relative group min-h-[300px] flex flex-col justify-end">
            <Image
              src={images.iss.src}
              alt={images.iss.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-2xl font-semibold text-white mb-3">Global Coverage</h3>
              <p className="text-gray-200 text-base">24/7 satellite monitoring and control from anywhere on Earth</p>
            </div>
          </Card>
        </div>
      </div>

      {/* Features Grid - Modern Layout */}
      <section className="w-full px-4 py-10">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature Cards */}
            <Card className="p-6 space-y-4 hover:shadow-lg transition-all duration-300 rounded-3xl border-border/50 hover:border-primary/50 hover:-translate-y-1 lg:col-span-2 bg-gradient-to-br from-background via-muted to-background">
              <div className="flex items-start justify-between">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Satellite className="h-6 w-6 text-primary" />
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Real-time Monitoring</h3>
              <p className="text-muted-foreground">
                Monitor satellite telemetry, health status, and orbital parameters in real-time with our advanced tracking system
              </p>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-all duration-300 rounded-3xl border-border/50 hover:border-primary/50 hover:-translate-y-1">
              <div className="flex items-start justify-between">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Advanced Security</h3>
              <p className="text-muted-foreground">
                Military-grade encryption for satellite communications
              </p>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-all duration-300 rounded-3xl border-border/50 hover:border-primary/50 hover:-translate-y-1">
              <div className="flex items-start justify-between">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Automated Ops</h3>
              <p className="text-muted-foreground">
                AI-powered automation for routine operations
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Control Bento Section */}
      <section className="w-full px-4 py-10">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column - Image */}
            <div className="relative h-[600px] rounded-3xl overflow-hidden">
              <Image
                src={images.fire.src}
                alt="Mission Planning and Control"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">Mission Planning</h3>
                  <p className="text-gray-200">Advanced orbital trajectory and maneuver optimization</p>
                </div>
              </div>
            </div>

            {/* Right Column - Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-8 rounded-3xl bg-gradient-to-br from-background via-muted to-background">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">99.99%</div>
                  <div className="text-muted-foreground">Uptime Guarantee</div>
                </div>
              </Card>
              <Card className="p-8 rounded-3xl bg-gradient-to-br from-background via-muted to-background">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">24/7</div>
                  <div className="text-muted-foreground">Mission Support</div>
                </div>
              </Card>
              <Card className="p-8 rounded-3xl col-span-2 relative overflow-hidden group">
                <div className="relative z-10 space-y-4">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Advanced Analytics</h3>
                  <p className="text-muted-foreground">Comprehensive data analytics and predictive maintenance capabilities powered by machine learning</p>
                  <Button variant="default" size="lg" className="rounded-full">
                    Learn More
                  </Button>
                </div>
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Image
                    src={images.pluto.src}
                    alt={images.pluto.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 
