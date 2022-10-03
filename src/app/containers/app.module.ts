import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* -------------------------------------------------------------------------- */
/*                                 Components                                 */
/* -------------------------------------------------------------------------- */
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { HeaderComponent } from '../components/header/header.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { CardComponent } from '../components/card/card.component';
import { FooterComponent } from '../components/footer/footer.component';
import { BtnAddComponent } from '../components/btn-add/btn-add.component';
import { ModalEditVehicleComponent } from '../components/modal-edit-vehicle/modal-edit-vehicle.component';
import { ModalVehicleComponent } from '../components/modal-add/modal-vehicle.component';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    VehiclesComponent,
    HeaderComponent,
    DashboardComponent,
    CardComponent,
    FooterComponent,
    BtnAddComponent,
    ModalEditVehicleComponent,
    ModalVehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
