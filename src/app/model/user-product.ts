import { Byte } from "@angular/compiler/src/util";
import { Brand } from "./brand";
import { Category } from "./category"
import { Picture } from "./picture";

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
    pictures: Picture[],
    images: Byte[],
}