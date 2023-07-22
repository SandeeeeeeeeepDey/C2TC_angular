import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAComponent } from './page-a/page-a.component';
import { PageBComponent } from './page-b/page-b.component';

const routes: Routes = [{path:"A",component:PageAComponent},{path:"B", component:PageBComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents=[PageAComponent,PageBComponent]