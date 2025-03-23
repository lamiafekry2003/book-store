import { API_PRODUCT } from '@/constants/api';
import { productapiRequest } from '@/constants/productapiRequest';
import React from 'react'

export default async function Newbooks() {
    const result = await productapiRequest(`${API_PRODUCT.allproduct}?page=1&limit=10&search=book1.`);
    const data =result?.data||[]
    console.log(data)
  return (
    <div>Newbooks</div>
  )
}
