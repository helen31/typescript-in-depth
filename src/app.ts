/* eslint-disable */
/* eslint-disable-next-line no-underscore-dangle */

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// =========================================================

export enum Category {
    JavaScript,
    HTML,
    CSS,
    TypeScript,
    Angular,
}

// export type Book = {
//     id: number;
//     title: string;
//     category: Category;
//     author: string;
//     available: boolean;
//     markDamaged?: () => void;
// };

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    // markDamaged?: (reason: string) => void;
    // markDamaged?(reason: string): void;
    markDamaged?: DamageLogger;
}

type BookProperties = keyof Book;

function getAllBooks(): readonly Book[] {
    return <const>[
        {
            id: 1,
            title: 'Refactoring JavaScript',
            category: Category.JavaScript,
            author: 'Evan Burchard',
            available: true,
            markDamaged(reason: string) {
                `Damaged: ${reason}`;
            },
        },
        {
            id: 2,
            title: 'JavaScript Testing',
            category: Category.JavaScript,
            author: 'Liang Yuxian Eugene',
            available: false,
        },
        { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: true },
        {
            id: 4,
            title: 'Mastering JavaScript Object-Oriented Programming',
            category: Category.JavaScript,
            author: 'AndreaChiarelli',
            available: true,
        },
    ];
}

export function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
    console.log(`Books length: ${books.length}`);
    console.log(`First Book available: ${books.find(book => book.available)?.title}`);
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
    return getAllBooks()
        .filter(book => book.category === category)
        .map(({ title }) => title);
}

export function logBookTitles(booktitles: string[]): void {
    booktitles.forEach(title => console.log(`Book title: ${title}`));
}

export function getBookAuthorByIndex(index: number): [title?: string, author?: string] {
    const book = getAllBooks()[index];

    if (book) {
        return [book.title, book.author];
    }

    return [];
}

export function calcTotalPages(): BigInt {
    let totalPages = BigInt(0);
    const bookLibraries = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
    ];

    bookLibraries.forEach(library => (totalPages += BigInt(library.books) * BigInt(library.avgPagesPerBook)));

    return totalPages;
}

function getProperty(book: Book, prop: BookProperties): any {
    const value = book[prop];

    return typeof value === 'function' ? value.name : value;
}

// task 03.01
function createCustomerID(name: string, id: number): string {
    return `${id} - ${name}`;
}

// task 03.02
function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);

    if (age) {
        console.log(`Customer age: ${age}`);
    }

    if (city) {
        console.log(`Customer city: ${city}`);
    }
}

function getBookByID(id: Book['id']): Book | undefined {
    return getAllBooks().find(book => book.id === id);
}

function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Customer ${customer}`);

    return bookIDs
        .map(id => getBookByID(id))
        .filter(book => book.available)
        .map(book => book.title);
}

// task 03.03

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, available: boolean): string[];
function getTitles(...args: any[]): string[] {
    const books = getAllBooks();

    if (args.length === 1) {
        const [arg] = args;

        if (typeof arg === 'string') {
            return books.filter(({ author }) => author === arg).map(({ title }) => title);
        } else if (typeof arg === 'boolean') {
            return books.filter(({ available }) => available === arg).map(({ title }) => title);
        }
    } else if (args.length === 2) {
        const [idArg, availableArg] = args;
        if (typeof idArg === 'number' && typeof availableArg === 'boolean') {
            return books
                .filter(({ available, id }) => available === availableArg && id === idArg)
                .map(({ title }) => title);
        }
    }

    return [];
}

// task 03.04. Assertion Functions

function assertStringValue(val: any): asserts val is string {
    if (typeof val !== 'string') {
        throw new Error('value should have been a string');
    }
}

function bookTitleTransform(title: any): string | never {
    assertStringValue(title);

    return title.split('').reverse().join('');
}

// task 04.01 Defining an Interface

function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

interface DamageLogger {
    (reason: string): void;
}

// task 04.03 Extending Interface
const id = Symbol('id');

interface Person {
    [id]: number;
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer(custName: string, bookTitle: string): void;
}

// task 05.01. Creating and Using Classes
class ReferenceItem {
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
}

class Encyclopedia extends ReferenceItem {
    constructor(id: number, title: string, year: number, public edition: number) {
        super(id, title, year);
    }

    override printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} - ${this.year}`);
    }
}

// ====================================================================

// task 02.01
// logFirstAvailable(getAllBooks());

// task 02.06
// const category = Category.JavaScript;
// const booksTitlesByCategory = getBookTitlesByCategory(category);
/* console.log(
    `Books titles by ${Category[category]} category: ${booksTitlesByCategory.length ? booksTitlesByCategory : 0}`,
); */

// task 02.07
// logBookTitles(booksTitlesByCategory);

// task 02.08
// const index = 0;
// const bookAuthor = getBookAuthorByIndex(index);
// console.log(`Book author by index ${index}: `, bookAuthor);

// task 02.10

// console.log(`Total book pages: ${calcTotalPages()}`);

// task 03.01
// const myID: string = createCustomerID('Ann', 10);
// console.log(myID);
// let idGenerator: (name: string, id: number) => string;
// idGenerator = (name: string, id: number) => `${id} - ${name}`;
// idGenerator = createCustomerID;
// console.log(idGenerator('Boris', 20));
// type b = typeof createCustomerID;

// task 03.02
// console.log(createCustomer('Boris'));
// console.log(createCustomer('Helen', 37));
// console.log(createCustomer('Olga', 18, 'Krakow'));
// console.log(getBookTitlesByCategory());
// console.log(logFirstAvailable());
// console.log(getBookByID(1));
// const myBooks = сheckoutBooks('Ann', 1, 2, 4);
// console.log(`Available books title: ${myBooks}`);

// task 03.03
// const checkedOutBooks = getTitles(false);
// console.log(checkedOutBooks);

// task 03.04. Assertion Functions
// console.log(bookTitleTransform('Privet'));
// console.log(bookTitleTransform(10));

// task 04.01 Defining an Interface
const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    // year: 2015,
    // copies: 3,
    pages: 200,
    markDamaged: reason => console.log(`Damaged: ${reason}`),
};
// printBook(myBook);
// myBook.markDamaged('missing back cover');

// task 04.02
// const logDamage: DamageLogger = reason => console.log(`Damaged: ${reason}`);
// logDamage('There no 10 pages in the book.');

// task 04.03 Extending Interface

const favoriteAuthor: Author = {
    [id]: 0,
    name: 'Anna',
    email: 'anna@gmail.com',
    numBooksPublished: 2,
};

const favoriteLibrarian: Librarian = {
    [id]: 1,
    name: 'Robert',
    email: 'robert@gmail.com',
    department: 'marketing',
    assistCustomer(custName: string, bookTitle: string) {
        console.log(`Customer name: ${custName}, book totle: ${bookTitle}`);
    },
};

// task 04.04. Optional Chaining
const offer: any = {
    book: {
        title: 'Essential TypeScript',
    },
};
// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);

// task 04.05  Keyof Operator
// console.log(getProperty(getAllBooks()[0], 'title'));
// console.log(getProperty(getAllBooks()[0], 'markDamaged'));
// console.log(getProperty(getAllBooks()[0], 'test'));

// task 05.01. Creating and Using Classes
// const ref = new ReferenceItem(2, 'Learn TypeScript', 2022);
// ref.printItem();
// ref.publisher = 'abc';
// console.log(ref);
// console.log(ref.getID());
// console.log(ref.printItem());

// task 05.02. Extending Classes
const refBook = new Encyclopedia(2, 'TS in Depth', 2022, 3);
console.log(refBook);
console.log(refBook.printItem());
