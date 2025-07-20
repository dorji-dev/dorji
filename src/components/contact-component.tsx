export default function ContactComponent() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-[700px] mx-auto px-6">
        <div className="text-center space-y-8">
          <h2 className="text-xl font-semibold mb-8 text-gray-900 font-mono">
            let&apos;s connect
          </h2>
          <div className="flex justify-center space-x-8">
            <a
              href="https://x.com/DorjiBolt"
              className="text-sm underline decoration-gray-400 underline-offset-4 hover:decoration-gray-900 transition-colors"
            >
              x
            </a>
            <a
              href="https://github.com/dorji-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline decoration-gray-400 underline-offset-4 hover:decoration-gray-900 transition-colors"
            >
              github
            </a>
            <a
              href="https://www.facebook.com/share/1CmMsS1W82/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline decoration-gray-400 underline-offset-4 hover:decoration-gray-900 transition-colors"
            >
              facebook
            </a>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-500">© 2025</p>
        </footer>
      </div>
    </section>
  );
}
