import { baseURL } from "../consts";
import type { LoginDTO, RegisterDTO } from "./auth.dto";


const authBaseURL = `${baseURL}/auth`
export const authAPI = {


    register: async (data: RegisterDTO) => {

        const response = await fetch(`${authBaseURL}/register`, {
            method: "POST",
            body: JSON.stringify(data)
        });
        const result = await response.json()

        return result;
    },

    login: async (data: LoginDTO) => {

        const response = await fetch(`${authBaseURL}/login`, {
            method: "POST",
            body: JSON.stringify(data)
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
