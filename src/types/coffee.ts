import type { CoffeeBeansResponse } from "./api";

export interface CoffeeBeans extends CoffeeBeansResponse {
    id: number,
    uid: string,
    blend_name: string,
    origin: string,
    variety: string,
    notes: string,
    intensifier: string,
    image?: string,
}