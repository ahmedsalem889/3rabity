import { apiClient } from "../../lib/api-client";
import type { LoginDTO, LoginResponseDTO, RegisterDTO, RegisterResponseDTO } from "./auth.dto";

export const authApi = {

    register: async (data: RegisterDTO): Promise<RegisterResponseDTO> => {
        return apiClient.post('/auth/register', data);
    },

    login: async (data: LoginDTO): Promise<LoginResponseDTO> => {
        return apiClient.post('/auth/login', data);
    },

    logout: async () => {
        return apiClient.post('/auth/logout');
    }

} 
