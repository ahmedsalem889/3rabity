import { baseURL } from "../consts";
import type { ContactDTO } from "./contact.dto";

const contactBaseURL = `${baseURL}/contacts`

export const contactApi = {
    createContact: async (data: ContactDTO) => {
        return await (await fetch(`${contactBaseURL}`, {
            method: "POST",
            body: JSON.stringify(data)
        })).json()

    }
}