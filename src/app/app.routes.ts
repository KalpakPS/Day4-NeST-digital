import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DepartmentComponent } from './pages/department/department.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { AreospaceComponent } from './pages/department/areospace/areospace.component';
import { BankingComponent } from './pages/department/banking/banking.component';
import { HealthcareComponent } from './pages/department/healthcare/healthcare.component';
import { InsuranceComponent } from './pages/department/insurance/insurance.component';
import { LocomotiveComponent } from './pages/department/locomotive/locomotive.component';
import { IndustrialComponent } from './pages/department/industrial/industrial.component';
import { MobileComponent } from './pages/department/mobile/mobile.component';
import { SecurityComponent } from './pages/department/security/security.component';

export const routes: Routes = [
    {path: '',component:HomeComponent},
    {path: 'about',component:AboutComponent},
    {path: "department",component:DepartmentComponent},
    {path:"contact",component:ContactComponent},
    {path:"services",component:ServicesComponent},
    {path:"banking",component:BankingComponent},
    {path:"aerospace",component:AreospaceComponent},
    {path:"healthcare",component:HealthcareComponent},
    {path:"insurance",component:InsuranceComponent},
    {path:"locomotive",component:LocomotiveComponent},
    {path:"industrial",component:IndustrialComponent},
    {path:"mobility",component:MobileComponent},
    {path:"security",component:SecurityComponent},
];
