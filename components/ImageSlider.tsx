'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'react-medium-image-zoom/dist/styles.css';
import Zoom from 'react-medium-image-zoom';

interface ImageSliderProps {
  images: string[];
  alt?: string;
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ images, alt = 'Product image' }) => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        speed={800}
        modules={[Autoplay, Pagination]}
        className="rounded-md overflow-hidden image-slider"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="slider-image-wrapper">
            <Zoom>
              <img
                src={src}
                alt={`${alt} ${index + 1}`}
                className="slider-image"
              />
            </Zoom>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
