import { CheckCircle2, Users, Zap, Shield, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const viabilityPoints = [
  {
    icon: CheckCircle2,
    title: "Proven Technology Stack",
    description: "Built on mature, battle-tested AI and data processing technologies"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Experienced specialists in AI, data science, and defense technology"
  },
  {
    icon: Zap,
    title: "Scalable Architecture",
    description: "Cloud-native design supporting growth from prototype to enterprise scale"
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Military-grade security protocols for sensitive technology intelligence"
  },
  {
    icon: TrendingUp,
    title: "Demonstrated ROI",
    description: "Pilot programs showing 90%+ efficiency improvements"
  }
];

export const Viability = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container relative mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-6">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Viability</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Mission Success
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Our platform combines technical excellence, operational expertise, and proven results 
            to ensure successful deployment and sustained value delivery.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {viabilityPoints.map((point, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-300 group animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative space-y-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Commitment statement */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 via-card/50 to-secondary/10 border-primary/20 backdrop-blur-sm text-center">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-4 animate-glow-pulse">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              
              <h3 className="text-3xl font-bold">Our Commitment</h3>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We are dedicated to transforming DRDO's technology intelligence capabilities through 
                continuous innovation, unwavering support, and a partnership approach that ensures 
                your success is our success.
              </p>

              <div className="grid md:grid-cols-3 gap-6 pt-6">
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-secondary">Continuous</div>
                  <div className="text-sm text-muted-foreground">Updates</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Dedicated</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};