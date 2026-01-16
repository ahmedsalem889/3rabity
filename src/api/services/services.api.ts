import type { GetComponentsDTO } from "../components/components.dto";
import { baseURL, defaultHeaders } from "../consts";
import type { GetServiceResponseDTO } from "./services.dto";

const servicesBaseURL = `${baseURL}/services`
export const servicesApi = {
    getAllServices: async (): Promise<GetServiceResponseDTO> => {

        try {

            // return Promise.resolve(dummyServices);
            const response = await fetch(servicesBaseURL, {
                headers: defaultHeaders
            })

            return await response.json()
        } catch (e) {
            return {
                services: [],
                pagination: {
                    limit: 0,
                    page: 0,
                    pages: 0,
                    total: 0
                }
            }
        }
    },

    getServiceComponentsWithCarType: async ({
        serviceId,
        carTypeId
    }: {
        serviceId: string,
        carTypeId: string
    }): Promise<GetComponentsDTO> => {

        const url = [servicesBaseURL, serviceId, "car-types", carTypeId, 'components'].join('/')

        try {
            const response = await fetch(url, {
                headers: defaultHeaders
            })
            return await response.json()
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