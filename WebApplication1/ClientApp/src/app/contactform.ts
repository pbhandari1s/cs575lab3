import { first } from 'rxjs/operators';

export class ContactForm {
    firstName: string;
    lastName: string;
    streetAddress: string;
    city: string;
    state: string;
    message: string;

    constructor(firstName: string, lastName: string, streetAddress: string, city: string, state: string, message: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.streetAddress = streetAddress;
        this.city = city;
        this.state = state;
        this.message = message;
    }
} 