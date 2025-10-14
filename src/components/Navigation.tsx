import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon, Cpu } from "lucide-react";
import { useTheme } from "next-themes";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Solution", href: "#solution" },
    { label: "Timeline", href: "#timeline" },
    { label: "Impact", href: "#impact" },
    { label: "Technology", href: "#technology" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  if (!mounted) return null;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3"
            : "py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div
            className={`relative backdrop-blur-xl bg-background/60 border border-border/40 rounded-2xl transition-all duration-300 ${
              isScrolled
                ? "shadow-[0_8px_32px_0_rgba(0,255,255,0.1)]"
                : "shadow-[0_4px_16px_0_rgba(0,255,255,0.05)]"
            }`}
          >
            {/* Glassmorphism gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 rounded-2xl pointer-events-none" />

            <div className="relative flex items-center justify-between px-6 py-4">
              {/* Logo */}
              <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollToSection("#home")}>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <div className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  TrinetraAI
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
                  </button>
                ))}
              </div>

              {/* Theme Switcher & Mobile Menu Button */}
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="rounded-xl hover:bg-muted/50 transition-all hover:scale-110"
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5 text-primary" />
                  ) : (
                    <Moon className="w-5 h-5 text-secondary" />
                  )}
                </Button>

                {/* Mobile Menu Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden rounded-xl hover:bg-muted/50"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </Button>

                <Button variant="hero" size="sm" className="hidden md:flex">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-24 left-4 right-4 transition-all duration-300 ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <div className="relative backdrop-blur-xl bg-background/90 border border-border/40 rounded-2xl shadow-[0_8px_32px_0_rgba(0,255,255,0.15)] overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />

            <div className="relative p-6 space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all group animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:w-2 group-hover:h-2 transition-all" />
                    {item.label}
                  </span>
                </button>
              ))}

              <div className="pt-4">
                <Button variant="hero" size="lg" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};