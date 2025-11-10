import React from 'react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-20 bg-transparent backdrop-blur supports-[backdrop-filter]:bg-white/5">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400" />
          <h1 className="text-lg font-semibold tracking-tight text-white">Talking Mini Bot</h1>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
          <a href="#talk" className="hover:text-white transition-colors">Talk</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#help" className="hover:text-white transition-colors">Help</a>
        </nav>
      </div>
    </header>
  );
}
