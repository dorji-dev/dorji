export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="text-center space-y-8">
        <h2 className="text-2xl font-light">let's connect</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          interested in working together or just want to say hello?
        </p>
        <div className="flex justify-center space-x-8">
          <a 
            href="mailto:your.email@example.com"
            className="text-sm border-b border-gray-400 hover:border-gray-900 transition-colors"
          >
            email
          </a>
          <a 
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm border-b border-gray-400 hover:border-gray-900 transition-colors"
          >
            github
          </a>
          <a 
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm border-b border-gray-400 hover:border-gray-900 transition-colors"
          >
            linkedin
          </a>
        </div>
      </div>
      <footer className="mt-16 pt-8 border-t border-gray-200 text-center">
        <p className="text-xs text-gray-500">
          © 2025 — built with next.js & tailwind css
        </p>
      </footer>
    </section>
  )
}