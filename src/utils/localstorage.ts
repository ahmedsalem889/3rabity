import type { User } from "../api/users/users.dto";

const accessTokenKey = "access-token"
export const setAccessToken = (accessToken: string) => localStorage.setItem(accessTokenKey, accessToken)
export const getAccessToken = () => localStorage.getItem(accessTokenKey)
export const removeAccessToken = () => localStorage.removeItem(accessTokenKey)

const authUserKey = "auth-user";

export const setAuthUser = (user: User) => localStorage.setItem(authUserKey, JSON.stringify(user))
export const getAuthUser = () => {
    const localStorageUser = localStorage.getItem(authUserKey)
    if (localStorageUser) {
        return JSON.parse(localStorageUser) as User
    } else {
        throw new Error("No user found")
    }
}
export const removeAuthUser = () => localStorage.removeItem(authUserKey)