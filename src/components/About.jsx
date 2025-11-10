import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-5xl px-4 grid md:grid-cols-2 gap-10 items-center text-white">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Interactive eyes that follow you</h3>
          <p className="text-white/80 leading-relaxed">
            The 3D mini bot keeps an eye on your cursor, creating a playful and immersive feel. Combined with built‑in speech
            synthesis, you can make it read anything you type. Perfect for learning, gaming vibes, and techy fun.
          </p>
        </div>
        <ul className="space-y-3 text-white/80">
          <li>• Cursor‑tracking gaze for instant personality</li>
          <li>• Type‑to‑speech using your device voice pack</li>
          <li>• Smooth gradients and glassy UI</li>
          <li>• Works on desktop and mobile modern browsers</li>
        </ul>
      </div>
    </section>
  );
}
