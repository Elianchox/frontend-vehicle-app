
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Status } from 'src/app/models/status';
import { Vehicles } from 'src/app/models/vehicles';
import { SwitchService } from 'src/app/services/switch.service';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-modal-add-vehicle',
  templateUrl: './modal-vehicle.component.html',
  styleUrls: ['./modal-vehicle.component.css']
})
export class ModalVehicleComponent implements OnInit {

  validateForm:boolean = false;
  dataVehicle:Vehicles= new Vehicles();

  optionsStatus:Status[] = [
    {value: 'Available', viewValue: 'Available'},
    {value: 'Occupied', viewValue: 'Occupied'},
    {value: 'Inactive', viewValue: 'Inactive'},
  ];
  constructor(private modalSS: SwitchService, private vehicleServices:VehiclesService) { }

  ngOnInit(): void {

  }

  myForm = new FormGroup({
    idVehicle: new FormControl('', Validators.required),
    brand: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
    doors: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required)
  })

  onRegister(){
    this.dataVehicle.idVehicle = this.myForm.value.idVehicle!
    this.dataVehicle.brand = this.myForm.value.brand!
    this.dataVehicle.model = this.myForm.value.model!
    this.dataVehicle.doors = parseInt(this.myForm.value.doors!)
    this.dataVehicle.type = this.myForm.value.type!
    this.dataVehicle.status = this.myForm.value.status!
    this.vehicleServices.createVehicle(this.dataVehicle);
    this.modalSS.$modal.emit(false);
  }

  closeModal(){
    this.modalSS.$modal.emit(false);
  }

}

