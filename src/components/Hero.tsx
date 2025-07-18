export default function Hero() {
  return (
    <section className="section-padding pt-32 fade-in">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-light leading-tight">
          self-taught
          <br />
          developer
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          4 years of learning, building, and growing.
          <br />
          turning ideas into digital experiences.
        </p>
        <div className="pt-4">
          <a 
            href="#projects" 
            className="inline-block border border-gray-900 px-6 py-2 text-sm hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            view work
          </a>
        </div>
      </div>
    </section>
  )
}