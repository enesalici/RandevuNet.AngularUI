import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SidebarItemComponent } from "../../sidebar/sidebar-item/sidebar-item.component";
import { SidebarTreeviewComponent } from "../../sidebar/sidebar-treeview/sidebar-treeview.component";
import { SidebarItem } from '../../../../models/sidebar-item.model';
import { SidebarMenuComponent } from "../../sidebar/sidebar-menu/sidebar-menu.component";
import { LogoutButtonComponent } from "../../buttons/logout-button/logout-button.component";
import { RouterModule } from '@angular/router';
import { UserReadableService } from '../../../../services/user.service';
import { AuthService } from '../../../../services/auth.service';
import { UserModel } from '../../../../models/user.model';
import { SessionStorageService } from '../../../../services/session-storage.service';
import { AppConstants } from '../../../../constants/app.constants';

@Component({
  selector: 'app-panel-layout',
  standalone: true,
  imports: [SidebarItemComponent, SidebarTreeviewComponent, SidebarMenuComponent, LogoutButtonComponent,RouterModule],
  templateUrl: './panel-layout.component.html',
  styleUrl: './panel-layout.component.scss'
})
export class PanelLayoutComponent implements OnInit,AfterViewChecked  {

  userInfo:UserModel = new UserModel();
  constructor(private storage:SessionStorageService){}

  get fullNameFirst(){
    return `${this.userInfo.firstName.toUpperCase().substring(0,1)}${this.userInfo.lastName.toUpperCase().substring(0,1)}`
  }

  ngAfterViewChecked(): void {

  }
  ngOnInit(): void {
    const user: UserModel | null = this.storage.get(AppConstants.USER);
    this.userInfo = user ?? new UserModel()
  }




}
