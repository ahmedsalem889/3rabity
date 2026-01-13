import { baseURL } from "../consts"
import type { LoginDTO, LoginReturnDTO, RegisterDTO } from "./auth.dto";

export const authApi = {

    register: async (data: RegisterDTO) => {

        const response = await fetch(`${baseURL}/auth/register`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const result = await response.json()

        return result;
    },

    login: async (data: LoginDTO): Promise<LoginReturnDTO> => {

        const response = await fetch(`${baseURL}/auth/login`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const result = await response.json();

        return result as LoginReturnDTO;
    }

}