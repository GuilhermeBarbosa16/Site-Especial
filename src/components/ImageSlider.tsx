import { useState, useEffect } from 'react';
import Ft1 from '../img/ft1.jpeg';
import Ft2 from '../img/ft2.jpeg';
import Ft3 from '../img/ft3.jpeg';
import Ft4 from '../img/ft4.jpeg';
import Ft5 from '../img/ft5.jpeg';
import Ft6 from '../img/ft6.jpeg';
import Ft7 from '../img/ft7.jpeg';
import Ft8 from '../img/ft8.jpeg';
import Ft9 from '../img/ft9.jpeg';
import Ft10 from '../img/ft10.jpeg';
import Ft11 from '../img/ft11.jpeg';
import Ft12 from '../img/ft12.jpeg';

const images = [Ft1, Ft2, Ft3, Ft4, Ft5, Ft6, Ft7, Ft8, Ft9, Ft10, Ft11, Ft12];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden shadow-xl">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute w-full h-full transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;