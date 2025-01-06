import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import ImageSlider from './components/ImageSlider';
import LoveCounter from './components/LoveCounter';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-purple-500">
      <div className="container mx-auto px-4 py-8">
        {/* Slider Container */}
        <div className="max-w-3xl mx-auto mb-12">
          <ImageSlider />
        </div>
        
        {/* Love Counter Section */}
        <div className="max-w-2xl mx-auto">
          <LoveCounter startDate="2024-10-25" />
          <div className="flex items-center justify-center mt-4 text-white">
            <Heart className="w-6 h-6 text-red-500 mr-2 animate-pulse" />
            <p className="text-xl font-semibold text-center">
              Dias com amor da minha vida
            </p>
            <Heart className="w-6 h-6 text-red-500 ml-2 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;