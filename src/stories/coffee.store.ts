import type { CoffeeBeans } from "../types/coffee";
import { type Writable, writable } from 'svelte/store';
import { CoffeeService } from "../services/coffee.service";

const coffeeList: Writable<CoffeeBeans[]> = writable([]);

const loadingCard: Writable<boolean> = writable(false);
const loadingImage: Writable<boolean> = writable(false);

const loading: Writable<boolean> = writable(false);

const addCard = async () => {
    loadingCard.set(true);
    loadingImage.set(true);
    loading.set(true);

    try {
        coffeeList.update((arr: CoffeeBeans[]) => {
            arr.push({
                id: 0,
                uid: '1',
                blend_name: '',
                origin: '',
                variety: '',
                notes: '',
                intensifier: '',
            });
            return arr;
        })

        const card = await CoffeeService.fetchCard();
        coffeeList.update((arr: CoffeeBeans[]) => {
            arr[arr.length - 1] = card;
            return arr;
        })
        loadingCard.set(false);

        const image = await CoffeeService.fetchImage();
        coffeeList.update((arr: CoffeeBeans[]) => {
            arr[arr.length - 1].image = image;
            return arr;
        })
        loadingImage.set(false);
    } catch (e) {
        // Сделать норм ошибку?
        console.error(e)

        coffeeList.update((arr: CoffeeBeans[]) => {
            arr.pop();
            return arr;
        })

        loadingCard.set(false);
        loadingImage.set(false);
    } finally {
        loading.set(false);
    }
}

export {
    coffeeList,
    addCard,
    loadingCard,
    loadingImage,
    loading,
}