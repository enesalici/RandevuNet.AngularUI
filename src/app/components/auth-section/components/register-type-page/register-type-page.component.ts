import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-type-page',
  standalone: true,
  imports: [],
  templateUrl: './register-type-page.component.html',
  styleUrl: './register-type-page.component.scss'
})
export class RegisterTypePageComponent {
constructor(private router:Router){}

doctorClicked() {
this.router.navigateByUrl("/auth/doctor")
}
patientClicked() {
  this.router.navigateByUrl("/auth/patient")

}

}
