import { apiClient } from "../../lib/api-client";
import type { ContactDTO } from "./contact.dto";

export const contactApi = {
    createContact: async (data: ContactDTO) => {
        return apiClient.post('/contacts', data);
    }
}