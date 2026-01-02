"use client";

import { useRef, useState } from "react";

export default function Bgm() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [on, setOn] = useState(false);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (on) {
        audio.pause();
        setOn(false);
      } else {
        await audio.play(); // 自動再生ブロック回避：ユーザー操作で再生
        setOn(true);
      }
    } catch {
      // Safari等で稀に失敗するが、ユーザーがもう一度押せば通ることが多い
      setOn(false);
    }
  };

  return (
    <>
      {/* スクショにある音源を使う */}
      <audio ref={audioRef} src="/audio/GrassFields.mp3" loop />

      <button
        onClick={toggle}
        className="fixed bottom-6 right-6 text-sm opacity-70 hover:opacity-100"
      >
        BGM {on ? "OFF" : "ON"}
      </button>
    </>
  );
}
