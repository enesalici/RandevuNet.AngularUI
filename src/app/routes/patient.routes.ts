import { Routes } from "@angular/router";

import { PatientLayoutComponent } from "../components/patient-section/layouts/patient-layout/patient-layout.component";
import { CreateAppoinmentPageComponent } from "../components/patient-section/components/create-appoinment-page/create-appoinment-page.component";
import { AdminPaths } from "./admin.routes";
import { FeedbackPageComponent } from "../components/admin-section/components/feedback-page/feedback-page.component";
import { FaqPageComponent } from "../components/admin-section/components/faq-page/faq-page.component";
import { AppointmentsPageComponent } from "../components/admin-section/components/appointments-page/appointments-page.component";

export class PatientPaths {
  static readonly PATIENT_BASE = 'patient';
  static readonly APPOINTMENTS = 'appointments';
  static readonly CREATE_APPOINTMENT = 'create-appointment';
  static readonly FEEDBACK = 'feedback';
  static readonly FAQ = 'faq';

}

export const patientRoutes: Routes = [
  {
    path: PatientPaths.PATIENT_BASE,
    component: PatientLayoutComponent,
    children:[
      {
        path: '',
        component: CreateAppoinmentPageComponent,
      },
      {
        path: PatientPaths.APPOINTMENTS,
        component: AppointmentsPageComponent,
        data: { requiredRoles: [AdminPaths.ADMIN_BASE,PatientPaths.PATIENT_BASE]},
      },
      {
        path:PatientPaths.CREATE_APPOINTMENT ,
        component: CreateAppoinmentPageComponent,
        data: { requiredRoles: [AdminPaths.ADMIN_BASE,PatientPaths.PATIENT_BASE]},
      },
      {
        path: PatientPaths.FEEDBACK,
        component: FeedbackPageComponent,
        data: { requiredRoles: [AdminPaths.ADMIN_BASE,PatientPaths.PATIENT_BASE]},
      },
      {
        path: PatientPaths.FAQ,
        component: FaqPageComponent,
        data: { requiredRoles: [AdminPaths.ADMIN_BASE,PatientPaths.PATIENT_BASE]},
      },

    ]
  }
]
