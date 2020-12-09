import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { RenderComponent } from './render/render.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SolarMapComponent } from './solar-map/solar-map.component';
import {MatTabsModule,MatTabNav,MatTabLink} from '@angular/material/tabs';
import { FourOfourComponent } from './four-ofour/four-ofour.component';
import { NavigationComponent } from './navigation/navigation.component';
@NgModule({
  declarations: [
    AppComponent,
    RenderComponent,
    FourOfourComponent,
    SolarMapComponent,
    NavigationComponent
  ],
  imports: [
    MatTabsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
