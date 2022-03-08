import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { TaskComponent } from './components/task/task.component';

//Added default and available routes
const routes: Routes = [
  { path: 'task', component: TaskComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
