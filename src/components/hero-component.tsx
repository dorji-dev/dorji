export default function HeroComponent() {
  const startDate = new Date("2020-07-01");
  const currentDate = new Date();
  const yearsSinceCoding = Math.floor(
    (currentDate.getTime() - startDate.getTime()) /
      (1000 * 60 * 60 * 24 * 365.25)
  );
  const yearsText = `${yearsSinceCoding}+ years`;

  return (
    <section id="hero" className="py-16">
      <div className="max-w-[700px] mx-auto px-6">
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-medium leading-tight text-gray-900">
              Dorji Tshering
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mt-2">
              self-taught developer
            </p>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl">
            {yearsText} of learning, building, and growing.
            <br />
            turning ideas into digital experiences.
          </p>
          <div className="pt-2">
            <div className="flex items-center flex-wrap bg-gray-100 rounded-full px-4 py-2">
              <span className="text-gray-600 mr-2">Currently working at</span>
              <span className="font-medium text-gray-900 flex items-center">
                <svg
                  className="w-5 h-5 mr-1.5 text-red-500"
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
