import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeecardComponent } from './employeecard/employeecard.component';
import { EmployeeregistrationComponent } from './employeeregistration/employeeregistration.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },

  {
    path:'login',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'employees',
    component: EmployeesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'employees-list',
    component: EmployeelistComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'employee-card',
    component: EmployeecardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'employee',
    component: EmployeeregistrationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'notfound',
    component: ErrorpageComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'**',
    component: ErrorpageComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
