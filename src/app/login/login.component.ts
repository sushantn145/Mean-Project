import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loogsin() {
    sessionStorage.setItem('sid', "true");
    this.router.navigate(['home']);

  }
  constructor(private router: Router) { }

  ngOnInit(): void {

  }


}
