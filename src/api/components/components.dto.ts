import type { Pagination } from "../consts";

export type Category = {
    id: string;
    createdAt: string;
    name: string;
}

export type Component = {
    id: string;
    createdAt: string;
    name: string;
    description: string;
    price: number,
    estimatedDurationMin: number,
    images: string[],
    isActive: boolean,
    updatedAt: string;
    category: Category
}


export type GetComponentsDTO = {
    pagination: Pagination,
    components: Component[]
} 