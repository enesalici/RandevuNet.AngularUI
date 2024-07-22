import { Routes } from "@angular/router";
import { AdminLayoutComponent } from "../components/admin-section/layouts/admin-layout/admin-layout.component";

import { AdminDashboardPageComponent } from "../components/admin-section/components/admin-dashboard-page/admin-dashboard-page.component";
import { CountriesPageComponent } from "../components/admin-section/components/countries-page/countries-page.component";
import { CitiesPageComponent } from "../components/admin-section/components/cities-page/cities-page.component";
import { DistrictPageComponent } from "../components/admin-section/components/districts-page/districts-page.component";
import { QuartersPageComponent } from "../components/admin-section/components/quarters-page/quarters-page.component";
import { HospitalsPageComponent } from "../components/admin-section/components/hospitals-page/hospitals-page.component";
import { DepartmentsPageComponent } from "../components/admin-section/components/departments-page/departments-page.component";
import { HospitalDepartmentsPageComponent } from "../components/admin-section/components/hospital-departments-page/hospital-departments-page.component";
import { HospitalAddressesPageComponent } from "../components/admin-section/components/hospital-addresses-page/hospital-addresses-page.component";
import { DoctorTitlesPageComponent } from "../components/admin-section/components/doctor-titles-page/doctor-titles-page.component";
import { DoctorPageComponent } from "../components/admin-section/components/doctor-page/doctor-page.component";
import { DoctorSchedulePageComponent } from "../components/admin-section/components/doctor-schedule-page/doctor-schedule-page.component";
import { AppointmentsPageComponent } from "../components/admin-section/components/appointments-page/appointments-page.component";
import { FaqPageComponent } from "../components/admin-section/components/faq-page/faq-page.component";
import { FeedbackPageComponent } from "../components/admin-section/components/feedback-page/feedback-page.component";
import { OperationClaimsPageComponent } from "../components/admin-section/components/operation-claims-page/operation-claims-page.component";
import { UserOperationsClaimsComponent } from "../components/admin-section/components/user-operations-claims/user-operations-claims.component";
import { RoleGuard } from "../guards/role.guard";
import { CreateAppoinmentPageComponent } from "../components/patient-section/components/create-appoinment-page/create-appoinment-page.component";

export class AdminPaths {
  static readonly ADMIN_BASE = 'admin';
  static readonly DASHBOARD = 'dashboard';
  static readonly COUNTRIES = 'countries';
  static readonly CITIES = 'cities';
  static readonly DISTRICTS = 'districts';
  static readonly QUARTERS = 'quarters';
  static readonly HOSPITALS = 'hospitals';
  static readonly DEPARTMENTS = 'departments';
  static readonly HOSPITAL_DEPARTMENTS = 'hospital-departments';
  static readonly HOSPITAL_ADDRESSES = 'hospital-addresses';
  static readonly DOCTOR_TITLES = 'doctor-titles';
  static readonly HOSPITAL_DEPARTMENT = 'hospital-departments';
  static readonly DOCTOR_SCHEDULE_SLOTS = 'doctor-schedule-slots';
  static readonly DOCTORS = 'doctors';
  static readonly CREATE_APPOINTMENT = 'create-appointment';
  static readonly APPOINTMENTS = 'appointments';
  static readonly FAQ = 'faqs';
  static readonly FEEDBACK = 'feedbacks';
  static readonly OPERATION_CLAIMS = 'operation-claims';
  static readonly USER_OPERATION_CLAIMS = 'user-operation-claims';

}

export const adminRoutes: Routes = [
  {
    path: AdminPaths.ADMIN_BASE,
    component: AdminLayoutComponent,
    canActivateChild: [RoleGuard],
    children: [
      {
        path: '',
        component: AdminDashboardPageComponent,
        data: { requiredRoles: [AdminPaths.ADMIN_BASE]},
      },
      {
        path: AdminPaths.DASHBOARD,
        component: AdminDashboardPageComponent,
        data: { requiredRoles: [AdminPaths.ADMIN_BASE]},
      },
      {
        path: AdminPaths.COUNTRIES,
        component: CountriesPageComponent,
        data: { requiredRoles: [AdminPaths.ADMIN_BASE]},
      },
      {
        path: AdminPaths.CITIES,
        component: CitiesPageComponent,
        data: { requiredRoles: [AdminPaths.ADMIN_BASE]},
      },
      {
        path: AdminPaths.DISTRICTS,
        component: DistrictPageComponent,
        data: { requiredRoles: [AdminPaths.ADMIN_BASE]},
      },
      {
        path: AdminPaths.QUARTERS,
        component: QuartersPageComponent,
        data: { requiredRoles: [AdminPaths.ADMIN_BASE]},
      },
      {
        path: AdminPaths.HOSPITALS,
        component: HospitalsPageComponent,
        data: { requiredRoles: [AdminPaths.ADMIN_BASE]},
      },
      {
        path: AdminPaths.DEPARTMENTS,
        component: DepartmentsPageComponent,
        data: { requiredRoles: [AdminPaths.ADMIN_BASE]},
      },
      {
        path: AdminPaths.HOSPITAL_DEPARTMENT,
        component: HospitalDepartmentsPageComponent,
        data: { requiredRoles: [AdminPaths.ADMIN_BASE]},
      },
      {
        path: AdminPaths.HOSPITAL_ADDRESSES,
        component: HospitalAddressesPageComponent,
        data: { requiredRoles: [AdminPaths.ADMIN_BASE]},
      },
      {
        path: AdminPaths.DOCTORS,
        component: DoctorPageComponent,
        data: { requiredRoles: [AdminPaths.ADMIN_BASE]},
      },
      {
        path: AdminPaths.DOCTOR_TITLES,
        component: DoctorTitlesPageComponent,
        data: { requiredRoles: [AdminPaths.ADMIN_BASE]},
      },
      {
        path: AdminPaths.DOCTOR_SCHEDULE_SLOTS,
        component: DoctorSchedulePageComponent,
        data: { requiredRoles: [AdminPaths.ADMIN_BASE]},
      },
      {
        path: AdminPaths.CREATE_APPOINTMENT,
        component: CreateAppoinmentPageComponent,
        data: { requiredRoles: [AdminPaths.ADMIN_BASE]},
      },
      {
        path: AdminPaths.APPOINTMENTS,
        component: AppointmentsPageComponent,
        data: { requiredRoles: [AdminPaths.ADMIN_BASE]},
      },
      {
        path: AdminPaths.FAQ,
        component: FaqPageComponent,
        data: { requiredRoles: [AdminPaths.ADMIN_BASE]},
      },
      {
        path: AdminPaths.FEEDBACK,
        component: FeedbackPageComponent,
        data: { requiredRoles: [AdminPaths.ADMIN_BASE]},
      },
      {
        path: AdminPaths.OPERATION_CLAIMS,
        component: OperationClaimsPageComponent,
        data: { requiredRoles: [AdminPaths.ADMIN_BASE]},
      },
      {
        path: AdminPaths.USER_OPERATION_CLAIMS,
        component: UserOperationsClaimsComponent,
        data: { requiredRoles: [AdminPaths.ADMIN_BASE]},
      },
    ]
  }
]


