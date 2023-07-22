import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HumanComponent } from './human/human.component';
import { SuperHumanComponent } from './super-human/super-human.component';

const routes: Routes = [{path:"human", component:HumanComponent},{path:"super",component:SuperHumanComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RouterComponents=[HumanComponent,SuperHumanComponent]