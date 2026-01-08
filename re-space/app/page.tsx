import Bgm from "../components/Bgm";
import Greeting from "../components/Greeting";

export default function Home() {
  return (
    <main className="relative w-screen h-screen overflow-hidden text-gray-800">
      {/* 背景画像 */}
      <div
        className="absolute inset-0 bg-repeat opacity-90"
        style={{
          backgroundImage: "url('/images/background.jpg')",
          backgroundSize: "240px 240px",
        }}
      />

      {/* 白ベール（目に優しくするため） */}
      <div className="absolute inset-0 bg-white/70" />

      {/* 右上リンク */}
      <div className="absolute top-4 right-4 z-30 flex gap-4 text-sm">
        <a
          href="https://reversi-lake.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-70 hover:opacity-100 transition"
        >
          オセロ
        </a>
        <a
          href="https://algorithm-amber.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-70 hover:opacity-100 transition"
        >
          飛車角逆将棋
        </a>
        <a
          href="https://go-two-weld.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-70 hover:opacity-100 transition"
        >
          囲碁
        </a>
      </div>

      {/* 中央コピー */}
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <div className="text-center">
          <div className="text-2xl tracking-wide">Re:Space</div>
          <div className="mt-2 text-sm opacity-70">
            ここでは、何もしなくていい
          </div>
        </div>
      </div>

      {/* 背景ドリフト */}
      <div
        className="absolute inset-0 bg-repeat opacity-90 bg-drift"
        style={{
          backgroundImage: "url('/images/background.jpg')",
          backgroundSize: "240px 240px",
        }}
      />

      {/* UI */}
      <div className="relative z-20">
        <Bgm />
        <Greeting />
      </div>
    </main>
  );
}
