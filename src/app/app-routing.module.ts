import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTripsComponent } from './my-trips/my-trips.component';
import { HomeComponent} from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CitiesComponent } from './cities/cities.component';
import { EditarComponent } from './editar/editar.component';
import { Editar2Component } from './editar2/editar2.component';
import { EditarHComponent } from './editar-h/editar-h.component';
import { EditarHabsComponent } from './editar-habs/editar-habs.component';
import {PlaneaTuViajeComponent} from './planea-tu-viaje/planea-tu-viaje.component';
import {DestinationsComponent} from './destinations/destinations.component';
import {HotelsComponent} from './hotels/hotels.component';
import {ExploreHotelsComponent} from './hotels/explore-hotels/explore-hotels.component';
import {AuthGuard} from './guards/auth.guard';
import { HotelsOfCityComponent } from './hotels/hotels-of-city/hotels-of-city.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { from } from 'rxjs';


const routes: Routes = [
  {path: 'misviajes', component: MyTripsComponent},
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'editar', component: EditarComponent, canActivate: [AuthGuard]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  
  {path: 'editar2', component: Editar2Component, canActivate: [AuthGuard]},
  {path: 'editarh', component: EditarHComponent, canActivate: [AuthGuard]},
  {path: 'editarhabs', component: EditarHabsComponent, canActivate: [AuthGuard]},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path: 'planea-tu-viaje', component: PlaneaTuViajeComponent},
  {path: 'hoteles', component: HotelsComponent},
  {path: 'detalle-hoteles', component: HotelsOfCityComponent, children:[
    {path:'id', component: HotelsOfCityComponent}
  ]},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'ciudades', component: DestinationsComponent},
  {path: 'explora', component: CitiesComponent },
  {path: 'explora-hotel', component: ExploreHotelsComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
// tslint:disable-next-line: max-line-length
export const routingComponents = [MyTripsComponent, HomeComponent, LoginComponent, DashboardComponent, CitiesComponent, Editar2Component, EditarComponent, EditarHComponent, EditarHabsComponent];

