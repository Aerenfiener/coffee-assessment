import axios from "axios";
import type { CoffeeBeansResponse } from "../types/api";

export const CoffeeService = {
    fetchCard: async (): Promise<CoffeeBeansResponse> => {
        return await axios.get('https://random-data-api.com/api/coffee/random_coffee')
            .then(response => response.data);
    },

    fetchImage: async (): Promise<string> => {
        return await axios.get('https://loremflickr.com/500/500/coffeebean', { responseType: 'arraybuffer' })
            .then((response) => {
                let image = btoa(
                    new Uint8Array(response.data)
                        .reduce((data, byte) => data + String.fromCharCode(byte), '')
                );
                return `data:${response.headers['content-type'].toLowerCase()};base64,${image}`;
            });
    },
}