export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-gray-100 z-50">
      <nav className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold">
            dev.
          </div>
          <div className="flex space-x-8">
            <a href="#about" className="text-sm hover:text-gray-600 transition-colors">
              about
            </a>
            <a href="#skills" className="text-sm hover:text-gray-600 transition-colors">
              skills
            </a>
            <a href="#projects" className="text-sm hover:text-gray-600 transition-colors">
              projects
            </a>
            <a href="#contact" className="text-sm hover:text-gray-600 transition-colors">
              contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}