import { AlertCircle, Database, Clock, Users, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";

const challenges = [
  {
    icon: Database,
    title: "Fragmented Data",
    description: "Critical technology information scattered across multiple databases and sources"
  },
  {
    icon: Clock,
    title: "Manual Processing",
    description: "Labor-intensive analysis causing significant delays in decision-making"
  },
  {
    icon: TrendingDown,
    title: "Outdated Insights",
    description: "By the time insights reach decision-makers, they're already obsolete"
  },
  {
    icon: Users,
    title: "Resource Constraints",
    description: "Scarcity of specialized personnel for comprehensive technology scouting"
  }
];

export const ProblemStatement = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-destructive/20 bg-destructive/5 backdrop-blur-sm mb-6">
            <AlertCircle className="w-4 h-4 text-destructive" />
            <span className="text-sm text-muted-foreground">The Challenge</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Breaking Through{" "}
            <span className="bg-gradient-to-r from-destructive to-destructive/60 bg-clip-text text-transparent">
              Intelligence Barriers
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            DRDO laboratories face critical challenges in technology intelligence that hinder 
            strategic decision-making and slow down innovation cycles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((challenge, index) => (
            <Card 
              key={index}
              className="relative p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_hsl(195_100%_50%/0.1)] group animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
              
              <div className="relative space-y-4">
                <div className="w-12 h-12 rounded-lg bg-muted/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <challenge.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <h3 className="text-xl font-semibold">{challenge.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl border border-destructive/20 bg-destructive/5 backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-destructive" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">The Core Problem</h3>
              <p className="text-muted-foreground leading-relaxed">
                Traditional technology intelligence methods are unable to provide the continuous monitoring, 
                real-time updates, and comprehensive analysis required for effective strategic planning in 
                today's rapidly evolving technological landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};