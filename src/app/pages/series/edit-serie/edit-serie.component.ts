import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SeriesService } from 'src/app/providers/series/series.service';

@Component({
  selector: 'app-edit-serie',
  templateUrl: './edit-serie.component.html',
  styleUrls: ['./edit-serie.component.scss'],
})
export class EditSerieComponent {
  id = this.data.id;

  constructor(
    private service: SeriesService,
    private ref: MatDialogRef<EditSerieComponent>,
    @Inject(MAT_DIALOG_DATA)
    private data: { id: number }
  ) {}

  nextEpisode() {
    this.service.updateSerieEpisode(this.id).subscribe(() => {
      this.ref.close();
    });
  }

  nextSeason() {
    this.service.updateSerieSeason(this.id).subscribe(() => {
      this.ref.close();
    });
  }

  watched() {
    this.service.markAsWatched(this.id).subscribe(() => {
      this.ref.close();
    });
  }
}
