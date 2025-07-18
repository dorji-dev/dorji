export default function Projects() {
  const projects = [
    {
      title: "project one",
      description: "a web application built with react and next.js",
      tech: ["react", "next.js", "typescript"],
      link: "#"
    },
    {
      title: "project two", 
      description: "responsive website with modern design principles",
      tech: ["html", "css", "javascript"],
      link: "#"
    },
    {
      title: "project three",
      description: "full-stack application with database integration",
      tech: ["next.js", "typescript", "tailwind"],
      link: "#"
    }
  ]

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <h2 className="text-2xl font-light mb-12">selected work</h2>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div 
            key={project.title}
            className="border-b border-gray-200 pb-8 last:border-b-0"
          >
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-2">tech stack</div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs px-2 py-1 bg-gray-200 text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-end">
                <a 
                  href={project.link}
                  className="text-sm border-b border-gray-400 hover:border-gray-900 transition-colors"
                >
                  view project →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}