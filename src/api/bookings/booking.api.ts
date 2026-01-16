import { apiClient } from "../../lib/api-client";
import type { createBookingDTO } from "./bookings.dto";

export const bookingApi = {

    createBooking: async (data: createBookingDTO) => {
        return apiClient.post('/bookings', data);
    }
}