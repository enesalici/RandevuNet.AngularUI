import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthPaths } from '../../../../routes/auth.routes';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent  {


}
