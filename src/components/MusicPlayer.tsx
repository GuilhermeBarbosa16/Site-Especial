import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import musicFile from "../assets/musica.mp3";

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener("timeupdate", () => setCurrentTime(audio.currentTime));
      audio.addEventListener("loadedmetadata", () => setDuration(audio.duration));
    }
    return () => {
      if (audio) {
        audio.removeEventListener("timeupdate", () => setCurrentTime(audio.currentTime));
        audio.removeEventListener("loadedmetadata", () => setDuration(audio.duration));
      }
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(event.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  return (
    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-8 shadow-lg text-center">
      <p className="text-white font-semibold mb-2">Música: Say You Won't Let Go</p>
      
      <button
        onClick={togglePlay}
        className="bg-pink-500 text-white p-3 rounded-full hover:bg-pink-600 mb-4"
      >
        {isPlaying ? <Pause /> : <Play />}
      </button>
      
      <audio ref={audioRef} src={musicFile} onEnded={() => setIsPlaying(false)} />

      {/* Tempo Atual / Duração Total */}
      <div className="text-white text-sm font-semibold mb-1">
        {formatTime(currentTime)} / {formatTime(duration)}
      </div>

      {/* Barra de progresso */}
      <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={handleSeek}
        className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer mb-4"
      />

      {/* Controle de volume com % */}
      <div className="flex items-center space-x-2">
        {volume > 0 ? <Volume2 className="text-white" /> : <VolumeX className="text-white" />}
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-24 h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
        />
        <span className="text-white text-sm font-semibold">{Math.round(volume * 100)}%</span>
      </div>
    </div>
  );
};

export default MusicPlayer;
