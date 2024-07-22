import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { SessionStorageService } from '../../../../services/session-storage.service';
import { UserModel } from '../../../../models/user.model';
import { AppConstants } from '../../../../constants/app.constants';

@Component({
  selector: 'app-admin-dashboard-page',
  standalone: true,
  imports: [],
  templateUrl: './admin-dashboard-page.component.html',
  styleUrl: './admin-dashboard-page.component.scss'
})
export class AdminDashboardPageComponent implements OnInit {
  constructor(private auth:AuthService,private storage:SessionStorageService){}

  userInfo:UserModel = new UserModel();
  ngOnInit(): void {
    const user: UserModel | null = this.storage.get(AppConstants.USER);
    this.userInfo = user ?? new UserModel()

  }

}
