"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";

export default function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="border-b border-border">
      <nav className="max-w-[700px] mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold font-mono text-foreground hover:text-muted-foreground transition-colors cursor-pointer">
            dev.dt
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-105"
            >
              home
            </Link>
            <Link
              href="/#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-105"
            >
              about
            </Link>
            <Link
              href="/blog"
              className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-105"
            >
              blog
            </Link>
            <Link
              href="/#repos"
              className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-105"
            >
              repos
            </Link>
            <Link
              href="/#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-105"
            >
              contact
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all duration-200"
              aria-label="Toggle menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border/60 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                onClick={closeMenu}
                className="text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg px-3 py-2 transition-all duration-200"
              >
                home
              </Link>
              <Link
                href="/#about"
                onClick={closeMenu}
                className="text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg px-3 py-2 transition-all duration-200"
              >
                about
              </Link>
              <Link
                href="/blog"
                onClick={closeMenu}
                className="text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg px-3 py-2 transition-all duration-200"
              >
                blog
              </Link>
              <Link
                href="/#repos"
                onClick={closeMenu}
                className="text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg px-3 py-2 transition-all duration-200"
              >
                repos
              </Link>
              <Link
                href="/#contact"
                onClick={closeMenu}
                className="text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg px-3 py-2 transition-all duration-200"
              >
                contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
