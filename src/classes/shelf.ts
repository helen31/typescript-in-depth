import { ShelfItem } from '../interfaces';
import { RequiredKeys } from '../types';

export default class Shelf<T extends ShelfItem = ShelfItem> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getFirst(): T {
        return this.items[0];
    }

    find(title: string): T {
        return this.items.find(item => item.title === title);
    }

    printItems(): void {
        this.items.forEach(item => console.log(item.title));
    }

    printItemsWithRequiredPops<T>(fields: RequiredKeys<T>[]): void {
        this.items.forEach(item => {
            return Object.keys(item).reduce((accum, key) => {
                if (fields.includes(key as RequiredKeys<T>)) {
                    accum[key] = item[key];
                }
                return accum;
            }, {});
        });
    }
}
