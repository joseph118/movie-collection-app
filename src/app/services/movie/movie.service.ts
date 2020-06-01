import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { movies } from './data/movie.mock-data';
import { Movie } from '../../types/movie.type';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  public getMovies(): Observable<Movie[]> {
    return of(movies);
  }
}
