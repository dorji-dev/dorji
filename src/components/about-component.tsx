export default function AboutComponent() {
  const professionalStartDate = new Date("2023-04-07");
  const currentDate = new Date();
  const yearsProfessional = Math.floor(
    (currentDate.getTime() - professionalStartDate.getTime()) /
      (1000 * 60 * 60 * 24 * 365.25)
  );
  const professionalYearsText = `${yearsProfessional}+ years`;

  return (
    <section className="space-y-16">
      <div className="animate-fade-in space-y-8">
        <h2 className="text-2xl font-bold text-foreground font-mono">about</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Personal Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-foreground font-medium text-lg">
                My Story
              </h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-muted-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                  <p className="text-muted-foreground">
                    Dropped out of college in late 2019 (plot twist: it was the
                    right decision)
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-muted-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2H8m0 0l4 4m4-4l-2 2m2.586-2.907l2.207 2.207m-2.207 2.207l-2.207 2.207m2.207-2.207L11.586 12H3m8.971-3.25a.75.75 0 00-1.06-1.06L12 8.94l-4.971-4.971a.75.75 0 00-1.06 1.06L10.94 12l-4.971 4.971a.75.75 0 101.06 1.06L12 15.06l4.971 4.971a.75.75 0 001.06-1.06L13.06 12l4.971-4.971a.75.75 0 00-1.06-1.06z"
                    />
                  </svg>
                  <p className="text-muted-foreground">
                    Earned 4 certificates of academic excellence from His Majesty
                    (apparently I was good at school, just not at staying in it)
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-muted-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <p className="text-muted-foreground">
                    Self-taught through documentation, tutorials, and countless
                    &quot;why doesn&apos;t this work?&quot; moments
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-muted-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-muted-foreground">
                    Passionate about clean code, minimal design, and turning
                    coffee into websites
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-muted-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-muted-foreground">
                    Still googling &quot;how to center a div&quot; occasionally
                    (we all do)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stats and Tech Stack */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-foreground font-medium text-lg">Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="text-foreground font-medium">
                    Experience:
                  </span>
                  <span className="text-foreground text-2xl font-bold">
                    {professionalYearsText}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-foreground font-medium">
                    Specialization:
                  </span>
                  <span className="text-foreground text-xl font-bold">
                    Frontend
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-foreground font-medium text-lg">
                Tech Stack
              </h3>
              <div className="flex flex-col gap-2 [&>a]:w-fit">
                <a
                  href="https://react.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-primary hover:text-primary/80 transition-all duration-200 hover:scale-101"
                >
                  <svg
                    className="w-4 h-4 mr-1.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  React
                </a>
                <a
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-primary hover:text-primary/80 transition-all duration-200 hover:scale-101"
                >
                  <svg
                    className="w-4 h-4 mr-1.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Next.js
                </a>
                <a
                  href="https://www.typescriptlang.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-primary hover:text-primary/80 transition-all duration-200 hover:scale-101"
                >
                  <svg
                    className="w-4 h-4 mr-1.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  TypeScript
                </a>
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-primary hover:text-primary/80 transition-all duration-200 hover:scale-101"
                >
                  <svg
                    className="w-4 h-4 mr-1.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Tailwind CSS
                </a>
                <a
                  href="https://nodejs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-primary hover:text-primary/80 transition-all duration-200 hover:scale-101"
                >
                  <svg
                    className="w-4 h-4 mr-1.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Node.js
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
