import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin/admin.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CollegePageComponent } from './college-page/college-page.component';
import { CompanyPageComponent } from './company-page/company-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrudService } from './crud.service';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { HomeStudentComponent } from './home-student/home-student.component';
import { HomeCollegeComponent } from './home-college/home-college.component';
import { HomeCompanyComponent } from './home-company/home-company.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    UsersComponent,
    AdminComponent,
    StudentPageComponent,
    AdminPageComponent,
    CollegePageComponent,
    CompanyPageComponent,
    HomeAdminComponent,
    HomeStudentComponent,
    HomeCollegeComponent,
    HomeCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
