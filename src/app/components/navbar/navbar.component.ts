import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  showNavbar: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  hasRoute(route: String) {
    return this.router.url === route;
  }
}
