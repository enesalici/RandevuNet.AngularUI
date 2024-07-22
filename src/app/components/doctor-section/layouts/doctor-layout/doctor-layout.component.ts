import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { PanelLayoutComponent } from "../../../shared/layouts/panel-layout/panel-layout.component";
import { BreadcrumbComponent } from "../../../shared/breadcrumbs/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-doctor-layout',
  standalone: true,
  imports: [RouterOutlet, PanelLayoutComponent, RouterModule, BreadcrumbComponent],
  templateUrl: './doctor-layout.component.html',
  styleUrl: './doctor-layout.component.scss'
})
export class DoctorLayoutComponent {

}
