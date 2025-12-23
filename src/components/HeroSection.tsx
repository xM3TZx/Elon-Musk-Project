import heroImage from "@/assets/hero-elon.jpg";
import { Rocket, Zap, Brain } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-slow animation-delay-200" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-right order-2 lg:order-1">
            <p className="text-primary font-medium mb-4 animate-fade-up tracking-widest uppercase text-sm">
              رائد أعمال • مبتكر • صاحب رؤية
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-up animation-delay-200">
              <span className="text-gradient">إيلون</span>
              <br />
              <span className="text-foreground">ماسك</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto lg:mr-0 mb-8 animate-fade-up animation-delay-400 leading-relaxed">
              الرجل الذي يسعى لجعل البشرية متعددة الكواكب وتسريع انتقال العالم إلى الطاقة المستدامة
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-8 animate-fade-up animation-delay-600">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-primary mb-1">
                  <Rocket className="w-5 h-5" />
                  <span className="font-display text-3xl font-bold">SpaceX</span>
                </div>
                <p className="text-muted-foreground text-sm">غزو الفضاء</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-primary mb-1">
                  <Zap className="w-5 h-5" />
                  <span className="font-display text-3xl font-bold">Tesla</span>
                </div>
                <p className="text-muted-foreground text-sm">السيارات الكهربائية</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-primary mb-1">
                  <Brain className="w-5 h-5" />
                  <span className="font-display text-3xl font-bold">Neuralink</span>
                </div>
                <p className="text-muted-foreground text-sm">الدماغ والآلة</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 scale-90 animate-pulse-slow" />
              <img
                src={heroImage}
                alt="إيلون ماسك"
                className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-primary/30 glow-primary animate-float"
              />
              <div className="absolute -inset-4 rounded-full border border-primary/20 animate-pulse-slow" />
              <div className="absolute -inset-8 rounded-full border border-primary/10" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
