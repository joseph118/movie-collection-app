import { createAction, props } from '@ngrx/store';
import { Movie, Movies } from '../types/movie.type';
import { GenreType } from '../types/genre.type';

export enum MoviesActionType {
  loadMovies = '[Movies] Load Movies',
  loadMoviesSuccess = '[Movies] Load Movies Success',
  loadMoviesFailure = '[Movies] Load Movies Failure',

  filterMovies = '[Movies] Filter Movies',
  filterMoviesSuccess = '[Movies] Filter Movies Success',
  filterMoviesFailure = '[Movies] Filter Movies Failure',

  getMovie = '[Movies] Get Movie',
  getMovieSuccess = '[Movies] Get Movie Success',
  getMovieFailure = '[Movies] Get Movie Failure'
}

export const loadMovies = createAction(MoviesActionType.loadMovies);
export const loadMoviesSuccess = createAction(MoviesActionType.loadMoviesSuccess, props<{ payload: Movies }>());
export const loadMoviesFailure = createAction(MoviesActionType.loadMoviesFailure, props<{ payload: string }>());
export const filterMovies = createAction(
  MoviesActionType.filterMovies,
  props<{ payload: { genres: GenreType[]; text: string } }>()
);
export const filterMoviesSuccess = createAction(MoviesActionType.filterMoviesSuccess, props<{ payload: Movies }>());
export const filterMoviesFailure = createAction(MoviesActionType.filterMoviesFailure, props<{ payload: string }>());
export const getMovie = createAction(MoviesActionType.getMovie, props<{ payload: { id: number } }>());
export const getMovieSuccess = createAction(MoviesActionType.getMovieSuccess, props<{ payload: Movie }>());
export const getMovieFailure = createAction(MoviesActionType.getMovieFailure, props<{ payload: string }>());
