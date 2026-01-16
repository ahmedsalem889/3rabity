import { baseURL, getAuthorizedHeaders } from "../consts";

const usersBaseURL = `${baseURL}/users`

export const usersApi = {

    getProfile: async () => {
        const response = await fetch(`${usersBaseURL}/profile`, {
            method: "GET",
            headers: getAuthorizedHeaders()
        })

        return await response.json()
    }
}