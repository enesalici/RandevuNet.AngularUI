import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PanelLayoutComponent } from "../../../shared/layouts/panel-layout/panel-layout.component";
import { BreadcrumbComponent } from "../../../shared/breadcrumbs/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-patient-layout',
  standalone: true,
  imports: [RouterOutlet, PanelLayoutComponent, BreadcrumbComponent],
  templateUrl: './patient-layout.component.html',
  styleUrl: './patient-layout.component.scss'
})
export class PatientLayoutComponent {

}
