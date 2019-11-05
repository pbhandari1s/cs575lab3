import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subscribeconfirmation',
  templateUrl: './subscribeconfirmation.component.html',
  styleUrls: ['./subscribeconfirmation.component.css']
})
export class SubscribeconfirmationComponent implements OnInit {

  email: string;
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.email = params['email'];
    });
  }

}
