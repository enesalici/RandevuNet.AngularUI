import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-logout-button',
  standalone: true,
  imports: [],
  templateUrl: './logout-button.component.html',
})
export class LogoutButtonComponent {
  constructor(private authService: AuthService) { }

  logout(){
    this.authService.logout()
  }
}
