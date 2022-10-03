import { Component, OnInit } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-btn-add',
  templateUrl: './btn-add.component.html',
  styleUrls: ['./btn-add.component.css']
})
export class BtnAddComponent implements OnInit {

  modalSwitch!:boolean;

  constructor(private modalSS:SwitchService) { }

  ngOnInit(): void {
    this.modalSS.$modal.subscribe((value)=>{
      this.modalSwitch = value;
    });
  }

  openModal(){
    this.modalSwitch = true;
  }

}
