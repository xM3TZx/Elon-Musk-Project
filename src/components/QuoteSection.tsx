import { Quote } from "lucide-react";

const QuoteSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-16 h-16 text-primary/50 mx-auto mb-8" />
          <blockquote className="font-display text-2xl md:text-4xl font-medium text-foreground leading-relaxed mb-8">
            "عندما شيء ما مهم بما فيه الكفاية، تفعله حتى لو لم تكن الاحتمالات في صالحك"
          </blockquote>
          <cite className="text-primary font-medium text-lg">— إيلون ماسك</cite>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
