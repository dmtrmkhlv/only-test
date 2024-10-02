import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "./SwiperSlider.scss";
import { gsap } from "gsap";
import { TimePeriodEvent } from "../../types";

export interface SwiperSliderProps {
  events: TimePeriodEvent[];
  activePeriodName: string;
}

const SwiperSlider: React.FC<SwiperSliderProps> = ({
  events,
  activePeriodName,
}) => {
  const swiperRef = useRef<SwiperRef>(null);
  const navigationPrevRef = useRef<HTMLDivElement>(null);
  const navigationNextRef = useRef<HTMLDivElement>(null);
  const swiperWrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(0, 0);
    }

    let mm = gsap.matchMedia();
    let timeline: gsap.core.Timeline;

    mm.add("(max-width: 960px)", () => {
      timeline = gsap.timeline({ delay: 0.75 });
      timeline.from(swiperWrapperRef.current, { opacity: 0, y: "5%" });
      timeline.to(swiperWrapperRef.current, {
        duration: 1.0,
        opacity: 1,
        y: 0,
      });
    });
    mm.add("(min-width: 961px)", () => {
      timeline = gsap.timeline({ delay: 0.75 });
      timeline.from(swiperWrapperRef.current, { opacity: 0 });
      timeline.to(swiperWrapperRef.current, { duration: 1.0, opacity: 1 });
    });

    return () => {
      if (timeline) {
        timeline.kill();
      }
    };
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

      navigationPrev?.classList.contains("swiper-button-disabled")
        ? navigationPrevRef.current?.classList.add("swiper-button-disabled")
        : navigationPrevRef.current?.classList.remove("swiper-button-disabled");
      navigationNext?.classList.contains("swiper-button-disabled")
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
      <h2 className={`time-period-name mobile`}>{activePeriodName}</h2>
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={50}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
          },
          1920: {
            slidesPerView: 3.5,
          },
        }}
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
