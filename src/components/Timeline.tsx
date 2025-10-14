import { CheckCircle2, Circle } from "lucide-react";

const phases = [
  {
    phase: "Phase 1",
    title: "Foundation & Integration",
    duration: "Months 1-3",
    tasks: [
      "Database integration setup",
      "LLM model deployment",
      "Initial data aggregation pipeline",
      "Core platform architecture"
    ]
  },
  {
    phase: "Phase 2",
    title: "Intelligence Engine",
    duration: "Months 4-6",
    tasks: [
      "AI analysis framework implementation",
      "Forecasting algorithms deployment",
      "Real-time monitoring system",
      "Data visualization dashboard"
    ]
  },
  {
    phase: "Phase 3",
    title: "Advanced Features",
    duration: "Months 7-9",
    tasks: [
      "TRL progression tracking",
      "Technology convergence detection",
      "Market analysis integration",
      "Signal analysis capabilities"
    ]
  },
  {
    phase: "Phase 4",
    title: "Optimization & Scale",
    duration: "Months 10-12",
    tasks: [
      "Performance optimization",
      "User training and onboarding",
      "Continuous improvement cycles",
      "Full deployment across DRDO"
    ]
  }
];

export const Timeline = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container relative mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-6">
            <Circle className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Implementation</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Strategic{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Roadmap
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            A phased approach ensuring systematic implementation with measurable milestones 
            and continuous value delivery.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary" />

            <div className="space-y-12">
              {phases.map((phase, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } animate-fade-in-up`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Timeline node */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-primary border-4 border-background shadow-[0_0_20px_hsl(195_100%_50%/0.5)] z-10" />

                  {/* Content card */}
                  <div className={`flex-1 ml-20 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <div className="group p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_hsl(195_100%_50%/0.15)]">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="text-sm font-semibold text-primary mb-1">{phase.phase}</div>
                          <h3 className="text-2xl font-bold">{phase.title}</h3>
                        </div>
                        <div className="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
                          <span className="text-xs font-medium text-secondary">{phase.duration}</span>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {phase.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline summary */}
        <div className="mt-16 max-w-3xl mx-auto p-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">12-Month Transformation Journey</h3>
            <p className="text-muted-foreground">
              From fragmented manual processes to a fully automated, AI-powered technology 
              intelligence platform delivering real-time strategic insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};