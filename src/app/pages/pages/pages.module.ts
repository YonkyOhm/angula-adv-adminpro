import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from '../progress/progress.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Graficas1Component } from '../graficas1/graficas1.component';
import { PagesComponent } from '../pages.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing/app-routing.module';



@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class PagesModule { }
