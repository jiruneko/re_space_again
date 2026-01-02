"use client";

import { useEffect, useRef, useState } from "react";

const ACTIONS = [
  { label: "こんにちは", value: "こんにちは" },
  { label: "おつかれさま", value: "おつかれさま" },
  { label: "ありがとう", value: "ありがとう" },
  { label: "またね", value: "またね" },
];

export default function Greeting() {
  const [text, setText] = useState<string>("");
  const timerRef = useRef<number | null>(null);

  const send = (msg: string) => {
    setText(msg);

    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setText("");
      timerRef.current = null;
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <>
      {/* 画面中央にふわっと出て消える */}
      {text && (
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white/10 px-6 py-3 text-lg backdrop-blur-md opacity-90">
          {text}
        </div>
      )}

      {/* 左下ボタン */}
      <div className="fixed bottom-6 left-6 flex flex-wrap gap-2">
        {ACTIONS.map((a) => (
          <button key={a.value} onClick={() => send(a.value)} className="btn">
            {a.label}
          </button>
        ))}
      </div>
    </>
  );
}
