import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlineapplicationComponent } from './onlineapplication/onlineapplication.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FashionComponent } from './fashion/fashion.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LightingComponent } from './lighting/lighting.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { MobileComponent } from './mobile/mobile.component';
import { LaptopComponent } from './laptop/laptop.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';

const routes: Routes = [
  {path:'',component:OnlineapplicationComponent},
  
  {
    path:'appliances',component:AppliancesComponent,children:[
    {path:'lighting',component:LightingComponent},
    {path:'furniture',component:FurnitureComponent}]

  },


  {path:'electronics',component:ElectronicsComponent,children:[
    {path:'mobile',component:MobileComponent},
    {path:'laptop',component:LaptopComponent}
  ]},

  {path:'fashion',component:FashionComponent,children:[
    {path:'men',component:MenComponent},
    {path:'women',component:WomenComponent}
  ]},
  {path:'login',component:LoginComponent},
  {path:'**',component:NotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
