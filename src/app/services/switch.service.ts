import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {

  constructor() { }


  $modal = new EventEmitter<any>();
  $modalEdit = new EventEmitter<any>();
  $modalData = new EventEmitter<any>();

}
