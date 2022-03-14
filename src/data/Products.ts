import {Product} from '../Types/Product'

import imageProduct1 from '../assets/image-product-1.jpg'
import imageProduct1_thumb from '../assets/image-product-1-thumbnail.jpg'
import imageProduct2 from '../assets/image-product-2.jpg'
import imageProduct2_thumb from '../assets/image-product-2.jpg'
import imageProduct3 from '../assets/image-product-3.jpg'
import imageProduct3_thumb from '../assets/image-product-3.jpg'
import imageProduct4 from '../assets/image-product-4.jpg'
import imageProduct4_thumb from '../assets/image-product-4.jpg'

export const Products:Product[] = [
    {
    id: 1, 
    brand:'Sneaker Company',
    name:'Fall Limited Edition Sneakers',
    description:'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer',
    price:250,
    discount: .5,
    images:{
       imageProduct1: imageProduct1 ,
    imageProduct1_thumb: imageProduct1_thumb,
 imageProduct2:  imageProduct2 ,
imageProduct2_thumb: imageProduct2_thumb,
 imageProduct3:imageProduct3 ,
 imageProduct3_thumb: imageProduct3_thumb ,
 imageProduct4: imageProduct4, 
imageProduct4_thumb: imageProduct4_thumb ,
    },
        
    }
]