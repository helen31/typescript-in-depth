// eslint-disable-next-line no-redeclare

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (customer: string, bookTitle: string) => void;
}

// =========================================================

export enum Category {
    JavaScript,
    HTML,
    CSS,
    TypeScript,
    Angular,
}

export type Book = {
    id: number;
    title: string;
    category: Category;
    author: string;
    available: boolean;
    markDamaged?: () => void;
};

type BookProperties = keyof Book;

function getAllBooks(): Book[] {
    return [
        {
            id: 1,
            title: 'Refactoring JavaScript',
            category: Category.JavaScript,
            author: 'Evan Burchard',
            available: true,
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

export function logFirstAvailable(books: Book[]): void {
    console.log(`Books length: ${books.length}`);
    console.log(`First Book available: ${books.find(book => book.available)?.title}`);
}

export function getBookTitlesByCategory(category: Category): Array<string> {
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
    const bookLibraries = [
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
    ];

    bookLibraries.forEach(library => (totalPages += BigInt(library.books) * BigInt(library.avgPagesPerBook)));

    return totalPages;
}

// task 03.01

function getTitles(author: string): string[];
// eslint-disable-next-line no-redeclare
function getTitles(available: boolean): string[];
// eslint-disable-next-line no-redeclare
function getTitles(id: number, available: boolean): string[];
// eslint-disable-next-line no-redeclare
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

function getProperty(book: Book, prop: BookProperties): any {
    const value = book[prop];

    return typeof value === 'function' ? value.name : value;
}

// ====================================================================

// task 02.01
// logFirstAvailable(getAllBooks());

// task 02.06
const category = Category.JavaScript;
const booksTitlesByCategory = getBookTitlesByCategory(category);
/* console.log(
    `Books titles by ${Category[category]} category: ${booksTitlesByCategory.length ? booksTitlesByCategory : 0}`,
); */

// task 02.07
logBookTitles(booksTitlesByCategory);

// task 02.08
const index = 0;
const bookAuthor = getBookAuthorByIndex(index);
console.log(`Book author by index ${index}: `, bookAuthor);

// task 02.10

// console.log(`Quantity book pages: ${calcTotalPages()}`);

// task 03.01

const result = getTitles('Liang Yuxian Eugene');
console.log(result);

const favoriteAuthor: Author = {
    name: 'Anna',
    email: 'anna@gmail.com',
    numBooksPublished: 2,
};

// task 04.05
console.log(getProperty(getAllBooks()[0], 'title'));
console.log(getProperty(getAllBooks()[0], 'markDamaged'));
// console.log(getProperty(getAllBooks()[0], 'test'));

