import { apiClient } from "../../lib/api-client";

export const carTypesApi = {

    getAll: async () => {
        return apiClient.get('/car-types');
    }
}