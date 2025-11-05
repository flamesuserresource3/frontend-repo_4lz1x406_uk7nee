import { useState } from 'react';
import { Rocket, User } from 'lucide-react';

export default function Navbar({ onOpenAuth }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/60 border-b border-black/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-blue-600 to-orange-500 grid place-items-center text-white">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-tight">anoofx labs</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#products" className="text-gray-700 hover:text-gray-900">Products</a>
            <a href="#pricing" className="text-gray-700 hover:text-gray-900">Pricing</a>
            <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button onClick={() => onOpenAuth('sign-in')} className="inline-flex items-center gap-2 rounded-md border border-black/10 px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50">
              <User className="h-4 w-4" /> Sign in
            </button>
            <button onClick={() => onOpenAuth('sign-up')} className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-3.5 py-2 text-sm font-medium text-white shadow-sm hover:bg-black">
              Get Started
            </button>
          </div>

          <button onClick={() => setMenuOpen((v) => !v)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100">
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#products" className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100">Products</a>
            <a href="#pricing" className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100">Pricing</a>
            <a href="#about" className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100">About</a>
            <div className="flex gap-2 px-3 pt-2">
              <button onClick={() => onOpenAuth('sign-in')} className="flex-1 rounded-md border border-black/10 px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50">Sign in</button>
              <button onClick={() => onOpenAuth('sign-up')} className="flex-1 rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-black">Get Started</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
