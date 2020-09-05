import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  logout() {
    sessionStorage.removeItem('sid');
    this.router.navigate(['login']);
  }

  aboutus() {

    this.router.navigate(['/home/aboutus']);
  }


  contactus() {

    this.router.navigate(['/home/contactus']);
  }
  home() {

    this.router.navigate(['/home/pakages']);
  }




  constructor(private router: Router) {
  }

  ngOnInit(): void {
    if (!sessionStorage.getItem('sid')) {
      this.router.navigate(['login']);
    }
  }

}

