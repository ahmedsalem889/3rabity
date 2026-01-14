import type { Pagination } from "../consts"

export type Service = {
    id: string,
    createdAt: string,
    name: string,
    description: string,
    basePrice: number,
    isActive: boolean,
    estimatedDurationMin: number,
    requiredCategoryStatus: string,
    ratesSum: number,
    ratesCount: number,
    rating: string,
    image: null | string,
    updatedAt: string
}

export type GetServiceResponseDTO = {
    pagination: Pagination
    services: Service[]
}