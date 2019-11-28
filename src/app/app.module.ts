import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilteredSliderComponent } from './home/filtered-slider/filtered-slider.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import {RouterModule, Routes} from '@angular/router';
import { from } from 'rxjs';
import { AdminComponent } from './admin/admin.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import {AngularFireFunctions, AngularFireFunctionsModule} from '@angular/fire/functions';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Navbar2Component } from './navbar2/navbar2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { CitiesComponent } from './cities/cities.component';
import { environment } from '../environments/environment';
import { EditarComponent } from './editar/editar.component';
import { Editar2Component } from './editar2/editar2.component';
import { EditarHComponent } from './editar-h/editar-h.component';
import { EditarHabsComponent } from './editar-habs/editar-habs.component';
import { PlaneaTuViajeComponent } from './planea-tu-viaje/planea-tu-viaje.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { HotelsComponent } from './hotels/hotels.component';
import { SliderComponent } from './hotels/slider/slider.component';
import { ExploreHotelsComponent } from './hotels/explore-hotels/explore-hotels.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HotelsOfCityComponent } from './hotels/hotels-of-city/hotels-of-city.component';
import { SliderTempComponent } from './destinations/slider-temp/slider-temp.component';
import { ReservasComponent } from './reservas/reservas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactoComponent } from './contacto/contacto.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    FilteredSliderComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    routingComponents,
    LoginComponent,
    AdminComponent,
    Navbar2Component,
    DashboardComponent,
    CitiesComponent,
    EditarComponent,
    Editar2Component,
    EditarHComponent,
    EditarHabsComponent,
    PlaneaTuViajeComponent,
    DestinationsComponent,
    HotelsComponent,
    SliderComponent,
    ExploreHotelsComponent,
    PageNotFoundComponent,
    HotelsOfCityComponent,
    SliderTempComponent,
    ReservasComponent,
    ContactoComponent,
    PaymentComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireFunctionsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

