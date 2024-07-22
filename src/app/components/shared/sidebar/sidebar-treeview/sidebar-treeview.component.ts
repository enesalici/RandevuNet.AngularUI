import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { SidebarItem } from '../../../../models/sidebar-item.model';
import { filter } from 'rxjs';

@Component({
  selector: 'app-sidebar-treeview',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar-treeview.component.html',
  styleUrl: './sidebar-treeview.component.scss'
})
export class SidebarTreeviewComponent {
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
  isChildActive(url?: string): boolean {
    return this.currentUrl === url;
  }
}



