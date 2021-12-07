import { Brand } from "./brand";
import { Category } from "./category"

export interface UserProduct{
    id: number,
    name: string,
    brandId: number,
    brand: Brand,
    categoryId: number,
    category: Category,
    inStock: number,
    description: string,
    price: number,
    image: string,
}