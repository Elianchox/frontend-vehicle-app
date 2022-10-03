import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { RegisterVehicle } from '../models/register-vehicle';
import { Vehicles } from '../models/vehicles';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  $vehiclesData = new EventEmitter<Vehicles[]>();
  $vehicleData = new EventEmitter<Vehicles[]>();
  $vehicleRental = new EventEmitter<RegisterVehicle[]>();
  getVehiclesData:Vehicles[] = [];

  private URL:string="https://backend-vehicle-app.herokuapp.com/api/v1/";

  constructor(private http:HttpClient) { }

  getVehicles(){
    console.log('entro')
    this.http.post<any>(this.URL+"getVehicles", {}).subscribe((data)=>{
      this.$vehiclesData.emit(data.data);
    })
  }

  getVehicle(id:string){
    this.http.post<any>(this.URL+"getVehicle", {"idVehicle":id}).subscribe((data)=>{
      this.$vehicleData.emit(data.data[0]);
    });
    
    this.getRental(id);
  }

  createVehicle(vehicle:Vehicles){
    console.log(vehicle)
    this.http.post<any>(this.URL+"createVehicle", vehicle).subscribe({
      next: data=>{
        this.getVehicles();
      },
      error: error=>{
        console.log(error)
      }
    })
  }

  updateVehicle(vehicle:Vehicles, id:string){
    this.http.post<any>(
      this.URL+"updateVehicle",
      {
        id:id,
        data:{
          ...vehicle
        }
      }
    ).subscribe({
      next: data=>{
        this.getVehicles();
        this.getRental(vehicle.idVehicle!);
      },
      error: error=>{
        console.log(error)
      }
    })
  }

  deleteVehicle(id:string){
    this.http.post<any>(this.URL+"deleteVehicle", {"idVehicle":id}).subscribe((data)=>{
      this.getVehicles();
    });
  }

  getRental(id:string){
    this.http.post<any>(this.URL+"getRental", {"idVehicle":id}).subscribe((data)=>{
      this.$vehicleRental.emit(data.data);
      console.log(data.data)
    })
  }

}
