import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vZX5NNlylxke-6DM/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Top gradient overlay for aesthetics, doesn't block interaction */}
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-64 bg-gradient-to-b from-[#06070c] to-transparent opacity-80" />
      <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-64 bg-gradient-to-t from-[#06070c] to-transparent opacity-90" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-24 pb-10 grid md:grid-cols-2 items-center gap-8">
        <div className="text-white space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">Say hi to your playful Talking Mini Bot</h2>
          <p className="text-white/80 md:text-lg">He watches your cursor with curious eyes. Click and hold to make him talk, or type a phrase and he will speak it out loud.</p>
          <a href="#talk" className="inline-flex items-center rounded-lg bg-indigo-500/90 hover:bg-indigo-500 text-white px-5 py-3 font-medium transition-colors">Start Talking</a>
        </div>
      </div>
    </section>
  );
}
