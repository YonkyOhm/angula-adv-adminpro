import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgChartsModule } from 'ng2-charts';

//Modulos
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ComponentsModule } from 'src/app/components/components/components.module';

import { ProgressComponent } from '../progress/progress.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Graficas1Component } from '../graficas1/graficas1.component';
import { PagesComponent } from '../pages.component';

import { AppRoutingModule } from 'src/app/app-routing/app-routing.module';
import { AccountSettingsComponent } from '../account-settings/account-settings.component';





@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
    AccountSettingsComponent,
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
    AccountSettingsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgChartsModule,
    AppRoutingModule,
    FormsModule,
    ComponentsModule
  ]
})
export class PagesModule { }
