export type CarType = {
    id: string;
    createdAt: string;
    maker: string;
}

export type getAllCarTypesDTO = {
    carTypes: CarType[]
}