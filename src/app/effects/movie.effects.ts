import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadMovies, filterMovies, MoviesActionType } from '../actions/movies.actions';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { MovieService } from '../services/movie.service';
import { of } from 'rxjs';

@Injectable()
export class MovieEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMovies),
      mergeMap(() => {
        return this.movieService.getMovies().pipe(
          map(movies => ({ type: MoviesActionType.loadMoviesSuccess, payload: movies })),
          catchError(() => of({ type: MoviesActionType.loadMoviesFailure, payload: 'Load movie error' }))
        );
      })
    )
  );

  filterMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(filterMovies),
      map(action => action.payload),
      switchMap(payload => {
        return this.movieService.getFilteredMovies(payload.text, payload.genres).pipe(
          map(movies => ({ type: MoviesActionType.filterMoviesSuccess, payload: movies })),
          catchError(() => of({ type: MoviesActionType.filterMoviesFailure, payload: 'Filter error' }))
        );
      })
    )
  );

  constructor(private actions$: Actions, private movieService: MovieService) {}
}
