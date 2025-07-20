export default function HeroComponent() {
  const startDate = new Date("2020-07-01");
  const currentDate = new Date();
  const yearsSinceCoding = Math.floor(
    (currentDate.getTime() - startDate.getTime()) /
      (1000 * 60 * 60 * 24 * 365.25)
  );
  const yearsText = `${yearsSinceCoding}+ years`;

  return (
    <section id="hero" className="py-24">
      <div className="max-w-2xl mx-auto px-6">
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-foreground tracking-tight">
              Dorji Tshering
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mt-4 font-mono">
              self-taught developer
            </p>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {yearsText} of learning, building, and growing.
            <br />
            turning ideas into digital experiences.
          </p>
          <div className="pt-4">
            <div className="inline-flex items-center flex-wrap bg-muted rounded-lg px-4 py-2 border border-border">
              <span className="text-muted-foreground mr-2 text-sm">
                Currently working at
              </span>
              <span className="font-medium text-foreground flex items-center">
                <svg
                  className="w-4 h-4 mr-1.5 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                Selise Bhutan
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
