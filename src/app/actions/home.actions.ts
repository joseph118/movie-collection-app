import { createAction, props } from '@ngrx/store';
import { Movies } from '../models/movie.model';

export enum HomeActionType {
  loadTopRatedMovies = '[Home] Load Top Rated Movies',
  loadTopRatedMoviesSuccess = '[Home] Load Top Rated Movies Success',
  loadTopRatedMoviesFailure = '[Home] Load Top Rated Movies Failure'
}

export const loadTopRatedMovies = createAction(HomeActionType.loadTopRatedMovies, props<{ payload: number }>());

export const loadTopRatedMoviesSuccess = createAction(
  HomeActionType.loadTopRatedMoviesSuccess,
  props<{ payload: Movies }>()
);

export const loadTopRatedMoviesFailure = createAction(
  HomeActionType.loadTopRatedMoviesFailure,
  props<{ payload: string }>()
);
