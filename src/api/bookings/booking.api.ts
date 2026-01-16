import { baseURL, getAuthorizedHeaders } from "../consts";
import type { createBookingDTO } from "./bookings.dto";

const bookingsBaseURL = `${baseURL}/bookings`

export const bookingApi = {


    createBooking: async (data: createBookingDTO) => {

        const response = await fetch(bookingsBaseURL, {
            method: "POST",
            body: JSON.stringify(data),
            headers: getAuthorizedHeaders()
        })

        if (response.ok) return await response.json()

        throw new Error(await response.json())
    }
}