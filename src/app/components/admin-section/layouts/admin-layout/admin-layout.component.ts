import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PanelLayoutComponent } from "../../../shared/layouts/panel-layout/panel-layout.component";
import { BreadcrumbComponent } from "../../../shared/breadcrumbs/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterOutlet, PanelLayoutComponent, BreadcrumbComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss'
})
export class AdminLayoutComponent {

}
