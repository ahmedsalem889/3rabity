import type { Component } from "react";
import type { User } from "../users/users.dto";

export type Booking = {
    id: string;
    user: User
    carId: string;
    serviceId: string;
    scheduledDate: string;
    notes: string;
    components: Component[]
}

export type createBookingDTO = Omit<Booking, "id" | "user" | "components"> & {
    components: string[]
}