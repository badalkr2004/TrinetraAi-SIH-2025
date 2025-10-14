import { TrendingUp, Clock, Target, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const impacts = [
  {
    icon: TrendingUp,
    title: "90% Faster Intelligence",
    description: "Automated aggregation reduces analysis time from weeks to hours",
    metric: "90%",
    color: "primary"
  },
  {
    icon: Clock,
    title: "Real-time Updates",
    description: "Continuous monitoring eliminates outdated insights",
    metric: "24/7",
    color: "secondary"
  },
  {
    icon: Target,
    title: "Precision Forecasting",
    description: "AI-driven predictions with 95%+ accuracy for technology trends",
    metric: "95%+",
    color: "primary"
  },
  {
    icon: Sparkles,
    title: "Resource Optimization",
    description: "Reduces manual effort, freeing experts for strategic analysis",
    metric: "10x",
    color: "secondary"
  }
];

const benefits = [
  "Comprehensive global patent and research coverage",
  "Strategic decision-making with actionable insights",
  "Early identification of emerging technologies",
  "Competitive intelligence on international R&D",
  "Reduced dependency on manual processes",
  "Scalable across all DRDO laboratories"
];

export const Impact = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="container relative mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-6">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Impact & Benefits</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transformative{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Impact
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Measurable improvements in efficiency, accuracy, and strategic capability 
            across technology intelligence operations.
          </p>
        </div>

        {/* Impact metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impacts.map((impact, index) => (
            <Card
              key={index}
              className="relative p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-300 group overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${
                impact.color === 'primary' 
                  ? 'from-primary/10 to-transparent' 
                  : 'from-secondary/10 to-transparent'
              } opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              <div className="relative space-y-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${
                  impact.color === 'primary' 
                    ? 'from-primary/20 to-primary/5' 
                    : 'from-secondary/20 to-secondary/5'
                } flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <impact.icon className={`w-6 h-6 ${
                    impact.color === 'primary' ? 'text-primary' : 'text-secondary'
                  }`} />
                </div>
                
                <div className={`text-4xl font-bold bg-gradient-to-br ${
                  impact.color === 'primary' 
                    ? 'from-primary to-primary/60' 
                    : 'from-secondary to-secondary/60'
                } bg-clip-text text-transparent`}>
                  {impact.metric}
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">{impact.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {impact.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Key benefits */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-card/80 via-card/50 to-card/80 backdrop-blur-sm border-border">
            <h3 className="text-2xl font-bold mb-6 text-center">Strategic Benefits</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* ROI callout */}
        <div className="mt-12 max-w-3xl mx-auto text-center p-8 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 backdrop-blur-sm">
          <div className="space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 animate-glow-pulse">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Exponential Value Creation</h3>
            <p className="text-muted-foreground">
              Every minute saved in intelligence gathering compounds into hours of strategic advantage, 
              positioning DRDO at the forefront of technology innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};