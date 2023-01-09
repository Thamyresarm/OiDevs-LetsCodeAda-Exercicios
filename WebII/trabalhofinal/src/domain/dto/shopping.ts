import { ProductDto } from "./products"

export interface ShoppingDto{
    idUser: string
    payment: string
    items: ProductDto[]
}