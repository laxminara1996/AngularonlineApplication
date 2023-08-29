import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes,RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
//const routes:Routes = [];
@NgModule({
  declarations: [
    AppComponent,
    OnlineapplicationComponent,
    AppliancesComponent,
    ElectronicsComponent,
    FashionComponent,
    LoginComponent,
    NotfoundComponent,
    LightingComponent,
    FurnitureComponent,
    MobileComponent,
    LaptopComponent,
    WomenComponent,
    MenComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    //RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
