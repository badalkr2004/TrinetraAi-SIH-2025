import { Brain, Database, Cpu, LineChart, Globe2, Shield } from "lucide-react";

const technologies = [
  {
    icon: Brain,
    title: "Advanced LLMs",
    description: "Multiple language models for comprehensive analysis"
  },
  {
    icon: Database,
    title: "Multi-source Integration",
    description: "Paid & open-source databases aggregation"
  },
  {
    icon: Cpu,
    title: "Real-time Processing",
    description: "High-performance data pipeline architecture"
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description: "TRL tracking, S-curves, and market forecasting"
  },
  {
    icon: Globe2,
    title: "Global Coverage",
    description: "International patents and research monitoring"
  },
  {
    icon: Shield,
    title: "Secure Infrastructure",
    description: "Enterprise-grade security for sensitive data"
  }
];

export const Technology = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-6">
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Technology Stack</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powered by{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Cutting-Edge AI
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Enterprise-grade technology infrastructure designed for reliability, 
            scalability, and unparalleled analytical capability.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative space-y-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <tech.icon className="w-7 h-7 text-primary" />
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">{tech.title}</h3>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </div>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Technical highlights */}
        <div className="mt-16 max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-xl border border-primary/20 bg-primary/5 backdrop-blur-sm">
            <div className="text-3xl font-bold text-primary mb-2">100+</div>
            <div className="text-sm text-muted-foreground">Global Data Sources</div>
          </div>
          <div className="text-center p-6 rounded-xl border border-secondary/20 bg-secondary/5 backdrop-blur-sm">
            <div className="text-3xl font-bold text-secondary mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">System Uptime</div>
          </div>
          <div className="text-center p-6 rounded-xl border border-primary/20 bg-primary/5 backdrop-blur-sm">
            <div className="text-3xl font-bold text-primary mb-2">Real-time</div>
            <div className="text-sm text-muted-foreground">Data Processing</div>
          </div>
        </div>
      </div>
    </section>
  );
};