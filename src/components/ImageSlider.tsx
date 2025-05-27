import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
import Ft29 from '../img/ft29.jpeg';
import Ft30 from '../img/ft30.jpeg';
import Ft31 from '../img/ft31.jpeg';
import Ft32 from '../img/ft32.jpeg';
import Ft33 from '../img/ft33.jpeg';
import Ft34 from '../img/ft34.jpeg';
import Ft35 from '../img/ft35.jpeg';
import Ft36 from '../img/ft36.jpeg';
import Ft37 from '../img/ft37.jpeg';
import Ft38 from '../img/ft38.jpeg';
import Ft39 from '../img/ft39.jpeg';

const images = [
  Ft1, Ft2, Ft4, Ft5, Ft6, Ft7, Ft8, Ft9, Ft10,
  Ft11, Ft12, Ft13, Ft14, Ft15, Ft16, Ft17, Ft18, Ft19, Ft20,
  Ft21, Ft22, Ft23, Ft24, Ft25, Ft26, Ft27, Ft28, Ft29, Ft30,
  Ft31, Ft32, Ft33, Ft34, Ft35, Ft36, Ft37, Ft38, Ft39
];

export default function ImageSlider() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const swiperRef = useRef<SwiperType | null>(null);
  const swiperModalRef = useRef<SwiperType | null>(null);

  // Configuração para mobile
  useEffect(() => {
    if (swiperRef.current) {
      // Configurações de touch diretamente na instância
      swiperRef.current.params.touchEventsTarget = 'container';
      swiperRef.current.update();
    }
  }, []);

  return (
    <div className="image-slider-container">
      {/* Slider Principal */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="main-swiper"
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // Configurações de touch corretas
        touchEventsTarget="container"
        allowTouchMove={true}
        noSwiping={false}
        noSwipingClass="swiper-slide"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="slide-container" onClick={() => {
              setModalIndex(index);
              setModalOpen(true);
            }}>
              <img src={img} alt={`Foto ${index + 1}`} className="slide-image" />
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev">
          <ChevronLeft className="nav-icon" />
        </div>
        <div className="swiper-button-next">
          <ChevronRight className="nav-icon" />
        </div>
      </Swiper>

      {/* Modal para tela cheia */}
      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setModalOpen(false)}
            >
              &times;
            </button>

            <Swiper
              onSwiper={(swiper) => {
                swiperModalRef.current = swiper;
              }}
              initialSlide={modalIndex}
              navigation={{
                nextEl: ".swiper-button-next-modal",
                prevEl: ".swiper-button-prev-modal",
              }}
              pagination={{ clickable: true, type: 'fraction' }}
              modules={[Navigation, Pagination]}
              className="modal-swiper"
            >
              {images.map((img, index) => (
                <SwiperSlide key={index} className="modal-slide">
                  <img
                    src={img}
                    alt={`Foto ${index + 1}`}
                    className="modal-image"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="swiper-button-prev-modal">
              <ChevronLeft className="modal-nav-icon" />
            </div>
            <div className="swiper-button-next-modal">
              <ChevronRight className="modal-nav-icon" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}