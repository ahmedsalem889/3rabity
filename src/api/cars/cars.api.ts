import { authorizedHeaders, baseURL } from "../consts";
import type { getAllCarsDTO } from "./cars.dto";

const carsBaseURL = `${baseURL}/cars`

export const carsApi = {
    getAll: async (): Promise<getAllCarsDTO> => {
        const response = await fetch(carsBaseURL, {
            headers: authorizedHeaders
        })

        return response.json();
    }
}