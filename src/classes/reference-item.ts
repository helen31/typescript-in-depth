/* eslint-disable */
/* eslint-disable-next-line no-underscore-dangle */

abstract class ReferenceItem {
    // title: string;
    // year: number;
    #id: number;
    private _publisher: string;
    static department = 'Management department';

    constructor(id: number, public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem...');

        // this.title = newTitle;
        // this.year = newYear;
        this.#id = id;
    }

    get publisher(): string {
        return this._publisher.toLocaleUpperCase();
    }

    set publisher(newPublisher) {
        this._publisher = newPublisher;
    }

    printItem(): void {
        // console.log(`${this.title} was published in ${this.year}. ${ReferenceItem.department}`);
        console.log(
            `${this.title} was published in ${this.year}. ${Object.getPrototypeOf(this).constructor.department}`,
        );
    }

    getID(): number {
        return this.#id;
    }

    abstract printCitation(): void;
}

export { ReferenceItem };
