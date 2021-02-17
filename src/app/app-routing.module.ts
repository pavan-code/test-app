import { MobileFormComponent } from './mobile-form/mobile-form.component';
import { MissingNumberComponent } from './missing-number/missing-number.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  { path: 'question1', component: MissingNumberComponent },
  { path: 'question3', component: MobileFormComponent },
  { path: 'question4', component: ParentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
