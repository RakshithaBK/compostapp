import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { TaskComponent } from './feature/task/task.component';

//Added default and available routes
const routes: Routes = [
  { path: 'login', 
   loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
