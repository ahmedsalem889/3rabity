export const baseURL = import.meta.env.VITE_BASE_URL
export const accessToken = localStorage.getItem("accessToken")


export const authorizedHeaders = {
    Authorization: `Barear ${accessToken}`,
    "Content-Type": "application/json",
}