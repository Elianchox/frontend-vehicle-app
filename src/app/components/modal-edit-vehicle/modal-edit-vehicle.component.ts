import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterVehicle } from 'src/app/models/register-vehicle';
import { Status } from 'src/app/models/status';
import { Vehicles } from 'src/app/models/vehicles';
import { SwitchService } from 'src/app/services/switch.service';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-modal-edit-vehicle',
  templateUrl: './modal-edit-vehicle.component.html',
  styleUrls: ['./modal-edit-vehicle.component.css']
})
export class ModalEditVehicleComponent implements OnInit {
  @Input() dataEntrante:any;
  editMode:boolean = false;
  deleteCon:boolean = false;
  data!:any;
  // selectedStatus!: string;
  optionsStatus:Status[] = [
    {value: 'Available', viewValue: 'Available'},
    {value: 'Occupied', viewValue: 'Occupied'},
    {value: 'Inactive', viewValue: 'Inactive'},
  ];
  dataRegister:RegisterVehicle[] = [];

  myForm = new FormGroup({
    idVehicle: new FormControl('', Validators.required),
    brand: new FormControl( '',Validators.required),
    model: new FormControl( '',Validators.required),
    doors: new FormControl( '',Validators.required),
    type: new FormControl( '',Validators.required),
    status: new FormControl( '',Validators.required),
    id: new FormControl( '',Validators.required)
  });

  constructor(private modalSS:SwitchService, private vehicleService:VehiclesService) {

    this.vehicleService.$vehicleData.subscribe((value:Vehicles)=>{
      this.data = value;
    });

    this.vehicleService.$vehicleRental.subscribe((value)=>{
      this.dataRegister = value;
    })

  }

  ngOnInit(): void {
    this.vehicleService.getVehicle(this.dataEntrante.idVehicle);
  }

  closeModal(){
    this.modalSS.$modalEdit.emit(false);
  }

  openEdit(data:any){
    this.editMode = true;
    this.myForm.patchValue(data);
  }

  cancelEdit(){
    this.editMode = false;
  }

  openDelete(){
    this.deleteCon = true;
  }

  closeDelete(){
    this.deleteCon = false;
  }

  deleteData(id:string){
    this.vehicleService.deleteVehicle(id);
    this.modalSS.$modalEdit.emit(false);
  }

  onRegister(){
    this.data = this.myForm.getRawValue();
    let id:string = this.myForm.value.id!;
    this.vehicleService.updateVehicle(this.data, id)
    this.editMode = false;
  }

}
