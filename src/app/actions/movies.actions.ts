import { createAction, props } from '@ngrx/store';
import { Genres } from '../models/genre.model';
import { Movies } from '../models/movie.model';

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
