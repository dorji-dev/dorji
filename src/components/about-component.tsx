export default function AboutComponent() {
  // Calculate years of professional experience since 2022
  const professionalStartDate = new Date("2023-04-07");
  const currentDate = new Date();
  const yearsProfessional = Math.floor(
    (currentDate.getTime() - professionalStartDate.getTime()) /
      (1000 * 60 * 60 * 24 * 365.25)
  );
  const professionalYearsText = `${yearsProfessional}+ years`;

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-[700px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-xl font-medium mb-8 text-gray-900">about</h2>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <span className="text-gray-400 mt-1">•</span>
                <span className="text-gray-600">
                  dropped out of college in late 2019 (plot twist: it was the
                  right decision)
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-gray-400 mt-1">•</span>
                <span className="text-gray-600">
                  earned 5 certificates of academic excellence from His Majesty
                  (apparently I was good at school, just not at staying in it)
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-gray-400 mt-1">•</span>
                <span className="text-gray-600">
                  self-taught through documentation, tutorials, and countless
                  &quot;why doesn&apos;t this work?&quot; moments
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-gray-400 mt-1">•</span>
                <span className="text-gray-600">
                  passionate about clean code, minimal design, and turning
                  coffee into websites
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-gray-400 mt-1">•</span>
                <span className="text-gray-600">
                  still googling &quot;how to center a div&quot; occasionally
                  (we all do)
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="border-l-2 border-gray-200 pl-4">
              <div className="text-sm text-gray-500 mb-1">experience</div>
              <div className="font-medium">
                {professionalYearsText} coding professionally
              </div>
            </div>
            <div className="border-l-2 border-gray-200 pl-4">
              <div className="text-sm text-gray-500 mb-1">specialization</div>
              <div className="font-medium">Frontend Development</div>
            </div>
            <div className="border-l-2 border-gray-200 pl-4">
              <div className="text-sm text-gray-500 mb-1">tech stack</div>
              <div className="space-y-1">
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://react.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-700 hover:text-gray-900 underline decoration-gray-400 underline-offset-2 hover:decoration-gray-900 transition-colors"
                  >
                    React
                  </a>
                  <span className="text-gray-400">•</span>
                  <a
                    href="https://nextjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-700 hover:text-gray-900 underline decoration-gray-400 underline-offset-2 hover:decoration-gray-900 transition-colors"
                  >
                    Next.js
                  </a>
                </div>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://www.typescriptlang.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-700 hover:text-gray-900 underline decoration-gray-400 underline-offset-2 hover:decoration-gray-900 transition-colors"
                  >
                    TypeScript
                  </a>
                  <span className="text-gray-400">•</span>
                  <a
                    href="https://ui.shadcn.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-700 hover:text-gray-900 underline decoration-gray-400 underline-offset-2 hover:decoration-gray-900 transition-colors"
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
