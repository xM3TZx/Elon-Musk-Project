import spacexImage from "@/assets/spacex-rocket.jpg";
import teslaImage from "@/assets/tesla-car.jpg";
import neuralinkImage from "@/assets/neuralink.jpg";

const works = [
  {
    title: "SpaceX",
    description: "شركة تقنيات استكشاف الفضاء التي تهدف لجعل البشرية متعددة الكواكب من خلال تطوير صواريخ قابلة لإعادة الاستخدام والسفر إلى المريخ.",
    image: spacexImage,
    year: "2002",
  },
  {
    title: "Tesla",
    description: "شركة رائدة في صناعة السيارات الكهربائية وتخزين الطاقة، تسعى لتسريع انتقال العالم إلى الطاقة المستدامة.",
    image: teslaImage,
    year: "2004",
  },
  {
    title: "Neuralink",
    description: "شركة تطور واجهات الدماغ والآلة لعلاج الأمراض العصبية وتعزيز القدرات البشرية في المستقبل.",
    image: neuralinkImage,
    year: "2016",
  },
];

const WorksSection = () => {
  return (
    <section id="works" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">الأعمال والمشاريع</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            شركات غيرت وجه الصناعات وتسعى لتغيير مستقبل البشرية
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div
              key={work.title}
              className="group relative bg-gradient-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover:glow-primary hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30">
                  <span className="text-primary text-sm font-medium">{work.year}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {work.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {work.description}
                </p>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-primary/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
