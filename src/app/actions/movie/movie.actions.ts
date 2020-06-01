import { createAction, props } from '@ngrx/store';
import { Movies } from '../../types/movie.type';

export enum MovieActions {
  loadMovies = '[Movie] Load Movies',
  loadMoviesSuccess = '[Movie] Load Movies Success',
  loadMoviesFailure = '[Movie] Load Movies Failure'
}

export const loadMovies = createAction(MovieActions.loadMovies);

export const loadMoviesSuccess = createAction(MovieActions.loadMoviesSuccess, props<{ data: Movies }>());

export const loadMoviesFailure = createAction(MovieActions.loadMoviesFailure, props<{}>());
