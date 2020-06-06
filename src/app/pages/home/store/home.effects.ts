import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MoviesService } from '../../../services/movies.service';
import { HomeActionType, loadTopRatedMovies } from './home.actions';

@Injectable()
export class HomeEffects {
  topRatedMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTopRatedMovies),
      mergeMap(action =>
        this.movieService.getMoviesSortedByRating(action.payload, 'DESC').pipe(
          map(movies => ({ type: HomeActionType.loadTopRatedMoviesSuccess, payload: movies })),
          catchError(() =>
            of({ type: HomeActionType.loadTopRatedMoviesFailure, payload: 'Load top rated movies error' })
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private movieService: MoviesService) {}
}
