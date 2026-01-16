import { apiClient } from "../../lib/api-client";

export const usersApi = {

    getProfile: async () => {
        return apiClient.get('/users/profile');
    }
}