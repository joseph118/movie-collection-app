import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getMovies, MoviesActionType } from '../actions/movies.actions';
import { catchError, concatMap, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { MoviesService } from '../../../../../../services/movies.service';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { getMovieListRequestId } from '../reducer';

@Injectable()
export class MoviesEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getMovies),
      concatMap(action => of(action).pipe(withLatestFrom(this.store$.select(getMovieListRequestId)))),
      mergeMap(([action, requestId]) =>
        this.movieService.getFilteredMovies(action.payload?.text, action.payload?.genres).pipe(
          map(movies => ({ type: MoviesActionType.getMoviesSuccess, payload: { movies, id: requestId } })),
          catchError(() =>
            of({ type: MoviesActionType.getMoviesFailure, payload: { error: 'Load movies error', id: requestId } })
          )
        )
      )
    )
  );

  constructor(private store$: Store, private actions$: Actions, private movieService: MoviesService) {}
}
