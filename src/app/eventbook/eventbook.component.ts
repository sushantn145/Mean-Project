import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-eventbook',
  templateUrl: './eventbook.component.html',
  styleUrls: ['./eventbook.component.css']
})
export class EventbookComponent implements OnInit {

  public eventdata = this.fb.group({
    eventname: ['', Validators.required],
    eventstartdate: ['', Validators.required],
    eventenddate: ['', Validators.required],
    guest: ['', Validators.required],
    location: ['', Validators.required],
    eventreq: ['', Validators.required]
  });
  constructor(private router: Router, private http: HttpClient, private fb: FormBuilder) { }

  async makepayment() {

    const data = this.eventdata.value;

    //Ajax Call
    const url = "http://localhost:2000/addevent";
    const result = await this.http.post(url, data).toPromise();
    console.log(result);
    // this.eventdata.reset();
    this.router.navigate(['login']);
    this.eventdata.reset('');

    this.router.navigate(['/home/payment'])
  }

  ngOnInit(): void {
  }

}
