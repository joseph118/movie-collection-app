import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadMovies, MoviesActionType } from '../actions/movies.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { MoviesService } from '../services/movies.service';
import { of } from 'rxjs';

@Injectable()
export class MoviesEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMovies),
      map(action => action.payload),
      mergeMap(payload =>
        this.movieService.getFilteredMovies(payload?.text, payload?.genres).pipe(
          map(movies => ({ type: MoviesActionType.loadMoviesSuccess, payload: movies })),
          catchError(() => of({ type: MoviesActionType.loadMoviesFailure, payload: 'Load movie error' }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private movieService: MoviesService) {}
}
