import { authorizedHeaders, baseURL } from "../consts";

const usersBaseURL = `${baseURL}/users`

export const usersApi = {

    getProfile: async () => {
        const response = await fetch(`${usersBaseURL}/profile`, {
            method: "GET",
            headers: authorizedHeaders
        })

        return await response.json()
    }
}