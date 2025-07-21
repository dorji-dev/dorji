export default function ContactComponent() {
  return (
    <section className="space-y-12">
      <div className="text-center space-y-8 animate-fade-in">
        <h2 className="text-2xl font-bold text-foreground font-mono">
          let&apos;s connect
        </h2>
        <div className="flex justify-center space-x-8">
          <a
            href="https://x.com/DorjiBolt"
            className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-101 flex flex-col items-center space-y-2 group"
          >
            <div className="w-10 h-10 bg-card rounded-full border border-border flex items-center justify-center group-hover:border-primary transition-all duration-200">
              <span className="font-semibold">𝕏</span>
            </div>
            <span className="text-sm font-medium">X</span>
          </a>
          <a
            href="https://github.com/dorji-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-101 flex flex-col items-center space-y-2 group"
          >
            <div className="w-10 h-10 bg-card rounded-full border border-border flex items-center justify-center group-hover:border-primary transition-all duration-200">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-sm font-medium">GitHub</span>
          </a>
          <a
            href="https://www.facebook.com/share/1CmMsS1W82/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-101 flex flex-col items-center space-y-2 group"
          >
            <div className="w-10 h-10 bg-card rounded-full border border-border flex items-center justify-center group-hover:border-primary transition-all duration-200">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-sm font-medium">Facebook</span>
          </a>
        </div>
      </div>

      <footer className="py-6 border-t border-border text-center">
        <p className="text-sm text-muted-foreground font-mono">
          2025 • built with care
        </p>
      </footer>
    </section>
  );
}
