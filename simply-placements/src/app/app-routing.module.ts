import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin/admin.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CollegePageComponent } from './college-page/college-page.component';
import { CompanyPageComponent } from './company-page/company-page.component';
import { HomeStudentComponent } from './home-student/home-student.component';

const routes: Routes = [
  {path:"welcome", component:WelcomeComponent},
  {path:"welcome/users", component:UsersComponent},
  {path:"welcome/admin", component:AdminComponent},
  {path:"welcome/admin/administer", component:AdminPageComponent},
  {path:"welcome/users/student", component:StudentPageComponent},
  {path:"welcome/users/college", component:CollegePageComponent},
  {path:"welcome/users/company", component:CompanyPageComponent},
  {path:"home/student", component:HomeStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RouterComponents=[WelcomeComponent,UsersComponent,AdminComponent,AdminPageComponent,StudentPageComponent,CollegePageComponent,CompanyPageComponent]