import { ContactForm } from '../contactform';
import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  formSuccessful: boolean;
  @Output() formSubmitted = new EventEmitter<ContactForm>();
  constructor(private router: Router) { }

  ngOnInit() {
  }

  submitContactForm(firstName: string, lastName: string, streetAddress: string, city: string, state: string, message: string) {
    this.formSubmitted.emit(new ContactForm(firstName, lastName, streetAddress, city, state, message));
    this.formSuccessful = this.formSubmitted.hasError == false;

    if (this.formSuccessful)
      this.router.navigate(['/formsuccessful']);
  }
}
