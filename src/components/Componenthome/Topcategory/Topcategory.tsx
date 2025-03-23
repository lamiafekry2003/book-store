
import { API_PRODUCT } from '@/constants/api'
import { productapiRequest } from '@/constants/productapiRequest'
import React from 'react'
// import SwiperTopcategory from '../SwiperTopcategory/SwiperTopcategory'

export default async function Topcategory() {
    const result = await productapiRequest(API_PRODUCT.allcategory)
    const data=result?.data||[]
    console.log(data)
    
    
    return(
    <>
    {/* <SwiperTopcategory category={data}/> */}
    </>
  )
}
