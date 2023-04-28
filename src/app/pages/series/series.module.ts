import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';
import { EditSerieComponent } from 'src/app/pages/series/edit-serie/edit-serie.component';
import { ListSeriesItemComponent } from './list-series/list-series-item/list-series-item.component';
import { ListSeriesComponent } from './list-series/list-series.component';

const routes: Routes = [{ path: '', component: ListSeriesComponent }];

@NgModule({
  declarations: [
    ListSeriesComponent,
    ListSeriesItemComponent,
    EditSerieComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
  ],
})
export class SeriesModule {}
