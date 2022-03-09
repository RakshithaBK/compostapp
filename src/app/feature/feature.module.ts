import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module'
import { FeatureRoutingModule } from './feature-routing.module'
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskComponent } from './task/task.component';
import { TableComponent } from './table/table.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    TableComponent,
    TaskComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    FeatureRoutingModule
    
  ]
})
export class FeatureModule { }
