
// import React from 'react'
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css/bundle'
// import { productapiRequest } from '@/constants/productapiRequest';
// import { API_PRODUCT } from '@/constants/api';

// export default async function Header() {
//   const result = await productapiRequest(`${API_PRODUCT.allproduct}?page=1&limit=10&search=book1.`) 
//   console.log(result.data)

//   return (
//     <Swiper
//       // install Swiper modules
//       modules={[Navigation, Pagination, Scrollbar, A11y]}
//       spaceBetween={50}
//       slidesPerView={1}
//       navigation
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
      
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
      
//       ...
//     </Swiper>
    
//   )
// }
import React from 'react'
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css/bundle'
import { productapiRequest } from '@/constants/productapiRequest';
import { API_PRODUCT } from '@/constants/api';
import SwiperComponent from '../SwiperComponent/SwiperComponent';

export default async function Header() {
  // Fetch product data
  const result = await productapiRequest(`${API_PRODUCT.allproduct}?page=1&limit=10&search=book1.`);
  const data =result?.data?.slice(0,4)||[]
  // console.log(data)

  return (
     
    <>
    <SwiperComponent products={data}/>
    </>
  );
}
