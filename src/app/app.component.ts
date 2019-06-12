import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  myData=[{
    name:"sourav",
    age:"21",
    email:"hey@email"
  },{
    name:"shubham",
    age:"23",
    email:"hey@email"
  },{
    name:"arkam",
    age:"25",
    email:"hey@email"
  }];
  userForm;
constructor(){
  this.userForm =new FormGroup(
    {
        'name':new FormControl(),
        'age':new FormControl(),
        'email':new FormControl()
    }
  )
}

formSubmit(){
  this.myData.push(this.userForm.value);
  console.log(this.userForm.value);
}

}
