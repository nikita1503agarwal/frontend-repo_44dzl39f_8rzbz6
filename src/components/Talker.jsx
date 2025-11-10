import React, { useEffect, useRef, useState } from 'react';
import { Mic, Square, Volume2 } from 'lucide-react';

function getVoicesSafe() {
  if (typeof window === 'undefined') return [];
  return window.speechSynthesis?.getVoices?.() || [];
}

export default function Talker() {
  const [text, setText] = useState('Hello there! I am your mini bot.');
  const [speaking, setSpeaking] = useState(false);
  const [voices, setVoices] = useState([]);
  const utterRef = useRef(null);

  // Load voices across browsers
  useEffect(() => {
    const load = () => setVoices(getVoicesSafe());
    load();
    if (typeof window !== 'undefined') {
      window.speechSynthesis?.addEventListener?.('voiceschanged', load);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.speechSynthesis?.removeEventListener?.('voiceschanged', load);
      }
    };
  }, []);

  const speak = () => {
    if (!text.trim()) return;
    const synth = window.speechSynthesis;
    if (!synth) return;
    if (synth.speaking) synth.cancel();

    const utter = new SpeechSynthesisUtterance(text);
    utterRef.current = utter;
    // Pick a friendly voice if available
    const preferred = voices.find(v => /en-US|en-GB/i.test(v.lang)) || voices[0];
    if (preferred) utter.voice = preferred;
    utter.rate = 1.0;
    utter.pitch = 1.1;
    utter.onend = () => setSpeaking(false);
    utter.onerror = () => setSpeaking(false);

    setSpeaking(true);
    synth.speak(utter);
  };

  const stop = () => {
    const synth = window.speechSynthesis;
    if (!synth) return;
    synth.cancel();
    setSpeaking(false);
  };

  return (
    <section id="talk" className="relative py-12">
      <div className="mx-auto max-w-3xl px-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-white">
          <h3 className="text-xl font-semibold mb-2">Make the bot talk</h3>
          <p className="text-white/70 mb-4">Type a message and press Speak. On supported devices, hold the mouse button in the 3D scene to make him react.</p>

          <div className="flex flex-col md:flex-row gap-3">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="flex-1 rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Say something nice..."
            />
            <div className="flex gap-2">
              {!speaking ? (
                <button onClick={speak} className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 px-4 py-3 font-medium">
                  <Volume2 className="h-5 w-5" />
                  Speak
                </button>
              ) : (
                <button onClick={stop} className="inline-flex items-center gap-2 rounded-lg bg-rose-500 hover:bg-rose-600 px-4 py-3 font-medium">
                  <Square className="h-5 w-5" />
                  Stop
                </button>
              )}
            </div>
          </div>

          {voices.length === 0 && (
            <p className="mt-3 text-xs text-white/60">Tip: Your browser may restrict speech until you interact with the page.</p>
          )}
        </div>
      </div>
    </section>
  );
}
