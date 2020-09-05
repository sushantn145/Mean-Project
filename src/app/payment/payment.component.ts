import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  public paymentdetails = this.fb.group({
    cardno: ['', Validators.required],
    expirydate: ['', Validators.required],
    cvvno: ['', Validators.required],
    name: ['', Validators.required]
  });
  constructor(private router: Router, private http: HttpClient, private fb: FormBuilder) { }

  async submit() {
    const data = this.paymentdetails.value;

    //Ajax Call
    const url = "http://localhost:2000/payment";
    const result = await this.http.post(url, data).toPromise();
    console.log(result);
    //this.registerdata.reset();

    this.router.navigate(['home']);
  }

  ngOnInit(): void {
  }

}
