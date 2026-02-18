import gameHtml from "@/games/index.html?raw";

export default function Games() {
  return (
    <div className="w-full">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-slate-900">Games</h1>
        <p className="text-sm text-slate-600">Play a quick learning game.</p>
      </div>

      <iframe
        title="Wild West Math Duel"
        className="w-full h-[calc(100vh-14rem)] rounded-xl border bg-white"
        sandbox="allow-scripts allow-same-origin"
        srcDoc={gameHtml}
      />
    </div>
  );
}

