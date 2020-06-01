import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadMovies, MovieActions } from '../actions/movie/movie.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { MovieService } from '../services/movie/movie.service';
import { of } from 'rxjs';

@Injectable()
export class MovieEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMovies),
      mergeMap(() =>
        this.movieService.getMovies().pipe(
          map(movies => ({ type: MovieActions.loadMoviesSuccess, data: movies })),
          catchError(() => of({ type: MovieActions.loadMoviesFailure }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private movieService: MovieService) {}
}
