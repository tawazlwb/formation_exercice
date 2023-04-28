import { Component, HostBinding, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EditSerieComponent } from 'src/app/pages/series/edit-serie/edit-serie.component';

@Component({
  selector: 'app-list-series-item',
  templateUrl: './list-series-item.component.html',
  styleUrls: ['./list-series-item.component.scss'],
})
export class ListSeriesItemComponent {
  @Input() serie?: ISerie;

  @HostBinding('style.opacity')
  get componentOpacity() {
    return this.serie?.watched ? 0.5 : 1;
  }

  constructor(private dialog: MatDialog) {}

  openUpdateDialog() {
    this.dialog
      .open(EditSerieComponent, {
        data: { id: this.serie?.id },
      })
      .afterClosed()
      .subscribe(() => {
        console.log('Serie updated');
      });
  }
}
