import { baseURL, getAuthorizedHeaders } from "../consts";
import type { getAllCarsDTO } from "./cars.dto";

const carsBaseURL = `${baseURL}/cars`

export const carsApi = {
    getAllUserCars: async (): Promise<getAllCarsDTO> => {

        const response = await fetch(carsBaseURL, {
            headers: getAuthorizedHeaders()
        })

        if (response.ok) return await response.json()

        throw new Error("Failed to fetch cars")
    }
}