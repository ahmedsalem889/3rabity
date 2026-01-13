import { baseURL } from "../consts"
import type { LoginDTO, RegisterDTO } from "./auth.dto";


export const register = async (data: RegisterDTO) => {

    const response = await fetch(`${baseURL}/register`, {
        method: "POST",
        body: JSON.stringify(data)
    });
    const result = await response.json()

    return result;
}

export const login = async (data: LoginDTO) => {

    const response = await fetch(`${baseURL}/login`, {
        method: "POST",
        body: JSON.stringify(data)
    })
    const result = await response.json();

    return result;
}