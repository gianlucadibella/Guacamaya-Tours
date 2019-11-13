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

const routes: Routes = [
  {path: 'misviajes', component: MyTripsComponent},
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'editar', component: EditarComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'ciudades', component: CitiesComponent},
  {path: 'editar2', component: Editar2Component},
  {path: 'editarh', component: EditarHComponent},
  {path: 'editarhabs', component: EditarHabsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
// tslint:disable-next-line: max-line-length
export const routingComponents = [MyTripsComponent, HomeComponent, LoginComponent, DashboardComponent, CitiesComponent, Editar2Component, EditarComponent, EditarHComponent, EditarHabsComponent];

