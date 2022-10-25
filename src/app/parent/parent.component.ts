import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  Input,
  AfterContentInit,
  ContentChild,
  ElementRef,
  AfterContentChecked,
  AfterViewInit,
  ViewChild,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent
  implements OnInit, OnDestroy,
  OnChanges, DoCheck, 
  AfterContentInit,AfterContentChecked,
  AfterViewInit , AfterViewChecked
{
  @Input('name') Inname: string;

  @ViewChild("news") Vnews:ElementRef;
  @ContentChild('notification') notification: ElementRef;

  constructor() {
    console.log('Constructor loaded');
  }

  // one of the component Life cycle hook
  ngOnInit(): void {
    console.log('ngOninit loaded');
    console.log('while component init notfication', this.notification);
    console.log('while component init news is', this.Vnews);
    // console.log("Notification message from child",
    //  this.notification.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngonchanges loaded');
    console.log(changes);
    if (this.Inname == 'Angular') {
      console.log('please enter antoher value instead of the angular');
    }
  }

  // called each and every changes of the componnet like a spy..
  ngDoCheck(): void {
    console.log('ngDocheck called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfter conent init');
    console.log('while content init notfication', this.notification);
    console.log('while content init notfication --- value', this.notification.nativeElement.textContent);
  }

  // kind of the spy monitors the conent of the component
  ngAfterContentChecked(){
    console.log("ngAFterConent checked changes");
  }

  ngAfterViewInit(){
    console.log("ngAfterView init called");
    console.log('while component ViewChild Init news is', this.Vnews);
    console.log('while component ViewChild Init news is', this.Vnews.nativeElement.textContent);
  }

  //Spy of the viewchild changes of the component ;
  ngAfterViewChecked(){
    console.log("AfterViewChecked Called");
  }

 
  // routing // unload the current componet and loads the new componet
  ngOnDestroy(): void {
     // the place whenever you are unload or destoy the component.
     // do you unsubscribe of the observables.
     // navigateing from one component to another
     console.log("ngDestory called");
  }
 

}
