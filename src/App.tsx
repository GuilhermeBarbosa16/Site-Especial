import { Heart } from "lucide-react";
import ImageSlider from "./components/ImageSlider";
import LoveCounter from "./components/LoveCounter";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  return (
    <div className="h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-purple-500 flex items-center justify-center px-4 overflow-hidden md:overflow-auto">
      {/* Conteúdo */}
      <div className="relative flex flex-col md:flex-row items-center gap-4">
        <div className="flex justify-center">
          <MusicPlayer />
        </div>
        <div className="w-full max-w-[200px] md:max-w-[300px] lg:max-w-[350px] sm:max-w-full h-auto rounded-xl overflow-hidden">
          <ImageSlider />
        </div>
        <div className="flex flex-col items-center">
          <LoveCounter startDate="2024-10-25" />
          <div className="flex items-center justify-center mt-4 text-white">
            <Heart className="w-6 h-6 text-red-500 mr-2 animate-pulse" />
            <p className="text-xl font-semibold text-center">
              Com amor da minha vida
            </p>
            <Heart className="w-6 h-6 text-red-500 ml-2 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
