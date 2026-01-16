import { apiClient } from "../../lib/api-client";
import type { GetComponentsDTO } from "../components/components.dto";
import type { GetServiceResponseDTO } from "./services.dto";

export const servicesApi = {
    getAllServices: async (): Promise<GetServiceResponseDTO> => {

        try {
            return await apiClient.get('/services');
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

        const url = `/services/${serviceId}/car-types/${carTypeId}/components`;

        try {
            return await apiClient.get(url);
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