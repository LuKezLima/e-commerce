export type Product = {
    id: number,
    brand: string,
    name: string,
    description:string,
    price:number,
    discount?:number | undefined,
    images:Images,

}

type Images = {
    imageProduct1: string,
    imageProduct1_thumb: string,
    imageProduct2: string,
    imageProduct2_thumb: string,
    imageProduct3: string,
    imageProduct3_thumb: string,
    imageProduct4: string,
    imageProduct4_thumb: string,
    
}