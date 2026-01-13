import { bookingAPI } from "./booking.api";

export type BookingDTO = {
    carId: string;
    startDate: string;
    endDate: string;
}