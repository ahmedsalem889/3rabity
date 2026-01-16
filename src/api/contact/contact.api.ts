import { baseURL, defaultHeaders } from "../consts";
import type { ContactDTO } from "./contact.dto";

const contactBaseURL = `${baseURL}/contacts`

export const contactApi = {
    createContact: async (data: ContactDTO) => {


        const response = await fetch(`${contactBaseURL}`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: defaultHeaders
        });

        if (response.ok) {
            return await response.json()
        }

        throw new Error(await response.json())

    }
}