import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modulos Nuevos
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PagesModule } from './pages/pages/pages.module';

import { AppComponent } from './app.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { AuthModule } from './auth/auth/auth.module';
//import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';



@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
    //AccountSettingsComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
