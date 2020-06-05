import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getMovie, MovieActionType } from '../actions/movie.actions';
import { catchError, concatMap, map, mergeMap, tap, withLatestFrom } from 'rxjs/operators';
import { of, throwError } from 'rxjs';
import { selectMovies } from '../reducers';
import { Store } from '@ngrx/store';
import { MoviesService } from '../services/movies.service';

@Injectable()
export class MovieEffects {
  getMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getMovie),
      concatMap(action => of(action).pipe(withLatestFrom(this.store$.select(selectMovies)))),
      map(([action, movies]) => {
        return {
          action: action,
          cachedMovie: movies?.find(movie => movie.key === action.payload)
        };
      }),
      mergeMap(data => {
        if (data.cachedMovie) {
          return of({ type: MovieActionType.getMovieSuccess, payload: data.cachedMovie });
        } else {
          return this.movieService.getMovieByKey(data.action.payload).pipe(
            tap(movie => {
              if (!movie) {
                throw new Error('Error while retrieving movie, possibly may have been deleted.');
              }
            }),
            map(movie => ({ type: MovieActionType.getMovieSuccess, payload: movie })),
            catchError(error => of({ type: MovieActionType.getMovieFailure, payload: error || 'Load movie error' }))
          );
        }
      })
    )
  );

  constructor(private store$: Store, private actions$: Actions, private movieService: MoviesService) {}
}
