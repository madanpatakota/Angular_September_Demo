
import { Component, Input, Output, OnInit , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-binding',
  templateUrl: './custom-binding.component.html',
  styleUrls: ['./custom-binding.component.css']
})
export class CustomBindingComponent implements OnInit {

  constructor() { }

  @Input() coursename:any;      //--- angular  // i am getting the value
  @Output() evtFired = new EventEmitter<string>(); // i am sending the value


  //emit and more is subscribe

  ngOnInit(): void {
  }

  Submit(){
    this.evtFired.emit("Bangolore");
  }
  // @Input decaorator i can handle the custom property binding in 
  // the child element


  // main use event emitter

  // send






}
