import { getAccessToken } from "../utils/localstorage"

export const baseURL = import.meta.env.VITE_BASE_URL



export const defaultHeaders = {
    "Content-Type": "application/json",
}

export const getAuthorizedHeaders = () => {
    return {
        ...defaultHeaders,
        Authorization: `Bearer ${getAccessToken()}`,
    }
}

export type Pagination = { page: number, limit: number, total: number, pages: number }