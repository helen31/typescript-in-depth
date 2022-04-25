import * as Interfaces from '../interfaces';
import { id } from '../constants';

class UniversityLibrarian implements Interfaces.Librarian {
    department: string;
    email: string;
    [id]: number;
    name: string;

    assistCustomer(custName: string, bookTitle: string): void {
        console.log(`${this.name} is assisting ${custName} with the book ${bookTitle}`);
    }
}

export { UniversityLibrarian };
