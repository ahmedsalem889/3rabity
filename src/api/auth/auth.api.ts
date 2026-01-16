import { baseURL, defaultHeaders } from "../consts";
import type { LoginDTO, LoginResponseDTO, RegisterDTO, RegisterResponseDTO } from "./auth.dto";


const authBaseURL = `${baseURL}/auth`
export const authApi = {


    register: async (data: RegisterDTO): Promise<RegisterResponseDTO> => {

        const response = await fetch(`${authBaseURL}/register`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: defaultHeaders
        });
        const result = await response.json()

        return result;
    },

    login: async (data: LoginDTO): Promise<LoginResponseDTO> => {

        const response = await fetch(`${authBaseURL}/login`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: defaultHeaders
        })
        const result = await response.json();

        return result;
    },

    logout: async () => {
        fetch(`${authBaseURL}/logout`, {
            method: "POST",
        })
    }

} 
