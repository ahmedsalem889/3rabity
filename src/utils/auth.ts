import { authApi } from "../api/auth/auth.api"
import { removeAccessToken, removeAuthUser } from "./localstorage"

export const handleLogout = async () => {
    await authApi.logout()
    removeAccessToken()
    removeAuthUser()
    window.location.reload()
}