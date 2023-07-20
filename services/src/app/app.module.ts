import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MappingServiceService } from './mapping-service.service';
import { EpmloyeesComponent } from './epmloyees/epmloyees.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';

@NgModule({
  declarations: [
    AppComponent,
    EpmloyeesComponent,
    EmployeeInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MappingServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
