import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgxSpinnerModule],
  template: `<router-outlet />
  <ngx-spinner type="ball-scale-multiple"></ngx-spinner>`
})
export class AppComponent {
  title = 'RandevuNet.AngularUI';
}
