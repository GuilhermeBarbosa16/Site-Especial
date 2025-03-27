import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Importação das imagens
import Ft1 from '../img/ft1.jpeg';
import Ft2 from '../img/ft2.jpeg';
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
import Ft18 from '../img/ft18.jpeg';
import Ft19 from '../img/ft19.jpeg';
import Ft20 from '../img/ft20.jpeg';
import Ft21 from '../img/ft21.jpeg';
import Ft22 from '../img/ft22.jpeg';
import Ft23 from '../img/ft23.jpeg';
import Ft24 from '../img/ft24.jpeg';
import Ft25 from '../img/ft25.jpeg';
import Ft26 from '../img/ft26.jpeg';
import Ft27 from '../img/ft27.jpeg';
import Ft28 from '../img/ft28.jpeg';

const images = [
  Ft1, Ft2, Ft4, Ft5, Ft6, Ft7, Ft8, Ft9, Ft10,
  Ft11, Ft12, Ft13, Ft14, Ft15, Ft16, Ft17, Ft18, Ft19, Ft20,
  Ft21, Ft22, Ft23, Ft24, Ft25, Ft26, Ft27, Ft28
];

export default function ImageSlider() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  // Ref para o Swiper no modal e no slider principal
  const swiperRef = useRef(null);
  const swiperModalRef = useRef(null);

  return (
    <div className="relative w-full">
      {/* Slider Principal */}
      <Swiper
        ref={swiperRef}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="rounded-lg overflow-hidden"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full flex items-center justify-center cursor-pointer"
              style={{ height: "calc(100vw * 9 / 16)" }}
              onClick={() => {
                setModalIndex(index);
                setModalOpen(true);
              }}
            >
              <div className="w-full h-auto aspect-[16/9] ">
                <img
                  src={img}
                  alt={`Foto ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Setas personalizadas */}
        <div className="swiper-button-prev absolute left-2 top-1/2 transform -translate-y-1/2 p-3 rounded-full cursor-pointer">
          <ChevronLeft className="text-white w-6 h-6" />
        </div>
        <div className="swiper-button-next absolute right-2 top-1/2 transform -translate-y-1/2 p-3 rounded-full cursor-pointer">
          <ChevronRight className="text-white w-6 h-6" />
        </div>
      </Swiper>

      {/* Modal para tela cheia */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setModalOpen(false)}
        >
          <div className="w-full h-full relative" onClick={(e) => e.stopPropagation()}>
            {/* Botão de fechar */}
            <button
              className="absolute top-4 right-4 text-white text-3xl z-10"
              onClick={() => setModalOpen(false)}
            >
              &times;
            </button>

            {/* Slider dentro do modal */}
            <Swiper
              ref={swiperRef}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              className="rounded-lg overflow-hidden"
            >
              {images.map((img, index) => (
             <SwiperSlide key={index} className="flex items-center justify-center">
             <div className="relative w-full h-auto aspect-[4/3] max-w-[600px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[900px]">
               <img
                 src={img}
                 alt={`Foto ${index + 1}`}
                 className="w-full h-full object-contain"
               />
             </div>
           </SwiperSlide>              
              ))}
            </Swiper>

            {/* Setas no modal */}
            <div className="swiper-button-prev-modal absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full cursor-pointer hover:text-gray-300 hover:shadow-lg transition-all">
              <ChevronLeft className="text-white w-8 h-8" />
            </div>
            <div className="swiper-button-next-modal absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full cursor-pointer hover:text-gray-300 hover:shadow-lg transition-all">
              <ChevronRight className="text-white w-8 h-8" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}