import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
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

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: "home", component: DashboardComponent },
  { path: 'd10system', component: D10systemComponent },
  { path: 'disciplines', component: DisciplinesComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'clans/:id', component: ClansDetailComponent },
  { path: 'attributes/:id', component: AttributesComponent },
  { path: 'abilities/:type', component: AbilitiesComponent },
  { path: 'abilities/:type/:id', component: AbilitiesComponent },
  { path: 'combat/types', component: TypesComponent },
  { path: 'combat/stages', component: StagesComponent },
  { path: 'combat/maneuvers', component: ManeuversComponent },
  { path: 'combat/charts', component: ChartsComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
