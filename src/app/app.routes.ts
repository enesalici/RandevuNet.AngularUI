import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './components/public-section/layouts/public-layout/public-layout.component';
import { HomePageComponent } from './components/public-section/components/home-page/home-page.component';
import { adminRoutes } from './routes/admin.routes';
import { authRoutes } from './routes/auth.routes';
import { doctorRoutes } from './routes/doctor.routes';
import { patientRoutes } from './routes/patient.routes';
import { LoginPageComponent } from './components/auth-section/components/login-page/login-page.component';
import { ForbidenPageComponent } from './components/public-section/components/forbiden-page/forbiden-page.component';
import { AuthLayoutComponent } from './components/auth-section/layouts/auth-layout/auth-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children:[
      {
        path: '',
        component: LoginPageComponent,
      },
    ]
  },
  ...authRoutes,
  ...adminRoutes,
  ...doctorRoutes,
  ...patientRoutes,
  {
    path: '**',
    component: ForbidenPageComponent,
  },
];
