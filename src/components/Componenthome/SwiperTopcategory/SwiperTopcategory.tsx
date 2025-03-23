"use client";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import style from "./swiperTopcate.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Mousewheel, Keyboard } from "swiper/modules";

export default function SwiperTopcategory() {
  const [activeButton, setActiveButton] = useState<"prev" | "next">("next");

  const handlePrevClick = () => {
    setActiveButton("prev");
  };

  const handleNextClick = () => {
    setActiveButton("next");
  };
  return (
    <div className="p-10">
      <div className=" grid grid-cols-1 lg:grid-cols-2  ">
        <div className="">
          <p className=" text-sm text-headtext relative font-bold left-8 before:content-[''] before:bg-headtext before:w-6 before:h-1  before:absolute before:left-[-1.8rem] before:right-[1.6rem]  before:top-1/2 before:-translate-y-1/2 ">
            Categories
          </p>
          <h2 className=" text-xl lg:text-3xl text-nexttext font-bold py-3">
            Explore our Top Categories
          </h2>
        </div>
        <div className="flex justify-end items-center gap-5">
          <div
            className={`componentSwiperButtonPrev
              ${activeButton === "prev"
                ? style.componentSwiperButtonNext
                : style.componentSwiperButtonPrev
            }`}
            onClick={handlePrevClick}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <div
            className={`componentSwiperButtonNext
              ${activeButton === "next"
                ? style.componentSwiperButtonNext
                : style.componentSwiperButtonPrev
            }`}
            onClick={handleNextClick}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
      <div>
        <Swiper  cssMode={true}
          navigation={{
            nextEl: ".componentSwiperButtonNext",
            prevEl: ".componentSwiperButtonPrev",
          }}
          pagination={true}
          mousewheel={true}
          slidesPerView={3}
          keyboard={true}
          modules={[Navigation, Mousewheel, Keyboard]}
          className="mySwiper ">
          <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
