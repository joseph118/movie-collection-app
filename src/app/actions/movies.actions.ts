import { createAction, props } from '@ngrx/store';
import { Movies } from '../types/movie.type';
import { Genres } from '../types/genre.type';

export enum MoviesActionType {
  loadMovies = '[Movies] Load Movies',
  loadMoviesSuccess = '[Movies] Load Movies Success',
  loadMoviesFailure = '[Movies] Load Movies Failure'
}

export const loadMovies = createAction(
  MoviesActionType.loadMovies,
  props<{ payload: { text?: string; genres?: Genres } }>()
);
export const loadMoviesSuccess = createAction(MoviesActionType.loadMoviesSuccess, props<{ payload: Movies }>());
export const loadMoviesFailure = createAction(MoviesActionType.loadMoviesFailure, props<{ payload: string }>());
