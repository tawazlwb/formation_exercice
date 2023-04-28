import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from 'src/app/providers/series/series.service';

@Component({
  selector: 'app-edit-serie',
  templateUrl: './edit-serie.component.html',
  styleUrls: ['./edit-serie.component.scss'],
})
export class EditSerieComponent {
  private id = this.route.snapshot.params['id'];

  constructor(private service: SeriesService, private route: ActivatedRoute) {}

  nextEpisode() {
    this.service.updateSerieEpisode(this.id).subscribe(() => {
      console.log('Serie updated');
    });
  }

  nextSeason() {
    this.service.updateSerieSeason(this.id).subscribe(() => {
      console.log('Serie updated');
    });
  }

  watched() {
    this.service.markAsWatched(this.id).subscribe(() => {
      console.log('Serie updated');
    });

  }
}
