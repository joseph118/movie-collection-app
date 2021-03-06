import { createAction, props } from '@ngrx/store';
import { Movies } from '../../../models/movie.model';

export enum TopRatedMoviesActionType {
  getTopRatedMovies = '[Top Rated] Get Top Rated Movies',
  getTopRatedMoviesSuccess = '[Top Rated] Get Top Rated Movies Success',
  getTopRatedMoviesFailure = '[Top Rated] Get Top Rated Movies Failure'
}

export const getTopRatedMovies = createAction(TopRatedMoviesActionType.getTopRatedMovies, props<{ payload: number }>());

export const getTopRatedMoviesSuccess = createAction(
  TopRatedMoviesActionType.getTopRatedMoviesSuccess,
  props<{ payload: Movies }>()
);

export const getTopRatedMoviesFailure = createAction(
  TopRatedMoviesActionType.getTopRatedMoviesFailure,
  props<{ payload: string }>()
);
