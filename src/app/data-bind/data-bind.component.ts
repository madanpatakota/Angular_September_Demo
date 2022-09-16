import { Component } from '@angular/core';

@Component({
  selector: 'app-data-bind',
  templateUrl: './data-bind.component.html',
  styleUrls: ['./data-bind.component.css'],
})
export class DataBindComponent {
  
 
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



  // i want to apply the my stuff to the property of the element then you can
  // use property databinding.

  // 1. i did't write var or let or const to here while i declare the CourseName
  // //Analysis and tell me tomoorow

  // Same code by using if elseif else condition

  // iam not declaring the function name
  // directluy i am writng the method name.
  // analysis
}
