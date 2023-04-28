import { Component } from '@angular/core';
import { SeriesService } from 'src/app/providers/series/series.service';

@Component({
  selector: 'app-list-series',
  templateUrl: './list-series.component.html',
  styleUrls: ['./list-series.component.scss']
})
export class ListSeriesComponent {

  series$ = this.service.getSeries();

  constructor(private service: SeriesService) {}

}
