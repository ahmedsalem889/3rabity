import { apiClient } from "../../lib/api-client";
import type { getAllCarsDTO } from "./cars.dto";

export const carsApi = {
    getAllUserCars: async (): Promise<getAllCarsDTO> => {
        return apiClient.get('/cars');
    }
}