import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-pakages',
  templateUrl: './pakages.component.html',
  styleUrls: ['./pakages.component.css']
})
export class PakagesComponent implements OnInit {


  booking() {
    this.router.navigate(['/home/eventbook'])
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
