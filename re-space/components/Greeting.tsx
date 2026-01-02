"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";

type FloatItem = {
  id: number;
  text: string;
  color: string;
  x: number;
};

type CSSVarStyle = React.CSSProperties & {
  "--x": string;
};

export default function Greeting() {
  const [items, setItems] = useState<FloatItem[]>([]);
  const timers = useRef<Map<number, number>>(new Map());
  const idSeq = useRef(0);

  const actions = useMemo(
    () => [
      { text: "おはよう", color: "#3B82F6" },
      { text: "こんにちは", color: "#22C55E" },
      { text: "こんばんは", color: "#A855F7" },
      { text: "ありがとう", color: "#F59E0B" },
      { text: "おつかれさま", color: "#EF4444" },
    ],
    []
  );

  const emit = useCallback((text: string, color: string) => {
    const id = ++idSeq.current;

    // 安定した左右オフセット（ランダム禁止）
    const offsets = [-60, -25, 0, 25, 60];
    const x = offsets[id % offsets.length];

    setItems((prev) => [...prev, { id, text, color, x }]);

    const timeoutId = window.setTimeout(() => {
      setItems((prev) => prev.filter((it) => it.id !== id));
      timers.current.delete(id);
    }, 2300);

    timers.current.set(id, timeoutId);
  }, []);

  useEffect(() => {
    const currentTimers = timers.current;

    return () => {
      currentTimers.forEach((t) => window.clearTimeout(t));
      currentTimers.clear();
    };
  }, []);

  return (
    <>
      {/* 浮かぶ文字 */}
      <div className="fixed inset-0 z-30 pointer-events-none">
        {items.map((it) => {
          const style: CSSVarStyle = {
            color: it.color,
            "--x": `${it.x}px`,
          };

          return (
            <div
              key={it.id}
              className="float-message text-3xl sm:text-4xl"
              style={style}
            >
              {it.text}
            </div>
          );
        })}
      </div>

      {/* ボタン */}
      <div className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2">
        <div className="flex flex-wrap justify-center gap-2 rounded-full bg-white/70 px-3 py-2 shadow-sm backdrop-blur">
          {actions.map((a) => (
            <button
              key={a.text}
              type="button"
              onClick={() => emit(a.text, a.color)}
              className="rounded-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-white/70 active:scale-[0.98]"
            >
              {a.text}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
