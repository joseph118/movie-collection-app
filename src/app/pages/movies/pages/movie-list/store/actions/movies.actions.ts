import { createAction, props } from '@ngrx/store';
import { Genres } from '../../../../../../models/genre.model';
import { Movies } from '../../../../../../models/movie.model';

export enum MoviesActionType {
  getMovies = '[Movies] Load Movies',
  getMoviesSuccess = '[Movies] Load Movies Success',
  getMoviesFailure = '[Movies] Load Movies Failure'
}

export const getMovies = createAction(
  MoviesActionType.getMovies,
  props<{ payload: { text?: string; genres?: Genres } }>()
);
export const getMoviesSuccess = createAction(MoviesActionType.getMoviesSuccess, props<{ payload: Movies }>());
export const getMoviesFailure = createAction(MoviesActionType.getMoviesFailure, props<{ payload: string }>());
