export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-light mb-6">about</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              college dropout turned developer. started coding 4 years ago 
              with nothing but curiosity and determination.
            </p>
            <p>
              self-taught through documentation, tutorials, and countless 
              hours of building projects. learned that the best teacher 
              is experience.
            </p>
            <p>
              passionate about clean code, minimal design, and solving 
              problems through technology.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="border-l-2 border-gray-300 pl-4">
            <div className="text-sm text-gray-500">journey</div>
            <div className="font-medium">2021 - started learning</div>
          </div>
          <div className="border-l-2 border-gray-300 pl-4">
            <div className="text-sm text-gray-500">focus</div>
            <div className="font-medium">web development</div>
          </div>
          <div className="border-l-2 border-gray-300 pl-4">
            <div className="text-sm text-gray-500">approach</div>
            <div className="font-medium">learn by building</div>
          </div>
        </div>
      </div>
    </section>
  )
}