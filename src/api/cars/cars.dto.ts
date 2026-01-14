import type { CarType } from "../carTypes/carTypes.dto";

export type Car = {
    user: {
        id: string;
    },
    type: CarType,
    carTypeId: string,
    model: string,
    year: number,
    engineType: string,
    color: string,
    id: string,
    createdAt: string,
}
export type getAllCarsDTO = {
    cars: Car[]
}