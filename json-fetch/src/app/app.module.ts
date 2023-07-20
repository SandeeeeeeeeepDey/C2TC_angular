import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FullInfoComponent } from './full-info/full-info.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { InfoService } from './info.service';

@NgModule({
  declarations: [
    AppComponent,
    FullInfoComponent,
    BasicInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [InfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
