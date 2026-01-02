import { Hero } from "./components/Hero";
import { FounderMessage } from "./components/FounderMessage";
import { Philosophy } from "./components/Philosophy";
import { Transform } from "./components/Transform";
import { EventHighlights } from "./components/EventHighlights";
import { Awakening } from "./components/Awakening";

export default function App() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <div className="snap-start min-h-screen">
        <Hero />
      </div>
      <div className="snap-start min-h-screen">
        <FounderMessage />
      </div>
      <div className="snap-start min-h-screen">
        <Philosophy />
      </div>
      <div className="snap-start min-h-screen">
        <Transform />
      </div>
      <div className="snap-start min-h-screen">
        <EventHighlights />
      </div>
      <div className="snap-start min-h-screen">
        <Awakening />
      </div>
    </div>
  );
}