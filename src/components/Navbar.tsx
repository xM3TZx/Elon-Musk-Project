import { Rocket } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
              <Rocket className="w-5 h-5 text-primary" />
            </div>
            <span className="font-display font-semibold">إيلون ماسك</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              من هو
            </a>
            <a href="#works" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              الأعمال
            </a>
            <a href="#traits" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              الصفات
            </a>
          </div>

          <div className="w-9 h-9" /> {/* Spacer for balance */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
