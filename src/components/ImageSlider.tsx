import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

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
import Ft13 from '../img/ft13.jpeg';
import Ft14 from '../img/ft14.jpeg';
import Ft15 from '../img/ft15.jpeg';
import Ft16 from '../img/ft16.jpeg';
import Ft17 from '../img/ft17.jpeg';


const images = [Ft1, Ft2, Ft3, Ft4, Ft5, Ft6, Ft7, Ft8, Ft9, Ft10, Ft11, Ft12, Ft13, Ft14, Ft15, Ft16, Ft17];

export default function ImageSlider() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  return (
    <div>
      {/* Main Slider */}
      <Swiper
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="rounded-lg overflow-hidden"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full cursor-pointer flex items-center justify-center"
              // Define a altura para manter 16:9 com base na largura da viewport
              style={{ height: "calc(100vw * 9 / 16)" }}
              onClick={() => {
                setModalIndex(index);
                setModalOpen(true);
              }}
            >
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal para visualização em tela cheia */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="w-full h-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão de fechar */}
            <button
              className="absolute top-4 right-4 text-white text-3xl z-10"
              onClick={() => setModalOpen(false)}
            >
              &times;
            </button>
            <Swiper
              initialSlide={modalIndex}
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              className="w-full h-full"
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="flex items-center justify-center h-full">
                    <img
                      src={img}
                      alt={`Fullscreen Slide ${index + 1}`}
                      className="w-auto h-[80vh] object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
}