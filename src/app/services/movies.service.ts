import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { movies } from './data/movie.mock-data';
import { delay, map } from 'rxjs/operators';
import { Movie, Movies } from '../models/movie.model';
import { GenreType } from '../models/genre.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private static readonly assetsMovieCoversPath = 'assets/images/movie-covers/';
  /**
   * Simulating API calls
   */
  public getMovies(): Observable<Movies> {
    return of(movies).pipe(
      map(movies => movies.map(movie => ({ ...movie, img: `${MoviesService.assetsMovieCoversPath}${movie.img}` }))),
      delay(1000)
    );
  }

  public getMoviesSortedByRating(limit?: number, order?: 'ASC' | 'DESC'): Observable<Movies> {
    return this.getMovies().pipe(
      map(movies =>
        movies.sort((movieA, movieB) => {
          const comparison = Number.parseInt(movieA.rate) > Number.parseInt(movieB.rate) ? -1 : 1;
          return order === 'DESC' ? comparison : comparison * -1;
        })
      ),
      map(movies => (limit ? movies.slice(0, limit) : movies))
    );
  }

  public getMovieByKey(key: string): Observable<Movie> {
    return this.getMovies().pipe(map(movies => movies.find(movie => movie.key === key)));
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
          movies = movies.filter(movie => {
            return genres.find(genre => movie.genres.find(movieGenre => genre === movieGenre));
          });
        }

        return movies;
      })
    );
  }
}
