import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {

  constructor(private route:Router){}

  email:string=""
  pswd:string=''

login(){
if(this.email&&this.pswd ){
alert("Login Success :)")
this.route.navigateByUrl('/bmi')
}else{
  alert("Fill the form")

}
}
}
