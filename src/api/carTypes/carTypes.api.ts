import { baseURL, getAuthorizedHeaders } from "../consts";

const carTypesBaseURL = `${baseURL}/car-types`


export const carTypesApi = {

    getAll: async () => {
        const response = await fetch(carTypesBaseURL, {
            headers: getAuthorizedHeaders()
        })

        return await response.json()
    }
}