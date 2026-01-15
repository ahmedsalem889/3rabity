const accessTokenKey = "access-token"
export const setAccessToken = (accessToken: string) => localStorage.setItem(accessTokenKey, accessToken)
export const getAccessToken = () => localStorage.getItem(accessTokenKey)
export const removeAccessToken = () => localStorage.removeItem(accessTokenKey)
