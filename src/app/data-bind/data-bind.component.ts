
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-data-bind',
  templateUrl: './data-bind.component.html',
  styleUrls: ['./data-bind.component.css']
})
<<<<<<< HEAD
export class DataBindcomponent implements OnInit {
Fired() {
throw new Error('Method not implemented.');
=======
export class DataBindComponent {
  controlNumber = 10;
  controlType = 'text';

  TodayDate: any;
  constructor() {
    // this.control();
    this.TodayDate = new Date();
  }

  control() {
    switch (this.controlNumber) {
      case 10: {
        this.controlType = 'radio';
        break;
      }
      case 20: {
        this.controlType = 'checkbox';
        break;
      }
      default: {
        this.controlType = 'text';
      }
    }
  }

  CourseName = 'Angular_Test_1';

  getCourseName() {
    return 'Angular_Test_2';
  }

  Location = 'Bangolore';

  Fired() {
    console.log('it is executing..... Thanks much');
  }

  evtControlCheck() {
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

  Name = 'Angular';

  ShowMessage(myMsg: HTMLInputElement) {
    console.log(myMsg.value);
    console.log('Key pressing .........');
  }

  
  Skill = 'Angular';

  evtMessage(evtDetails: any) {
    console.log(evtDetails);
  }





  Role = "Sofware Engineer";

  evtRole(UpdatedRecord:any){
     console.log(UpdatedRecord);
     this.Role = UpdatedRecord;
    // console.log("ngModel changes is triggering");
  }


  DevelopedBy = "GoogleTeam"





>>>>>>> fd3a055d0540856d72ef7f5cd5561e0c0b2a4157
}
evtControlCheck() {
throw new Error('Method not implemented.');
}
controlType: any;
Location: any;

  constructor() { }

  ngOnInit(): void {
  }
}