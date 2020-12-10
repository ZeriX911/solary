import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
const routes: Routes = [
  {path:"",component:MainComponent},
  {path:"list",component:ListComponent},
  {path:"nav",component:NavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
