import { Items } from "@prisma/client"
import { Decimal } from "@prisma/client/runtime"
import { ItemsResponse } from "./items"

export interface ShoppingDataResponse{
    id: string
    payment: string
    status: string
    totalValue: Decimal
    idUser: string
    items?: Items[]
}