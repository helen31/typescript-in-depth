/* eslint-disable */
import { Book, TOptions } from './interfaces';
import { Category } from './enums';
import { BookOrUndefined, BookProperties } from './types';
import RefBook from './encyclopedia';

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

function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
    console.log(`Books length: ${books.length}`);
    console.log(`First Book available: ${books.find(book => book.available)?.title}`);
}

function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
    return getAllBooks()
        .filter(book => book.category === category)
        .map(({ title }) => title);
}

function logBookTitles(booktitles: string[]): void {
    booktitles.forEach(title => console.log(`Book title: ${title}`));
}

function getBookAuthorByIndex(index: number): [title?: string, author?: string] {
    const book = getAllBooks()[index];

    if (book) {
        return [book.title, book.author];
    }

    return [];
}

function calcTotalPages(): BigInt {
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

function createCustomerID(name: string, id: number): string {
    return `${id} - ${name}`;
}

function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);

    if (age) {
        console.log(`Customer age: ${age}`);
    }

    if (city) {
        console.log(`Customer city: ${city}`);
    }
}

function getBookByID(id: Book['id']): BookOrUndefined {
    return getAllBooks().find(book => book.id === id);
}

function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Customer ${customer}`);

    return bookIDs
        .map(id => getBookByID(id))
        .filter(book => book.available)
        .map(book => book.title);
}

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

function assertStringValue(val: any): asserts val is string {
    if (typeof val !== 'string') {
        throw new Error('value should have been a string');
    }
}

function bookTitleTransform(title: any): string | never {
    assertStringValue(title);

    return title.split('').reverse().join('');
}

function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

function setDefaultConfig(options: TOptions): TOptions {
    return {
        duration: options.duration ?? 55,
        speed: options.speed ?? 100,
    };
}

function assertRefBookInstance(condition: any): asserts condition {
    if (!condition) {
        throw new Error('It is not an instance of RefBook');
    }
}

function printRefBook(data: any): void {
    assertRefBookInstance(data instanceof RefBook);

    data.printItem();
}

export {
    getAllBooks,
    logFirstAvailable,
    getBookTitlesByCategory,
    logBookTitles,
    getBookAuthorByIndex,
    calcTotalPages,
    getProperty,
    createCustomerID,
    createCustomer,
    getBookByID,
    сheckoutBooks,
    getTitles,
    assertStringValue,
    bookTitleTransform,
    printBook,
    setDefaultConfig,
    printRefBook,
};
