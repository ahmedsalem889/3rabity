import { authorizedHeaders, baseURL } from "../consts";

const carsBaseURL = `${baseURL}/cars`


export const carsApi = {
    getAll: async () => {
        const response = await fetch(carsBaseURL, {
            headers: authorizedHeaders
        })

        return response.json();
    }
}