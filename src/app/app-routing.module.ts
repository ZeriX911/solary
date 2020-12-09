import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RenderComponent } from "./render/render.component";
import { SolarMapComponent } from './solar-map/solar-map.component';
import { MatTab,_MatTabNavBase } from "@angular/material/tabs";
import { FourOfourComponent } from './four-ofour/four-ofour.component';
const routes: Routes = [
  {path:"",redirectTo:"list",pathMatch:"full"},
  { path:"list",component:RenderComponent},
  {path:"map",component:SolarMapComponent},
  {path:"*",component:FourOfourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
