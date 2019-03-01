import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared-module/shared.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ROUTES } from './main.routes';
import { FormsTableComponent } from './forms-table/forms-table.component';

@NgModule({
  declarations: [
    HomeComponent,
    FormsTableComponent],
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class MainModule { }
