import type { User } from "../api/users/users.dto";

const accessTokenKey = "access-token"
export const setAccessToken = (accessToken: string) => localStorage.setItem(accessTokenKey, accessToken)
export const getAccessToken = () => localStorage.getItem(accessTokenKey)
export const removeAccessToken = () => localStorage.removeItem(accessTokenKey)

const authUserKey = "auth-user";

export const setAuthUser = (user: User) => localStorage.setItem(authUserKey, JSON.stringify(user))
export const getAuthUser = (): User | null => {
    const localStorageUser = localStorage.getItem(authUserKey)
    if (localStorageUser) {
        try {
            return JSON.parse(localStorageUser) as User
        } catch (error) {
            console.error("Failed to parse user from local storage", error)
            return null
        }
    }
    return null
}
export const removeAuthUser = () => localStorage.removeItem(authUserKey)