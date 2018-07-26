import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ClansDetailComponent } from './clans-detail/clans-detail.component';
import { AttributesComponent } from './attributes/attributes.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import { D10systemComponent } from './d10system/d10system.component';
import { DisciplinesComponent } from './disciplines/disciplines.component';
import { SettingComponent } from './setting/setting.component';
import { TypesComponent } from './combat/types/types.component';
import { StagesComponent } from './combat/stages/stages.component';
import { ManeuversComponent } from './combat/maneuvers/maneuvers.component';
import { ChartsComponent } from './combat/charts/charts.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    ClansDetailComponent,
    AttributesComponent,
    AbilitiesComponent,
    D10systemComponent,
    DisciplinesComponent,
    SettingComponent,
    TypesComponent,
    StagesComponent,
    ManeuversComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
