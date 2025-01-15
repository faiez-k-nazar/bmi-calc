import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bmi',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bmi.component.html',
  styleUrl: './bmi.component.css'
})
export class BmiComponent {
  age:any=''
  weight:any=''
 height:any=''
 bmi:any=null
inner:string=''

no(){
  this.age=''
 this.weight=''
 this.height=''
 this.inner=''
}

  onClick(){

    const weights=Number(this.weight)
    console.log(weights);
    
    const heights=Number(this.height)
    console.log(heights);
    
    this.bmi=weights/heights
 
    if(this.bmi<18.5){
      this.inner=' <h3 class="text-center text-warning" style="font-weight: bolder;">You are in UnderWeight Category</h3>'
    }
    else if(this.bmi>=18.5&&this.bmi<=24.9){
      this.inner=' <h3 class="text-center text-success" style="font-weight: bolder;">You are in Normal weight Category</h3>'

    }else if(this.bmi>25 && this.bmi<29.9){
      this.inner=' <h3 class="text-center text-warning" style="font-weight: bolder;">You are in overWeight Category</h3>'

    }else{
      this.inner=' <h3 class="text-center text-danger" style="font-weight: bolder;">You have obeisity</h3>'

    }
   

console.log(this.bmi);

  }
}
