import React, { useEffect, useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "./SwiperSlider.scss";
import { gsap } from "gsap";
import { TimePeriodEvent } from "../../types";

export interface SwiperSliderProps {
  events: TimePeriodEvent[];
}

const SwiperSlider: React.FC<SwiperSliderProps> = ({ events }) => {
  const swiperRef = useRef<SwiperRef>(null);

  useEffect(() => {
    gsap.from(swiperRef.current, { duration: 1.0, opacity: 0 });
    gsap.to(swiperRef.current, { duration: 1.0, opacity: 1 });
  }, [events]);

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      const navigationPrev = document.querySelector(".swiper-button-prev");
      const navigationNext = document.querySelector(".swiper-button-next");

      navigationPrev?.addEventListener("click", () => swiper.slidePrev());
      navigationNext?.addEventListener("click", () => swiper.slideNext());
    }
  }, [events]);

  return (
    <>
      <div className="swiper-navigation">
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <div className="event-year">{event.year}</div>
            <div className="event-content">{event.content}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperSlider;
