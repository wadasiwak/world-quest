import { useGameStore } from "./store/gameStore";
import WorldMap from "./components/WorldMap";
import CountryQuiz from "./components/CountryQuiz";
import Codex from "./components/Codex";
import KnowledgePanel from "./components/KnowledgePanel";
import FlashQuiz from "./components/FlashQuiz";
import ShapeGame from "./components/ShapeGame";
import LevelUpOverlay from "./components/LevelUpOverlay";

export default function App() {
  const appState = useGameStore((s) => s.appState);

  // The map stays mounted underneath everything — full-page views and the
  // quiz modal render on top, so returning to the map is instant.
  return (
    <div className="app">
      <WorldMap />
      {appState === "QUIZ" && <CountryQuiz />}
      {appState === "CODEX" && <Codex />}
      {appState === "KNOWLEDGE" && <KnowledgePanel />}
      {appState === "FLASH" && <FlashQuiz />}
      {appState === "SHAPE" && <ShapeGame />}
      <LevelUpOverlay />
    </div>
  );
}
