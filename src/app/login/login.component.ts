import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public uiInvalidCredential = false;

  public fbFormGroup = this.fb.group({
    emailid: ['', Validators.required],
    password: ['', Validators.required],
  });

  async loogsin() {
    const data = this.fbFormGroup.value;
    // const data = {
    //   emailid: "sush.nik145@gmail.com",
    //   password: "sushantn145"
    // }
    //Ajax call
    const url = 'http://localhost:2000/login';
    const result: any = await this.http.post(url, data).toPromise();
    console.log(result);
    if (result.res) {
      sessionStorage.setItem('sid', "true");
      this.router.navigate(['home']);
    } else {
      this.uiInvalidCredential = true;

    }
    this.fbFormGroup.reset('');
  }


  forgetpassword() {

    this.router.navigate(['forgetpassword']);

  }

  register() {

    this.router.navigate(['register']);

  }
  constructor(private router: Router, private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit(): void {

  }


}
