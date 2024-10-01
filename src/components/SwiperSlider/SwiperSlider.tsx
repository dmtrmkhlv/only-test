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
  const navigationPrevRef = useRef<HTMLDivElement>(null);
  const navigationNextRef = useRef<HTMLDivElement>(null);
  const swiperWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.75 });
    tl.from(swiperWrapperRef.current, { opacity: 0 });
    tl.to(swiperWrapperRef.current, { duration: 1.0, opacity: 1 }); // Add a 1-second delay
  }, [events]);

  const buttonsCustomShow = (
    navigationPrevRef: React.RefObject<HTMLDivElement>,
    navigationNextRef: React.RefObject<HTMLDivElement>,
    swiperRef: React.RefObject<SwiperRef>
  ) => {
    if (swiperRef.current) {
      const swiperContainer = swiperRef.current.swiper.el;

      const navigationPrev = swiperContainer.querySelector(
        ".swiper-button-prev"
      );
      const navigationNext = swiperContainer.querySelector(
        ".swiper-button-next"
      );

      navigationPrev.classList.contains("swiper-button-disabled")
        ? navigationPrevRef.current?.classList.add("swiper-button-disabled")
        : navigationPrevRef.current?.classList.remove("swiper-button-disabled");
      navigationNext.classList.contains("swiper-button-disabled")
        ? navigationNextRef.current?.classList.add("swiper-button-disabled")
        : navigationNextRef.current?.classList.remove("swiper-button-disabled");
    }
  };

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;

      buttonsCustomShow(navigationPrevRef, navigationNextRef, swiperRef);

      navigationPrevRef.current?.addEventListener("click", () => {
        swiper.slidePrev();
        buttonsCustomShow(navigationPrevRef, navigationNextRef, swiperRef);
      });
      navigationNextRef.current?.addEventListener("click", () => {
        swiper.slideNext();
        buttonsCustomShow(navigationPrevRef, navigationNextRef, swiperRef);
      });
    }
  }, [events]);

  return (
    <div ref={swiperWrapperRef} className="swiper-wrapper-custom">
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3.5}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => {
          buttonsCustomShow(navigationPrevRef, navigationNextRef, swiperRef);
        }}
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <div className="event-year">{event.year}</div>
            <div className="event-content">{event.content}</div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-navigation">
        <div ref={navigationPrevRef} className="swiper-button-prev"></div>
        <div ref={navigationNextRef} className="swiper-button-next"></div>
      </div>
    </div>
  );
};

export default SwiperSlider;
