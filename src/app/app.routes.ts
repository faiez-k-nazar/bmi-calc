import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BmiComponent } from './bmi/bmi.component';
import { PnfComponent } from './pnf/pnf.component';

export const routes: Routes = [
   { path:"",component:LandingComponent},
   {path:"bmi",component:BmiComponent},
   {path:"login",component:LoginComponent},
   {path:"register",component:RegisterComponent},
   {path:"**",component:PnfComponent}
];
