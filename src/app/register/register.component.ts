import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent  {


  username:string=''
  email:string=""
  pswd:string=''

constructor(private route:Router){}

  register(){
    if(this.email&&this.pswd&&this.username ){
      alert("Registration Success!!")
      this.route.navigateByUrl('/login')      }
      else{
        alert("Please fill the form")
   
    
    
    }
  }
}
