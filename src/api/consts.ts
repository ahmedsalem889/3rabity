import { getAccessToken } from "../utils/localstorage"

export const baseURL = import.meta.env.VITE_BASE_URL
export const accessToken = getAccessToken()


export const defaultHeaders = {
    "Content-Type": "application/json",
}

export const authorizedHeaders = {
    ...defaultHeaders,
    Authorization: `Bearer ${accessToken}`,
}

export type Pagination = { page: number, limit: number, total: number, pages: number }