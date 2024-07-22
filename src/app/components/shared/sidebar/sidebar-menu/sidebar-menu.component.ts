import { Component } from '@angular/core';
import { SidebarItem } from '../../../../models/sidebar-item.model';
import { SidebarTreeviewComponent } from "../sidebar-treeview/sidebar-treeview.component";
import { SidebarItemComponent } from "../sidebar-item/sidebar-item.component";
import { DoctorPaths } from '../../../../routes/doctor.routes';
import { RouterModule } from '@angular/router';
import { UserModel } from '../../../../models/user.model';
import { SessionStorageService } from '../../../../services/session-storage.service';
import { AppConstants } from '../../../../constants/app.constants';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [SidebarTreeviewComponent, SidebarItemComponent, RouterModule],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss'
})
export class SidebarMenuComponent {
  sidebarItems: SidebarItem[] = []

  adminItems: SidebarItem = {
    title: "Admin", link: "/admin", icon: "ri-nurse-line",
    children: [
      { title: "Dashboard", link: "/admin/dashboard" },
      { title: "", link: "" },

      { title: "Hastaneler", link: "/admin/hospitals" },
      { title: "Hastane Adresler", link: "/admin/hospital-addresses" },
      { title: "Hastane Departmanları", link: "/admin/hospital-departments" },
      { title: "Departmanlar", link: "/admin/departments" },
      { title: "", link: "" },

      { title: "Doktorlar", link: "/admin/doctors" },
      { title: "Doktor Uygunluk Saatleri", link: "/admin/doctor-schedule-slots" },
      { title: "Doktor Ünvanları", link: "/admin/doctor-titles" },
      { title: "", link: "" },

      { title: "Randevu Ara", link: "/admin/create-appointment" },
      { title: "Randevular", link: "/admin/appointments" },
      { title: "", link: "" },

      { title: "S.S.S", link: "/admin/faqs" },
      { title: "Bize Yazın", link: "/admin/feedbacks" },
      { title: "", link: "" },

      { title: "Ülkeler", link: "/admin/countries" },
      { title: "Şehirler", link: "/admin/cities" },
      { title: "İlçeler", link: "/admin/districts" },
      { title: "Mahalleler", link: "/admin/quarters" },
      { title: "", link: "" },

      { title: "Operation Claims", link: "/admin/operation-claims" },
      { title: "User Operation Claims", link: "/admin/user-operation-claims" },
    ]
  }

  doctorItems: SidebarItem = {
    title: "Doktor", link: "/doctor", icon: "ri-stethoscope-line",
    children: [
      { title: "Doktor Uygunluk Saatleri", link: "/doctor/doctor-schedule-slots" },
      { title: "Randevular", link: "/doctor/appointments" },
      { title: "Bize Yazın", link: "/doctor/feedback" },
      { title: "S.S.S", link: "/doctor/faq" },
    ]
  }

  patientItems: SidebarItem = {
    title: "Hasta", link: "/patient", icon: "ri-heart-pulse-line",
    children: [
      { title: "Randevular", link: "/patient/appointments" },
      { title: "Randevu Oluştur", link: "/patient/create-appointment" },
      { title: "Bize Yazın", link: "/patient/feedback" },
      { title: "S.S.S", link: "/patient/faq" },
    ]
  }



  constructor(private storage:SessionStorageService) {
    const userData: UserModel | null = this.storage.get(AppConstants.USER);
    if (userData?.userRoleName == AppConstants.ADMIN) {
    this.sidebarItems = [this.adminItems,this.doctorItems,this.patientItems]
    }
    else if (userData?.userRoleName == AppConstants.DOCTOR){
    this.sidebarItems = [this.doctorItems]


    }
    else if(userData?.userRoleName == AppConstants.PATIENT){
    this.sidebarItems = [this.patientItems]


    }
  }


}
