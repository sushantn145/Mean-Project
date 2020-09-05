import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  public uiInvalidCredential = false;

  public forgotpsddata = this.fb.group({
    emailid: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9.#]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z]{2,}$/)]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[@#%$&*])[A-Za-z0-9@#%$&*]{8,}$/)]],
    confirmpassword: ['', Validators.required]
  });
  constructor(private router: Router, private http: HttpClient, private fb: FormBuilder) { };

  async submit() {
    const data = this.forgotpsddata.value;
    if (data.password != data.confirmpassword) {
      alert('Password Missmatch')
    }
    else {
      const url = 'http://localhost:2000/update';
      const result: any = await this.http.put(url, data).toPromise();
      console.log(result);
      this.router.navigate(['login']);
    }
  }

  ngOnInit(): void {
  }

}
