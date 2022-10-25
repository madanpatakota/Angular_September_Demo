import { Component } from '@angular/core';

@Component({
  selector: 'app-root-madan',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// <!--   
//   1. what kind of output i have to display?
//   2. what kind of functionlity i have to prepare?
//   3. what kind of styles i have to apply ?
//   4. what kind of test case i have to follow? -->


export class AppComponent {
  title = 'Angular_September_Demo';

  expectedValue = "";

  cname = 'Angular';

  appfired(value:any){
     console.log(value);
     this.expectedValue = value;
  }

}
