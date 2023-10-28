import { loading } from "../stories/coffee.store";
import { INTERVAL } from "../constants";

export class Interval {
    interval: NodeJS.Timeout | null = null;
    invokedFunc: () => void;
    intervalValue: number = INTERVAL;
    loading: boolean = false;

    constructor(func: () => void, intervalValue?: number) {
        this.invokedFunc = func;
        if (intervalValue) {
            this.intervalValue = intervalValue;
        }

        loading.subscribe((value) => {
            this.loading = value;
        });
    }

    createInterval = () => {
        this.interval = setInterval(() => {
            if (!loading) {
                this.invokedFunc();
            }
        }, this.intervalValue)
    }

    clearInterval = () => {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    recreateInterval = () => {
        this.clearInterval();
        this.createInterval();
    }
}