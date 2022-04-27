import { Author, Book, Person } from './interfaces';
import { createCustomer } from './functions';

type BookProperties = keyof Book;

type PersonBook = Person & Book;

type BookOrUndefined = Book | undefined;

type BookRequiredFields = Required<Book>;

type UpdatedBook = Partial<Book>;

type AuthorWoEmail = Omit<Author, 'email'>;

type СreateCustomerFunctionType = typeof createCustomer;

type RequiredKeys<T> = { [K in keyof T]-?: {} extends Pick<T, K> ? never : K }[keyof T];

type RequiredFields<T> = {
    [K in keyof T as T[K] extends Required<T>[K] ? K : never]: T[K];
};

export {
    BookProperties,
    PersonBook,
    BookOrUndefined,
    BookRequiredFields,
    UpdatedBook,
    AuthorWoEmail,
    СreateCustomerFunctionType,
    RequiredFields,
    RequiredKeys,
};
