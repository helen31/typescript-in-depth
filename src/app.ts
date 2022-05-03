/* eslint-disable */
/* eslint-disable-next-line no-underscore-dangle */
import { Category } from './enums';
import { logSearchResults } from './functions';
import { RefBook, UL } from './classes';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// task 06.05. Dynamic Import Expression
// const flag = true;
//
// if (flag) {
//     const classesModule = await import('./classes');
//     const reader = new classesModule.Reader();
//     console.log('reader -->>', reader);
// }

// if (flag) {
//     import('./classes').then(module => {
//         const reader = new module.Reader();
//         console.log('reader -->>', reader);
//     }).catch(error => console.log(error))
// }

// =========================================================

// export type Book = {
//     id: number;
//     title: string;
//     category: Category;
//     author: string;
//     available: boolean;
//     markDamaged?: () => void;
// };

// ====================================================================

// task 02.01
// logFirstAvailable(getAllBooks());

// task 02.06
// const category = Category.JavaScript;
// const booksTitlesByCategory = getBookTitlesByCategory(category);
// console.log(
//     `Books titles by ${Category[category]} category: ${booksTitlesByCategory.length ? booksTitlesByCategory : 0}`,
// );

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
// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     // year: 2015,
//     // copies: 3,
//     pages: 200,
//     markDamaged: reason => console.log(`Damaged: ${reason}`),
// };
// printBook(myBook);
// myBook.markDamaged('missing back cover');

// task 04.02
// const logDamage: Logger = reason => console.log(`Damaged: ${reason}`);
// logDamage('There no 10 pages in the book.');

// task 04.03 Extending Interface

// const favoriteAuthor: Author = {
//     [id]: 0,
//     name: 'Anna',
//     email: 'anna@gmail.com',
//     numBooksPublished: 2,
// };

// const favoriteLibrarian: Librarian = {
//     [id]: 1,
//     name: 'Robert',
//     email: 'robert@gmail.com',
//     department: 'marketing',
//     assistCustomer(custName: string, bookTitle: string) {
//         console.log(`Customer name: ${custName}, book totle: ${bookTitle}`);
//     },
// };

// task 04.04. Optional Chaining
// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };
// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);

// task 04.05  Keyof Operator
// console.log(getProperty(getAllBooks()[0], 'title'));
// console.log(getProperty(getAllBooks()[0], 'markDamaged'));
// console.log(getProperty(getAllBooks()[0], 'test'));

// task 05.01. Creating and Using Classes
// const ref = new classesModule.ReferenceItem(2, 'Learn TypeScript', 2022);
// ref.printItem();
// ref.publisher = 'abc';
// console.log(ref);
// console.log(ref.getID());
// console.log(ref.printItem());

// task 05.02. Extending Classes
// const refBook = new RefBook(2, 'TS in Depth', 2022, 3);
// console.log(refBook);
// console.log('Subclass printItem call ----->>');
// refBook.printItem();
// console.log('Base printItem call ----->>');
// Object.getPrototypeOf(Object.getPrototypeOf(refBook)).printItem.call(refBook);

// task 05.03. Creating Abstract Classes
// const refEncyclopedia = new RefBook(2, 'TS in Depth', 2022, 3);
// RefBook.printCitation();

// task 05.04. Interfaces for Class Types
// const favoriteLibrarian: Librarian = new Ul.UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Helen', 'Javascript in Depth');

// task 05.05. Intersection and Union Types
// const PersonBook: PersonBook = {
//     [id]: 2,
//     name: 'Helen',
//     email: 'helen@test.com',
//     id: 5,
//     title: 'JavaScript Testing',
//     category: Category.JavaScript,
//     author: 'Liang Yuxian Eugene',
//     available: false,
// };
// console.log(PersonBook);
// console.log(setDefaultConfig({duration: 5}));

// task 06.03. Default Export
// printRefBook(new RefBook(999, 'TS in Depth', 2021, 44));
// printRefBook(new UL.UniversityLibrarian());

// task 07.01. Generic Functions
// const inventory: Book[] = [
//     { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software },
// ];
// const result = purge<Book>(inventory);
// console.log(result);

// task 07.02. Generic Interfaces and Classes
// const bookShelf = new classesModule.Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst());
// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' },
// ];
// const magazineShelf = new classesModule.Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// console.log(magazineShelf.getFirst());

// task 07.03. Generic Constraints
// console.log(magazineShelf.printItems());
// console.log(magazineShelf.find('Five Points'));
// console.log(magazineShelf.find('Five Points'));
// const author = getObjectProperty(getAllBooks()[0], 'author');
// console.log(author);

// task 07.04. Utility Types
// const bookRequiredFields: BookRequiredFields = {
//     id: 1,
//     title: 'Refactoring JavaScript',
//     category: Category.JavaScript,
//     author: 'Evan Burchard',
//     available: true,
//     pages: 5,
//     markDamaged: () => {},
// };
// const updatedBook: UpdatedBook = {};
// const p: Parameters<СreateCustomerFunctionType> = ['Anna', 30];
// console.log(...p);

// task 06.06. Type-Only Imports and Exports
// const library: Library = new Library();
// const library: Library = { id: 0, name: 'Anna', address: 'Kyiv' };
// console.log(library);

// task 08.01. Class Decorators (sealed)
// task 08.02. Class Decorators that replace constructor functions (logger)
// task 08.03. Method Decorator (writable)
// const obg = new UL.UniversityLibrarian();
// console.log(obg);
// obg.name = 'Anna';
// obg['printLibrarian']();
// UL.UniversityLibrarian['a'] = 1;
// UL.UniversityLibrarian.prototype['b'] = 1;

// const proto = Object.getPrototypeOf(Object);
// console.log(proto);
// proto.assistFaculty = null;
// proto.teachCommunity = null;
// obg.teachCommunity = null;

// task 08.04. Method Decorator (timeout)
// const enc = new RefBook(2, 'TS in Depth', 2022, 3);
// enc.printItem();

// task 08.05. Parameter Decorator (logParameter)
// const obg = new UL.UniversityLibrarian();
// obg.name = 'Anna';
// obg.assistCustomer('Helen', 'TypeScript');

// task 08.06. Property Decorator
// let obg = new UL.UniversityLibrarian();
// obg.name = 'Anna';
// obg.assistCustomer('Helen', 'TypeScript')

// task 08.07. Accessor Decorator
// const enc = new RefBook(2, 'TS in Depth', 2022, 3);
// enc.copies = 4;
// console.log(enc);

// task 09.01. Callback Functions
// console.log('Begin');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End');

// task 09.02. Promises
// console.log('Begin');
// getBooksByCategoryPromise(Category.JavaScript).then(titles => {
//     console.log(titles);
//     return Promise.resolve(titles.length);
// }).then(len => console.log(len)).catch(console.log);
// getBooksByCategoryPromise(Category.Software).then(console.log).catch(console.log);
// console.log('End');

// task 09.03. Async Functions
// console.log('Begin');
// logSearchResults(Category.JavaScript);
// logSearchResults(Category.Software).catch(console.log);
// console.log('End');
