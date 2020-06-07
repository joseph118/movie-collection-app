import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, mergeMap, tap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { MoviesService } from '../../../../../services/movies.service';
import { getMovieDetail, MovieDetailActionType } from './movie-detail.actions';
import { getMovieList } from '../../movie-list/store/reducer';

@Injectable()
export class MovieDetailEffects {
  getMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getMovieDetail),
      concatMap(action => of(action).pipe(withLatestFrom(this.store$.select(getMovieList)))),
      map(([action, movies]) => {
        return {
          action: action,
          cachedMovie: movies?.find(movie => movie.key === action.payload)
        };
      }),
      mergeMap(data => {
        if (data.cachedMovie) {
          return of({ type: MovieDetailActionType.getMovieDetailSuccess, payload: data.cachedMovie });
        } else {
          return this.movieService.getMovieByKey(data.action.payload).pipe(
            tap(movie => {
              if (!movie) {
                throw new Error('Error while retrieving movie, possibly may have been deleted.');
              }
            }),
            map(movie => ({ type: MovieDetailActionType.getMovieDetailSuccess, payload: movie })),
            catchError(error =>
              of({ type: MovieDetailActionType.getMovieDetailFailure, payload: error || 'Load movie error' })
            )
          );
        }
      })
    )
  );

  constructor(private store$: Store, private actions$: Actions, private movieService: MoviesService) {}
}
