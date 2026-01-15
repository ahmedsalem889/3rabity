import { authorizedHeaders, baseURL } from "../consts";
import type { GetServiceResponseDTO } from "./services.dto";

const servicesBaseURL = `${baseURL}/services`
const dummyServices: GetServiceResponseDTO = {
    "pagination": {
        "page": 1,
        "limit": 10,
        "total": 8,
        "pages": 1
    },
    "services": [
        {
            "id": "12681b00-304c-4281-9ad9-e2f86ef1f7fd",
            "createdAt": "2025-11-15T14:51:14.337Z",
            "name": "serv",
            "description": "Includes up to 5 liters of premium synthetic oil, a new oil filter, and a multi-point vehicle inspection and ...................................",
            "basePrice": 850,
            "isActive": true,
            "estimatedDurationMin": 60,
            "requiredCategoryStatus": "equal",
            "ratesSum": 0,
            "ratesCount": 0,
            "rating": "0.00",
            "image": null,
            "updatedAt": "2025-11-15T14:51:14.337Z"
        },
        {
            "id": "70b2d012-3438-46a5-9eb6-aa2df7395803",
            "createdAt": "2025-10-28T12:32:56.273Z",
            "name": "Accessories",
            "description": "We offer a wide range of accessories such as cameras, seat covers, interior lights, audio systems, and parking sensors. All installations are handled carefully to ensure perfect fit and functionality.",
            "basePrice": 3000,
            "isActive": true,
            "estimatedDurationMin": 180,
            "requiredCategoryStatus": "one_or_more",
            "ratesSum": 4,
            "ratesCount": 1,
            "rating": "4.00",
            "image": null,
            "updatedAt": "2025-11-08T14:20:18.868Z"
        },
        {
            "id": "c47c9d59-943f-46a7-8f47-0a4b7c331109",
            "createdAt": "2025-10-28T12:32:56.273Z",
            "name": "Battery",
            "description": "Our technicians check your battery’s voltage, clean terminals, and test its overall health. If replacement is required, we install a high-quality, warranty-covered battery for dependable performance.",
            "basePrice": 2500,
            "isActive": true,
            "estimatedDurationMin": 40,
            "requiredCategoryStatus": "one_or_more",
            "ratesSum": 0,
            "ratesCount": 0,
            "rating": "0.00",
            "image": null,
            "updatedAt": "2025-10-28T12:32:56.273Z"
        },
        {
            "id": "b1eeedc4-b350-40b1-a1b4-8cc546a5c70c",
            "createdAt": "2025-10-28T12:32:56.273Z",
            "name": "Full Maintenance",
            "description": "Our full maintenance service includes a complete check-up of the engine, oils, brakes, AC, tires, and battery, along with a full electronic diagnosis using advanced tools. It ensures maximum performance, reliability, and safety for your car.",
            "basePrice": 2500,
            "isActive": true,
            "estimatedDurationMin": 300,
            "requiredCategoryStatus": "equal",
            "ratesSum": 0,
            "ratesCount": 0,
            "rating": "0.00",
            "image": null,
            "updatedAt": "2025-10-28T12:32:56.273Z"
        },
        {
            "id": "9ca529de-9494-45e2-86c7-b924b6e1b287",
            "createdAt": "2025-10-28T12:32:56.273Z",
            "name": "Change Oil",
            "description": "We replace your engine oil using high-quality lubricants recommended by your car manufacturer, change the oil filter, and check all fluid levels. This service ensures optimal performance and protection for your engine.",
            "basePrice": 900,
            "isActive": true,
            "estimatedDurationMin": 45,
            "requiredCategoryStatus": "equal",
            "ratesSum": 4,
            "ratesCount": 1,
            "rating": "4.00",
            "image": null,
            "updatedAt": "2025-11-06T11:02:35.213Z"
        },
        {
            "id": "84f06161-8a6f-4138-8644-37e7947fae14",
            "createdAt": "2025-10-28T12:32:56.273Z",
            "name": "Car Spray",
            "description": "Our car spray service includes full or partial painting using premium, color-matched paints. We handle sanding, rust removal, and finishing polish for a factory-new shine and long-lasting protection.",
            "basePrice": 8000,
            "isActive": true,
            "estimatedDurationMin": 2880,
            "requiredCategoryStatus": "equal",
            "ratesSum": 4,
            "ratesCount": 1,
            "rating": "4.00",
            "image": null,
            "updatedAt": "2025-11-06T10:51:03.225Z"
        },
        {
            "id": "d73297af-4dbe-4c17-b6e8-540c5812fe5d",
            "createdAt": "2025-10-28T12:32:56.273Z",
            "name": "Car Wash",
            "description": "We offer a complete car wash that covers exterior cleaning with paint-safe materials, full interior vacuuming and steam cleaning, and polishing of glass and tires — leaving your car looking brand new.",
            "basePrice": 250,
            "isActive": true,
            "estimatedDurationMin": 60,
            "requiredCategoryStatus": "equal",
            "ratesSum": 6,
            "ratesCount": 2,
            "rating": "3.00",
            "image": null,
            "updatedAt": "2025-11-12T13:44:29.044Z"
        },
        {
            "id": "1802c291-7e5d-4822-8a93-aa0a90efe83e",
            "createdAt": "2025-10-28T12:32:56.273Z",
            "name": "Brake",
            "description": "We thoroughly inspect brake pads, discs, and hydraulic systems, clean components, and replace fluids if needed. The service ensures responsive and stable braking under all driving conditions.",
            "basePrice": 1200,
            "isActive": true,
            "estimatedDurationMin": 120,
            "requiredCategoryStatus": "equal",
            "ratesSum": 3,
            "ratesCount": 1,
            "rating": "3.00",
            "image": null,
            "updatedAt": "2025-11-02T18:56:56.270Z"
        }
    ]
}
export const servicesApi = {
    getAllServices: async (): Promise<GetServiceResponseDTO> => {

        try {

            // return Promise.resolve(dummyServices);
            const response = await fetch(servicesBaseURL, {
                headers: authorizedHeaders
            })

            return await response.json()
        } catch (e) {
            console.log(e);
            return {
                services: [],
                pagination: {
                    limit: 0,
                    page: 0,
                    pages: 0,
                    total: 0
                }
            }
        }
    }
}