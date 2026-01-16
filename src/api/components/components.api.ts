import { baseURL, defaultHeaders } from "../consts";
import type { GetComponentsDTO } from "./components.dto";

const componentsBaseURL = `${baseURL}/components`


export const componentsApi = {
    getAll: async (): Promise<GetComponentsDTO> => {

        try {

            const result = await fetch(componentsBaseURL, {
                method: "GET",
                headers: defaultHeaders
            })
            return await result.json()
        } catch (e) {
            return {
                components: [],
                pagination: {
                    limit: 0,
                    page: 0,
                    pages: 0,
                    total: 0
                }
            }
        }
    }
}
