import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showAddAsset: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService, private router: Router) { 
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddAsset = value));
  }

  ngOnInit(): void {
  }
  
  onClick() {
    this.uiService.toggleAddAsset();
  }

  hasRoute(route: String) {
    return this.router.url === route;
  }
}
