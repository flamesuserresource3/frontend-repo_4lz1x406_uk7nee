import { useState } from 'react';
import { Rocket, User, Moon, Sun } from 'lucide-react';

export default function Navbar({ onOpenAuth, darkMode, onToggleDark }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/60 dark:bg-neutral-900/60 border-b border-black/5 dark:border-white/10">
      <nav className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
        <div className="flex h-14 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-gradient-to-tr from-blue-600 to-orange-500 grid place-items-center text-white">
              <Rocket className="h-4 w-4" />
            </div>
            <span className="font-semibold tracking-tight">anoofx labs</span>
          </a>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#products" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Products</a>
            <a href="#pricing" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Pricing</a>
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</a>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <button onClick={onToggleDark} aria-label="Toggle dark mode" className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10">
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button onClick={() => onOpenAuth('sign-in')} className="inline-flex items-center gap-2 rounded-md border border-black/10 dark:border-white/10 px-3 py-1.5 text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/10">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Sign in</span>
            </button>
            <button onClick={() => onOpenAuth('sign-up')} className="inline-flex items-center gap-2 rounded-md bg-gray-900 dark:bg-white px-3.5 py-1.5 text-sm font-medium text-white dark:text-gray-900 shadow-sm hover:bg-black dark:hover:bg-gray-200">
              Get Started
            </button>
          </div>

          <button onClick={() => setMenuOpen((v) => !v)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10">
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-3 space-y-2">
            <div className="flex items-center gap-2 px-1">
              <button onClick={onToggleDark} aria-label="Toggle dark mode" className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10">
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              <button onClick={() => onOpenAuth('sign-in')} className="flex-1 rounded-md border border-black/10 dark:border-white/10 px-3 py-2 text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/10">Sign in</button>
              <button onClick={() => onOpenAuth('sign-up')} className="flex-1 rounded-md bg-gray-900 dark:bg-white px-3 py-2 text-sm font-medium text-white dark:text-gray-900 hover:bg-black dark:hover:bg-gray-200">Get Started</button>
            </div>
            <a href="#products" className="block rounded-md px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10">Products</a>
            <a href="#pricing" className="block rounded-md px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10">Pricing</a>
            <a href="#about" className="block rounded-md px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10">About</a>
          </div>
        )}
      </nav>
    </header>
  );
}
