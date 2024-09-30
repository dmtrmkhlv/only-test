import React, { useEffect, useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "./SwiperSlider.scss";
import { gsap } from "gsap";
import { TimePeriodEvent } from "../../types";

export interface SwiperSliderProps {
  events: TimePeriodEvent[];
}

const SwiperSlider: React.FC<SwiperSliderProps> = ({ events }) => {
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(swiperRef.current, { duration: 1.0, opacity: 0 });
    gsap.to(swiperRef.current, { duration: 1.0, opacity: 1 });
  }, [events]);

  return (
    <Swiper
      ref={swiperRef}
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper: any) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      {events.map((event, index) => (
        <SwiperSlide key={index}>
          <div className="event-year">{event.year}</div>
          <div className="event-content">{event.content}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlider;
