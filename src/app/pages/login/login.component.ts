import {Component} from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;

  constructor(fb:FormBuilder,private router: Router) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(0)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(0)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      // console.log(values);
    }
  }
loginUser(e){
  e.preventDefault();
  
  var username = e.target[0].value;
  var password = e.target[1].value;
  if (username == "a" && password == "a"){
    this.router.navigate(['/pages/dashboard']) 
  }
  
  
}

}
