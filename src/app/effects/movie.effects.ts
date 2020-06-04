import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getMovie, MovieActionType } from '../actions/movie.actions';
import { catchError, concatMap, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
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
          cachedMovie: movies?.find(movie => movie.id === action.payload)
        };
      }),
      mergeMap(data => {
        if (data.cachedMovie) {
          return of({ type: MovieActionType.getMovieSuccess, payload: data.cachedMovie });
        } else {
          return this.movieService.getMovieById(data.action.payload).pipe(
            map(movie => ({ type: MovieActionType.getMovieSuccess, payload: movie })),
            catchError(() => of({ type: MovieActionType.getMovieFailure, payload: 'Load movie error' }))
          );
        }
      })
    )
  );

  constructor(private store$: Store, private actions$: Actions, private movieService: MoviesService) {}
}
