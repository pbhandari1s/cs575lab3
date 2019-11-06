import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simplesubscribe',
  templateUrl: './simplesubscribe.component.html',
  styleUrls: ['./simplesubscribe.component.css']
})
export class SimplesubscribeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoSubscription(email: string) {
    this.router.navigate(['/subscribeconfirmation/' + email]);
  }
}
