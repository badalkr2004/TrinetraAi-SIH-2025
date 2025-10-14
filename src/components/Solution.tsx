import { Brain, Database, TrendingUp, Zap, Globe, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Database,
    title: "Automated Data Aggregation",
    description: "Integrates patents, research publications, industry reports, and company data from global sources",
    color: "primary"
  },
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Advanced LLMs process and analyze vast datasets to extract meaningful insights",
    color: "secondary"
  },
  {
    icon: TrendingUp,
    title: "Technology Forecasting",
    description: "TRL progression tracking, S-curves, Hype curves, and market size predictions",
    color: "primary"
  },
  {
    icon: Zap,
    title: "Real-time Monitoring",
    description: "Continuous updates on emerging technologies and market movements",
    color: "secondary"
  },
  {
    icon: Globe,
    title: "Global Intelligence",
    description: "Access to international patents, startups, and R&D investments across all countries",
    color: "primary"
  },
  {
    icon: BarChart3,
    title: "Visual Analytics",
    description: "Interactive dashboards with convergence detection and signal analysis",
    color: "secondary"
  }
];

export const Solution = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      
      <div className="container relative mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-6">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Our Solution</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Intelligent Platform for{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Strategic Foresight
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            An AI-driven platform that transforms scattered technology intelligence into comprehensive, 
            real-time strategic insights through automated aggregation and advanced analytics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="relative p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-300 group overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative space-y-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${
                  feature.color === 'primary' 
                    ? 'from-primary/20 to-primary/5' 
                    : 'from-secondary/20 to-secondary/5'
                } flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-7 h-7 ${
                    feature.color === 'primary' ? 'text-primary' : 'text-secondary'
                  }`} />
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${
                feature.color === 'primary' ? 'from-primary/5' : 'from-secondary/5'
              } to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity`} />
            </Card>
          ))}
        </div>

        {/* Key differentiator */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-primary/10 via-card/50 to-secondary/10 border-primary/20 backdrop-blur-sm">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Comprehensive Technology Intelligence</h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Our platform leverages multiple LLMs with access to both paid and open-source databases, 
                delivering unparalleled data visualization and technology forecasting capabilities that 
                transform how DRDO makes strategic technology decisions.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};