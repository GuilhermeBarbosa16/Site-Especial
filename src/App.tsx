import { Heart } from "lucide-react";
import ImageSlider from "./components/ImageSlider";
import LoveCounter from "./components/LoveCounter";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-purple-500 flex items-center justify-center px-4 overflow-y-auto md:overflow-auto">
      {/* Conteúdo */}
      <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 py-8 md:py-0">
        <div className="flex justify-center">
          <MusicPlayer />
        </div>
        
        {/* Container do slider - removi overflow-hidden aqui */}
        <div className="w-full max-w-[280px] md:max-w-[400px] lg:max-w-[500px] h-auto rounded-xl shadow-xl">
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