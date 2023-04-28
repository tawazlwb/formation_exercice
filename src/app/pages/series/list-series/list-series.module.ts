import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListSeriesComponent } from './list-series.component';


const routes: Routes = [
  { path: '', component: ListSeriesComponent }
];

@NgModule({
  declarations: [
    ListSeriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ListSeriesModule { }
