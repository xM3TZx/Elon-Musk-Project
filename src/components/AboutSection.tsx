import { Calendar, MapPin, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">من هو إيلون ماسك؟</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              إيلون ريف ماسك هو رجل أعمال ومستثمر ومهندس أمريكي من أصل جنوب أفريقي. 
              يُعد أحد أغنى الأشخاص في العالم ومن أكثر رواد الأعمال تأثيراً في القرن الحادي والعشرين.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              ولد في بريتوريا بجنوب أفريقيا عام 1971، وأظهر اهتماماً مبكراً بالحوسبة والبرمجة. 
              باع أول لعبة فيديو برمجها وهو في الثانية عشرة من عمره.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              انتقل إلى كندا ثم الولايات المتحدة لإكمال دراسته، وبدأ مسيرته الريادية بتأسيس شركة Zip2 
              ثم X.com التي أصبحت لاحقاً PayPal.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-card p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-primary">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg">تاريخ الميلاد</h3>
                  <p className="text-muted-foreground">28 يونيو 1971</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-card p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-primary">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg">مكان الميلاد</h3>
                  <p className="text-muted-foreground">بريتوريا، جنوب أفريقيا</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-card p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-primary">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg">الثروة الصافية</h3>
                  <p className="text-muted-foreground">أحد أغنى أشخاص العالم</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
