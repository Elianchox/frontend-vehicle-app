import { Component, OnInit } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';
import { HttpClientModule } from '@angular/common/http';
import { Vehicles } from 'src/app/models/vehicles';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  modalSwitch!:boolean;
  vehicles!:Vehicles[];
  data!:Vehicles;

  constructor(private modalSS:SwitchService, private vehicleServices:VehiclesService) { }

  ngOnInit(): void {
    this.modalSS.$modalEdit.subscribe((value)=>{
      this.modalSwitch = value;
    });

    this.vehicleServices.$vehiclesData.subscribe((value)=>{
      this.vehicles = value;
    })

    this.vehicleServices.getVehicles();

  }

  openModal(vehicle:Vehicles){
    this.data = vehicle;
    this.modalSwitch = true;
  }

}
