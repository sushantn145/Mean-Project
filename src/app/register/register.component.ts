import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  public registerdata = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    //emailid: ['', Validators.required],
    //Email: ['', Validators.required],
    emailid: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9.#]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z]{2,}$/)]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[@#%$&*])[A-Za-z0-9@#%$&*]{8,}$/)]],
    //password: ['', Validators.required],
    confirmpassword: ['', Validators.required],
    mobno: ['', [Validators.required, Validators.pattern(/^[789][0-9]{9}$/)]]
  });
  constructor(private router: Router, private http: HttpClient, private fb: FormBuilder) { }

  async submithere() {
    const data = this.registerdata.value;

    if (data.password != data.confirmpassword) {
      alert('password Mismatch eg.between[0-9] & [@#%$&*] & min length 8 character')
    } else {
      //Ajax Call
      const url = "http://localhost:2000/adduser";
      const result = await this.http.post(url, data).toPromise();
      console.log(result);
      //this.registerdata.reset();
      this.router.navigate(['login']);
    }
    this.registerdata.reset('');
  }



  ngOnInit(): void {
  }

}
