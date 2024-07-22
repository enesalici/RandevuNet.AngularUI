import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { SidebarItem } from '../../../../models/sidebar-item.model';
import { filter } from 'rxjs';

@Component({
  selector: 'app-sidebar-item',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './sidebar-item.component.html',
  styleUrl: './sidebar-item.component.scss'
})
export class SidebarItemComponent {
  @Input() item?: SidebarItem

  currentUrl: string;

  constructor(private router: Router) {
    this.currentUrl = this.router.url;
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.currentUrl = this.router.url;
    });
  }

  isActive(url?: string): boolean {
    return this.currentUrl.startsWith(url ?? "")
  }
}


