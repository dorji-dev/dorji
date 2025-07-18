export default function Skills() {
  const skills = [
    'javascript',
    'typescript', 
    'react',
    'next.js',
    'html',
    'css',
    'tailwind css',
    'git'
  ]

  return (
    <section id="skills" className="section-padding">
      <h2 className="text-2xl font-light mb-12">skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div 
            key={skill}
            className="text-center p-4 border border-gray-200 hover:border-gray-400 transition-colors"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="text-sm font-medium">{skill}</div>
          </div>
        ))}
      </div>
    </section>
  )
}