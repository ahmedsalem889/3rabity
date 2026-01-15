import { authApi } from "../api/auth/auth.api"
import { removeAccessToken } from "./localstorage"

export const handleLogout = async () => {
    await authApi.logout()
    removeAccessToken()
    window.location.reload()
}