import { Author, Book, Person } from './interfaces';
import { createCustomer, getBooksByCategoryPromise } from './functions';

type BookProperties = keyof Book;

type PersonBook = Person & Book;

type BookOrUndefined = Book | undefined;

type BookRequiredFields = Required<Book>;

type UpdatedBook = Partial<Book>;

type AuthorWoEmail = Omit<Author, 'email'>;

type СreateCustomerFunctionType = typeof createCustomer;

// task 07.05. Conditional Types Utility Types

type fn = (p1: string, p2: number, p3: boolean) => symbol;
type Param1<T> = T extends (p1: infer R, p2: number, p3: boolean) => symbol ? R : never;
type Param2<T> = T extends (p1: infer R, p2: infer R, p3: boolean) => symbol ? R : never;
type Param3<T> = T extends (p1: infer R, p2: infer R, p3: infer R) => symbol ? R : never;

type P1 = Param1<fn>;
type P2 = Param2<fn>;
type P3 = Param3<fn>;

type fn1 = (p1: string) => symbol;
type P4 = Param2<fn1>;

type RequiredProps<T extends object> = { [Prop in keyof T]: {} extends Pick<T, Prop> ? never : Prop }[keyof T];
type OptionalProps<T extends object> = { [Prop in keyof T]: {} extends Pick<T, Prop> ? Prop : never }[keyof T];

type bookRequiredProps = RequiredProps<Book>;
type bookOptionalProps = OptionalProps<Book>;

type RemoveProps<T extends object, TProps extends keyof T> = {
    [Prop in keyof T as Exclude<Prop, TProps>]: T[Prop];
};

type bookRequiredPropsType = RemoveProps<Book, bookOptionalProps>;
type bookOptionalPropsType = RemoveProps<Book, bookRequiredProps>;

type Unpromisify<T> = T extends Promise<infer R> ? R : never;
type FRT = ReturnType<typeof getBooksByCategoryPromise>;
type PT = Unpromisify<FRT>;

export {
    BookProperties,
    PersonBook,
    BookOrUndefined,
    BookRequiredFields,
    UpdatedBook,
    AuthorWoEmail,
    СreateCustomerFunctionType,
};
