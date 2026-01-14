import { authorizedHeaders, baseURL } from "../consts";

const carTypesBaseURL = `${baseURL}/car-types`


export const carTypesApi = {

    getAll: async () => {
        const response = await fetch(carTypesBaseURL, {
            headers: authorizedHeaders
        })

        return await response.json()
    }
}