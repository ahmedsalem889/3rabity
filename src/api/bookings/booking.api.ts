import { authorizedHeaders, baseURL } from "../consts";
import type { createBookingDTO } from "./bookings.dto";

const bookingsBaseURL = `${baseURL}/bookings`

export const bookingApi = {


    createBooking: async (data: createBookingDTO) => {

        fetch(bookingsBaseURL, {
            method: "POST",
            body: JSON.stringify(data),
            headers: authorizedHeaders
        })


    }
}