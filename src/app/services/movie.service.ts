import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { movies } from './data/movie.mock-data';
import { Movie, Movies } from '../types/movie.type';
import { GenreType } from '../types/genre.type';
import { delay, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  /**
   * Simulating API calls
   */
  public getMovies(): Observable<Movies> {
    return of(movies).pipe(
      tap(x => console.log(x)),
      delay(1000)
    );
  }

  public getMoviesSortedByRating(limit?: number, order?: 'ASC' | 'DESC'): Observable<Movies> {
    return this.getMovies().pipe(
      map(movies =>
        movies.sort((movieA, movieB) => {
          const comparison = Number.parseInt(movieA.rate) > Number.parseInt(movieB.rate) ? -1 : 1;
          return order === 'DESC' ? comparison * -1 : comparison;
        })
      ),
      map(movies => (limit ? movies.slice(0, limit) : movies))
    );
  }

  public getMovieById(id: number): Observable<Movie> {
    return this.getMovies().pipe(map(movies => movies.find(movie => movie.id === id)));
  }

  public getFilteredMovies(text?: string, genres?: GenreType[]): Observable<Movies> {
    const filterText = text ? text.toLowerCase() : null;

    return this.getMovies().pipe(
      map(movies => {
        if (filterText) {
          movies = movies.filter(
            movie =>
              movie.name.toLowerCase().includes(filterText) || movie.description.toLowerCase().includes(filterText)
          );
        }

        if (genres?.length) {
          movies.filter(movie => {
            return genres.find(genre => movie.genres.filter(movieGenre => genre === movieGenre));
          });
        }

        return movies;
      })
    );
  }
}
