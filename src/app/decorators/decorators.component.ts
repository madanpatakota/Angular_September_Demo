import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-decorators',
  templateUrl: './decorators.component.html',
  styleUrls: ['./decorators.component.css'],
})
export class DecoratorsComponent {
  constructor() {
    let z : any ;
  }


  @ViewChild("txtRef") _vRef:ElementRef<any>;
  //txtRef is the child of the view(decoarator.component.html)
  //txtRef is the element type

  evtSubmit1() {
    // console.log("From parameter i mean that without viewchild" ,elementRef);
   
    // console.log("using viewchild" , this._vRef);
    //console.log(elementRef.value);
    console.log(this._vRef.nativeElement.value);
  }
  evtSubmit2(elementRef: any) {
    console.log(elementRef);
  }
  evtSubmit3(elementRef: any) {
    console.log(elementRef);
  }
}
