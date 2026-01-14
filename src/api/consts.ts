import { getAccessToken } from "../utils/localstorage"

export const baseURL = import.meta.env.VITE_BASE_URL
export const accessToken = getAccessToken()


export const authorizedHeaders = {
    Authorization: `Barear ${accessToken}`,
    "Content-Type": "application/json",
}

export type Pagination = { page: number, limit: number, total: number, pages: number }