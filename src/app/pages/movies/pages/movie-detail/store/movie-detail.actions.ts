import { createAction, props } from '@ngrx/store';
import { Movie } from '../../../../../models/movie.model';

export enum MovieDetailActionType {
  getMovieDetail = '[Movie Detail] Get Movie',
  getMovieDetailSuccess = '[Movie Detail] Get Movie Success',
  getMovieDetailFailure = '[Movie Detail] Get Movie Failure'
}

export const getMovieDetail = createAction(MovieDetailActionType.getMovieDetail, props<{ payload: string }>());
export const getMovieDetailSuccess = createAction(
  MovieDetailActionType.getMovieDetailSuccess,
  props<{ payload: Movie }>()
);
export const getMovieDetailFailure = createAction(
  MovieDetailActionType.getMovieDetailFailure,
  props<{ payload: string }>()
);
