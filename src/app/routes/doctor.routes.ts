import { Routes } from "@angular/router";
import { DoctorLayoutComponent } from "../components/doctor-section/layouts/doctor-layout/doctor-layout.component";
import { DoctorDashboardPageComponent } from "../components/doctor-section/components/doctor-dashboard-page/doctor-dashboard-page.component";

import { RoleGuard } from "../guards/role.guard";
import { DoctorSchedulePageComponent } from "../components/admin-section/components/doctor-schedule-page/doctor-schedule-page.component";
import { AdminPaths } from "./admin.routes";
import { AppointmentsPageComponent } from "../components/admin-section/components/appointments-page/appointments-page.component";
import { FaqPageComponent } from "../components/admin-section/components/faq-page/faq-page.component";
import { FeedbackPageComponent } from "../components/admin-section/components/feedback-page/feedback-page.component";


export class DoctorPaths {
  static readonly DOCTOR_BASE = 'doctor';
  static readonly DASHBOARD = 'dashboard';
  static readonly DOCTOR_SCHEDULE_SLOTS = 'doctor-schedule-slots';
  static readonly APPOINTMENTS = 'appointments';
  static readonly FEEDBACK = 'feedback';
  static readonly FAQ = 'faq';
}

export const doctorRoutes: Routes = [
  {
    path: DoctorPaths.DOCTOR_BASE,
    component: DoctorLayoutComponent,
    canActivateChild: [RoleGuard],
    children: [
      {
        path: '',
        component: DoctorSchedulePageComponent,
        data: { requiredRoles: [AdminPaths.ADMIN_BASE,DoctorPaths.DOCTOR_BASE]},
      },
      {
        path: DoctorPaths.DOCTOR_SCHEDULE_SLOTS,
        component: DoctorSchedulePageComponent,
        data: { requiredRoles: [AdminPaths.ADMIN_BASE,DoctorPaths.DOCTOR_BASE]},
      },
      {
        path: DoctorPaths.APPOINTMENTS,
        component: AppointmentsPageComponent,
        data: { requiredRoles: [AdminPaths.ADMIN_BASE,DoctorPaths.DOCTOR_BASE]},
      },
      {
        path: DoctorPaths.FEEDBACK,
        component: FeedbackPageComponent,
        data: { requiredRoles: [AdminPaths.ADMIN_BASE,DoctorPaths.DOCTOR_BASE]},
      },
      {
        path: DoctorPaths.FAQ,
        component: FaqPageComponent,
        data: { requiredRoles: [AdminPaths.ADMIN_BASE,DoctorPaths.DOCTOR_BASE]},
      },

    ]
  },
]
