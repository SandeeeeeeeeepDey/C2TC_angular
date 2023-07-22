import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HumanComponent } from './human/human.component';
import { SuperHumanComponent } from './super-human/super-human.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { CreateService } from './create.service';

@NgModule({
  declarations: [
    AppComponent,
    HumanComponent,
    SuperHumanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CreateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
