import { Cpu } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <Cpu className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="font-bold text-lg">TrinetraAI</div>
              <div className="text-sm text-muted-foreground">Technology Intelligence & Forecasting</div>
            </div>
          </div>

          <div className="text-center md:text-right space-y-1">
            <div className="text-sm text-muted-foreground">
              Developed for DRDO Ministry of Defence
            </div>
            <div className="text-xs text-muted-foreground">
              Problem Statement ID: 25245 | Smart Automation
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2025 TrinetraAI Platform. Transforming strategic foresight through AI.</p>
        </div>
      </div>
    </footer>
  );
};