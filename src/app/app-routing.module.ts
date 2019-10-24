import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTripsComponent } from './my-trips/my-trips.component';
import { HomeComponent} from './home/home.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { AdminComponent } from './admin/admin.component';
=======
import { DashboardComponent } from './dashboard/dashboard.component';
import { CitiesComponent } from './cities/cities.component';

>>>>>>> develop-3

const routes: Routes = [
  {path: 'misviajes', component: MyTripsComponent},
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
<<<<<<< HEAD
  {path: 'admin', component: AdminComponent}

=======
  {path: 'dashboard', component: DashboardComponent},
  {path: 'ciudades', component: CitiesComponent}
>>>>>>> develop-3
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
export const routingComponents = [MyTripsComponent, HomeComponent, LoginComponent, DashboardComponent, CitiesComponent];

