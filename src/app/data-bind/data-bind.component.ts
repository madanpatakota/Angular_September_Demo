
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-data-bind',
  templateUrl: './data-bind.component.html',
  styleUrls: ['./data-bind.component.css']
})
export class DataBindcomponent implements OnInit {
Fired() {
throw new Error('Method not implemented.');
}
evtControlCheck() {
throw new Error('Method not implemented.');
}
controlType: any;
Location: any;

  constructor() { }

  ngOnInit(): void {
  }
=======
  styleUrls!: ['./data-bind.component.css']
  export class DataBindComponent {
  }
 
  controlNumber = 10;
  controlType = "text";

  constructor() {
    // this.control();
  }

  control() {
    switch(this.controlNumber){
        case 10 :{
           this.controlType = "radio";
           break;
        }
        case 20:{
          this.controlType = "checkbox";
          break;
        }
        default : {
           this.controlType = "text";
        }
    }
  }

  CourseName = 'Angular_Test_1';

  getCourseName() {
    return 'Angular_Test_2';
  }

  Location = 'Bangolore';


  Fired(){
     console.log("it is executing..... Thanks much");
  }

  evtControlCheck(){
    this.control();
  }
