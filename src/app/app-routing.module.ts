import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTripsComponent } from './my-trips/my-trips.component';


const routes: Routes = [
  {path: 'misviajes', component: MyTripsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MyTripsComponent];
