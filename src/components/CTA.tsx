import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Calendar } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl border border-primary/20 bg-gradient-to-br from-card/80 via-card/50 to-card/80 backdrop-blur-xl p-12 md:p-16 overflow-hidden animate-scale-in">
            {/* Corner accents */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-secondary/10 to-transparent rounded-tr-full" />

            <div className="relative text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold">
                  Ready to Transform Your{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Intelligence Operations?
                  </span>
                </h2>
                
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Join DRDO's technology intelligence revolution. Schedule a demonstration 
                  and discover how our platform can accelerate your strategic decision-making.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button variant="hero" size="lg" className="group">
                  <Calendar className="w-5 h-5" />
                  Schedule Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button variant="outline" size="lg" className="group">
                  <Mail className="w-5 h-5" />
                  Contact Us
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="pt-8 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '1s' }} />
                  <span>Proven Results</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};