import { Target, Lightbulb, Clock, Flame, Shield, TrendingUp } from "lucide-react";

const traits = [
  {
    icon: Target,
    title: "الطموح الكبير",
    description: "يضع أهدافاً تبدو مستحيلة للآخرين ويعمل بلا كلل لتحقيقها",
  },
  {
    icon: Lightbulb,
    title: "التفكير من المبادئ الأولى",
    description: "يفكك المشاكل المعقدة إلى أجزائها الأساسية لإيجاد حلول مبتكرة",
  },
  {
    icon: Clock,
    title: "أخلاقيات العمل",
    description: "معروف بساعات عمله الطويلة وتفانيه الشديد في مشاريعه",
  },
  {
    icon: Flame,
    title: "تحمل المخاطر",
    description: "لا يخشى المخاطرة بكل شيء من أجل رؤيته للمستقبل",
  },
  {
    icon: Shield,
    title: "المرونة",
    description: "يتعافى بسرعة من الفشل ويتعلم من أخطائه",
  },
  {
    icon: TrendingUp,
    title: "التعلم المستمر",
    description: "علم نفسه هندسة الصواريخ وفيزياء الفضاء من الكتب",
  },
];

const TraitsSection = () => {
  return (
    <section id="traits" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-x-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">الصفات والسمات</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            السمات الشخصية التي ساهمت في نجاح إيلون ماسك الاستثنائي
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {traits.map((trait, index) => (
            <div
              key={trait.title}
              className="group p-6 bg-gradient-card rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-primary hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <trait.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {trait.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {trait.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TraitsSection;
