import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../guards/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() featureSelected = new EventEmitter<string>();

  constructor(private authService: AuthService,
              private router: Router) 
  {
    if (!authService.isUserLoggedIn()) {
      this.router.navigate(['/signin']);
    }
  };


  onSelect = (feature: string) => this.featureSelected.emit(feature);
  
  ngOnInit() {
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/signin']);
  }

}
