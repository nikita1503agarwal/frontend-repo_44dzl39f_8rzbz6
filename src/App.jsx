import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Talker from './components/Talker';
import About from './components/About';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#06070c] selection:bg-indigo-500/30 selection:text-white">
      <Navbar />
      <Hero />
      <Talker />
      <About />
      <footer id="help" className="border-t border-white/10 py-8 text-center text-white/60">
        <p>
          Built for fun. If speech doesn’t play immediately, click anywhere on the page and try again.
        </p>
      </footer>
    </div>
  );
}
