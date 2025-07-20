export default function AboutComponent() {
  const professionalStartDate = new Date("2023-04-07");
  const currentDate = new Date();
  const yearsProfessional = Math.floor(
    (currentDate.getTime() - professionalStartDate.getTime()) /
      (1000 * 60 * 60 * 24 * 365.25)
  );
  const professionalYearsText = `${yearsProfessional}+ years`;

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-[700px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="animate-slide-up">
            <h2 className="text-2xl font-bold mb-10 text-foreground font-mono">
              about
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-blue-400 mt-1.5 text-lg">•</span>
                <span className="text-muted-foreground leading-relaxed">
                  dropped out of college in late 2019 (plot twist: it was the
                  right decision)
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-blue-400 mt-1.5 text-lg">•</span>
                <span className="text-muted-foreground leading-relaxed">
                  earned 4 certificates of academic excellence from His Majesty
                  (apparently I was good at school, just not at staying in it)
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-blue-400 mt-1.5 text-lg">•</span>
                <span className="text-muted-foreground leading-relaxed">
                  self-taught through documentation, tutorials, and countless
                  &quot;why doesn&apos;t this work?&quot; moments
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-blue-400 mt-1.5 text-lg">•</span>
                <span className="text-muted-foreground leading-relaxed">
                  passionate about clean code, minimal design, and turning
                  coffee into websites
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-blue-400 mt-1.5 text-lg">•</span>
                <span className="text-muted-foreground leading-relaxed">
                  still googling &quot;how to center a div&quot; occasionally
                  (we all do)
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-8 animate-slide-up">
            <div className="bg-card p-6 rounded-xl border border-border/50">
              <div className="text-sm text-muted-foreground mb-2 font-mono uppercase tracking-wide">
                experience
              </div>
              <div className="font-semibold text-lg text-foreground">
                {professionalYearsText} coding professionally
              </div>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border/50">
              <div className="text-sm text-muted-foreground mb-2 font-mono uppercase tracking-wide">
                specialization
              </div>
              <div className="font-semibold text-lg text-foreground">
                Frontend Development
              </div>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border/50">
              <div className="text-sm text-muted-foreground mb-3 font-mono uppercase tracking-wide">
                tech stack
              </div>
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://react.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-600 hover:text-blue-800 underline decoration-blue-400 underline-offset-2 hover:decoration-blue-800 transition-all duration-200 hover:scale-105"
                  >
                    React
                  </a>
                  <span className="text-muted-foreground/50">•</span>
                  <a
                    href="https://nextjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-600 hover:text-blue-800 underline decoration-blue-400 underline-offset-2 hover:decoration-blue-800 transition-all duration-200 hover:scale-105"
                  >
                    Next.js
                  </a>
                </div>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://www.typescriptlang.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-600 hover:text-blue-800 underline decoration-blue-400 underline-offset-2 hover:decoration-blue-800 transition-all duration-200 hover:scale-105"
                  >
                    TypeScript
                  </a>
                  <span className="text-muted-foreground/50">•</span>
                  <a
                    href="https://ui.shadcn.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-600 hover:text-blue-800 underline decoration-blue-400 underline-offset-2 hover:decoration-blue-800 transition-all duration-200 hover:scale-105"
                  >
                    shadcn/ui
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
