import { apiClient } from "../../lib/api-client";
import type { GetComponentsDTO } from "./components.dto";

export const componentsApi = {
    getAll: async (): Promise<GetComponentsDTO> => {

        try {
            return await apiClient.get('/components');
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
