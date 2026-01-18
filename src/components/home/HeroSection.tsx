import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Data visualization of India"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-sm text-primary-foreground">
            <span className="mr-2 h-2 w-2 rounded-full bg-accent" />
            ML-Powered Intelligence Platform
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            Aadhaar Service Stress Intelligence
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80 sm:text-xl">
            ML-powered decision support for proactive Aadhaar service management. 
            Predict, visualize, and understand service stress at the district level.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link to="/dashboard">
              <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto">
                Open Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/about">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
