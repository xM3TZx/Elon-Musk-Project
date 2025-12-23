import { Rocket } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Rocket className="w-5 h-5 text-primary" />
            </div>
            <span className="font-display font-semibold text-lg">إيلون ماسك</span>
          </div>
          
          <nav className="flex gap-8">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              من هو
            </a>
            <a href="#works" className="text-muted-foreground hover:text-primary transition-colors">
              الأعمال
            </a>
            <a href="#traits" className="text-muted-foreground hover:text-primary transition-colors">
              الصفات
            </a>
          </nav>

          <p className="text-muted-foreground text-sm">
            موقع تعريفي بشخصية إيلون ماسك
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
