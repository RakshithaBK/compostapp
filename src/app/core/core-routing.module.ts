import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../feature/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

//Added default and available routes
const routes: Routes = [
  // Empty route.
  { path: '', pathMatch: 'full', redirectTo: 'login' },

  // Routes.
  { path: '', component: LoginComponent}
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class CoreRoutingModule { }
