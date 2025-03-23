"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import './swiperstyle.css'
import "swiper/css/bundle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import headerimage from "../../../app/appends/header.png";
import books from '../../../app/appends/books.png'
import Link from "next/link";
interface Product {
  name: string;
  description: string;
}
interface SwiperProps {
  products: Product[];
}

export default function SwiperComponent({ products }: SwiperProps) {
  return (
    <div className=" relative overflow-hidden h-screen ">
      <div className="absolute top-0 left-0 w-full h-full  z-0">
        <Image
          src={headerimage}
          alt="Header image"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Custom navigation buttons */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
        <div className={`custom-swiper-button-prev `}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div className={`custom-swiper-button-next `}>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
      <div className=" absolute inset-0 flex  items-center justify-center text-center ">
        <Swiper
          cssMode={true}
          navigation={{
            nextEl: ".custom-swiper-button-next",
            prevEl: ".custom-swiper-button-prev",
          }}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper "
          //   scrollbar={{ draggable: true }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className=" p-10 lg:p-5  flex flex-col  lg:flex-row justify-between items-center gap-5  ">
                <div className=" mx-auto order-2 lg:order-1 text-nexttext">
                <h1 className=" text-4xl md:text-6xl font-semibold text-left mb-3">{product.name}</h1>
                <p className=" text-sm md:text-xl text-nexttext/80 font-medium text-gray-600 max-w-md text-left">{product.description},Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem nisi earum molestiae error sapiente eius libero ex. Dolore earum ipsum cum reiciendis eaque voluptatibus, obcaecati quam vero numquam, fuga doloribus.</p>
                <div className=" my-7 text-left">
                <Link className=" px-3 py-2 rounded-md  border border-3 border-nexttext" href={'#'}>READ MORE <FontAwesomeIcon icon={faArrowRight} /> </Link>
                </div>
                <div className="swiper-pagination"></div>
                </div>
                <div className=" order-1  lg:order-2">
                    <Image src={books} alt='books'/>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
