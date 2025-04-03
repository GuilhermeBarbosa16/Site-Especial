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
  const swiperRef = useRef(null);
  const swiperModalRef = useRef(null);

  return (
    <div className="image-slider-container">
      {/* Slider Principal */}
      <Swiper
        ref={swiperRef}
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
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="swiper-slide-custom">
            <div
              className="slide-container"
              onClick={() => {
                setModalIndex(index);
                setModalOpen(true);
              }}
            >
              <img
                src={img}
                alt={`Foto ${index + 1}`}
                className="slide-image"
              />
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
              ref={swiperModalRef}
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