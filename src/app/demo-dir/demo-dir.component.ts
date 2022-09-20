import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-dir',
  templateUrl: './demo-dir.component.html',
  styleUrls: ['./demo-dir.component.css']
})
export class DemoDirComponent {

  constructor() { 

    // if(this.cname == "Angular"){
    //        ______
    // }
    // else{
    //          _____
    // }

    //ternary operator.....
   // this.cname == "Angular" ? __ : ___


  }



  cname = "Angular";

  isShow = false;

  canApply = false;


}
