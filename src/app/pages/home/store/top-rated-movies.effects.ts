import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MoviesService } from '../../../services/movies.service';
import { TopRatedMoviesActionType, getTopRatedMovies } from './top-rated-movies.actions';

@Injectable()
export class TopRatedMoviesEffects {
  topRatedMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTopRatedMovies),
      mergeMap(action =>
        this.movieService.getMoviesSortedByRating(action.payload, 'DESC').pipe(
          map(movies => ({ type: TopRatedMoviesActionType.getTopRatedMoviesSuccess, payload: movies })),
          catchError(() =>
            of({ type: TopRatedMoviesActionType.getTopRatedMoviesFailure, payload: 'Load top rated movies error' })
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private movieService: MoviesService) {}
}
