import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private readonly BASE_URL = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getSeries() {
    return this.http.get<any[]>(this.BASE_URL + 'series');
  }
}
