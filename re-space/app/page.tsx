import Bgm from "@/components/Bgm";
import Greeting from "@/components/Greeting";

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

      {/* 中央コピー */}
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <div className="text-center">
          <div className="text-2xl tracking-wide">Re:Space</div>
          <div className="mt-2 text-sm opacity-70">
            ここでは、何もしなくていい
          </div>
        </div>
      </div>

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
