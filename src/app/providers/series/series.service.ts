import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  private readonly BASE_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getSeries() {
    return this.http.get<ISerie[]>(this.BASE_URL + 'series');
  }

  private getSerie(id: number) {
    return this.http.get<ISerie>(this.BASE_URL + 'series/' + id);
  }

  createSerie(serie: Partial<ISerie>) {
    return this.http.post<ISerie>(this.BASE_URL + 'series', {
      ...serie,
      episode: 1,
      season: 1,
      watched: false,
    });
  }

  updateSerieEpisode(id: number) {
    const serie$ = this.getSerie(id);
    const episodeNb$ = serie$.pipe(map((serie) => serie.episode + 1));

    return episodeNb$.pipe(
      switchMap((episode) =>
        this.http.patch<ISerie>(this.BASE_URL + 'series/' + id, { episode })
      )
    );
  }

  updateSerieSeason(id: number) {
    const serie$ = this.getSerie(id);
    const seasonNb$ = serie$.pipe(map((serie) => serie.season + 1));

    return seasonNb$.pipe(
      switchMap((season) =>
        this.http.patch<ISerie>(this.BASE_URL + 'series/' + id, {
          episode: 1,
          season,
        })
      )
    );
  }

  markAsWatched(id: number) {
    return this.http.patch<ISerie>(this.BASE_URL + 'series/' + id, {
      watched: true,
    });
  }
}
