import type { User } from "../users/users.dto";

export type Booking = {
    id: string;
    user: User
    carId: string;
    serviceId: string;
    scheduledDate: string;
    notes: string;
}

export type createBookingDTO = Omit<Booking, "id" | "user">;