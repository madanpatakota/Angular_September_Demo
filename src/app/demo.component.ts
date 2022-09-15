
import { Component } from '@angular/core'
//package
// My view
// template:"<p>My paragraph</p>",
// styles : [ " p { background-color:red }" ]
// who ever going to take this compenent i want to display "My paragraph"
@Component({
    selector: "my-para-comp",
    templateUrl:"./demo.component.html",
    styleUrls:["./demo.component.css"]
})
//simple normal class
// 1. angular needs to understand that this is the compoennt
export class DemoComponent{
}


