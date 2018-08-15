import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service'
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  signUpUser:any = {};

  theActualUser:any = {};

  loginUser:any={};

  theError:any;

  constructor(private authService: AuthService) { }


  tryToSignUp(){
    console.log(this.signUpUser);
    this.authService.signup(this.signUpUser)
    .subscribe(
      userObjFromApi =>{ this.successCallback(userObjFromApi) },
      blahErrorThing=>{this.errorCallback(blahErrorThing)}
    );
  }

  tryToLogIn(){
    console.log(this.loginUser);
    this.authService.login(this.loginUser)
    .subscribe(
      res =>{ this.successCallback(res) },
      err =>{this.errorCallback(err)}
    );
  }

  logMeOut(){
    this.authService.logout()
    .subscribe(res =>{ this.theActualUser = {} })
  }

  successCallback(userObject){
    this.theActualUser = userObject;
    this.theError = '';
  }

  errorCallback(errorObject){
    this.theError = errorObject;
    this.theActualUser = {username:'', password:''};
  }

  checkIfLoggedIn(){
    this.authService.isLoggedIn()
    .subscribe(
      res =>{this.successCallback(res)},
      err =>{this.errorCallback(null)}
    )
  }


  ngOnInit() {
    this.checkIfLoggedIn();
  }

}
