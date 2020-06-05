import { createAction, props } from '@ngrx/store';
import { Movie } from '../models/movie.model';

export enum MovieActionType {
  getMovie = '[Movie] Get Movie',
  getMovieSuccess = '[Movie] Get Movie Success',
  getMovieFailure = '[Movie] Get Movie Failure'
}

export const getMovie = createAction(MovieActionType.getMovie, props<{ payload: number }>());
export const getMovieSuccess = createAction(MovieActionType.getMovieSuccess, props<{ payload: Movie }>());
export const getMovieFailure = createAction(MovieActionType.getMovieFailure, props<{ payload: string }>());
