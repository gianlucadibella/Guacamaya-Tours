import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTripsComponent } from './my-trips/my-trips.component';
import { HomeComponent} from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CitiesComponent } from './cities/cities.component';
import {PlaneaTuViajeComponent} from './planea-tu-viaje/planea-tu-viaje.component';
import {DestinationsComponent} from './destinations/destinations.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path: 'misviajes', component: MyTripsComponent},
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'planea-tu-viaje', component:PlaneaTuViajeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'ciudades', component: DestinationsComponent},
  {path: 'explora', component: CitiesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
export const routingComponents = [MyTripsComponent, HomeComponent, LoginComponent, DashboardComponent, CitiesComponent];

