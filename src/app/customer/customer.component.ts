import { Component, ContentChild, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent{

  // Step 1 : take the reference through view child
  @ViewChild("container" , { read : ViewContainerRef})
   _container:ViewContainerRef;

   
  @ViewChild("template"  , {read: TemplateRef})  
  _template : TemplateRef<any>;


  @Input('capturetemplate') capturetemplate
  : TemplateRef<any>;


  //content child which captues the  either
  // template or element or compent
  // based on the referece.
  @ContentChild("templateA") 
  _contentTemplateA : TemplateRef<any>;

  evtSubmit(){
      console.log("submit");
      this._container.
      createEmbeddedView(this._template ,
            {notifcation:"from .ts file"});
      // i have to embedded(attach) my view(template) into the container..
      // let abc:string = "";
  }


}
