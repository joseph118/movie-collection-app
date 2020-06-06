import { createAction, props } from '@ngrx/store';
import { Genres } from '../../../../models/genre.model';
import { Movies } from '../../../../models/movie.model';

export enum MoviesActionType {
  getMovies = '[Movies] Load Movies',
  getMoviesSuccess = '[Movies] Load Movies Success',
  getMoviesFailure = '[Movies] Load Movies Failure'
}

export const loadMovies = createAction(
  MoviesActionType.getMovies,
  props<{ payload: { text?: string; genres?: Genres } }>()
);
export const loadMoviesSuccess = createAction(MoviesActionType.getMoviesSuccess, props<{ payload: Movies }>());
export const loadMoviesFailure = createAction(MoviesActionType.getMoviesFailure, props<{ payload: string }>());
