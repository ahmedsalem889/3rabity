import { baseURL } from "../consts";
import { BookingDTO } from "./booking.dto";

export const bookingAPI = {
    bookCar: async (data: BookingDTO) => {
        const response = await fetch(`${baseURL}/booking`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
        const result = await response.json();

        return result;
    }
}