import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClansDetailComponent } from './clans-detail/clans-detail.component';
import { AttributesComponent } from './attributes/attributes.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import { D10systemComponent } from './d10system/d10system.component';
import { DisciplinesComponent } from './disciplines/disciplines.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: "home", component: DashboardComponent },
  { path: 'd10system', component: D10systemComponent },
  { path: 'disciplines', component: DisciplinesComponent },
  { path: 'clans/:id', component: ClansDetailComponent },
  { path: 'attributes/:id', component: AttributesComponent },
  { path: 'abilities/:type', component: AbilitiesComponent },
  { path: 'abilities/:type/:id', component: AbilitiesComponent },
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
