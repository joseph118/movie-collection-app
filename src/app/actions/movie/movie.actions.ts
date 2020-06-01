import { createAction, props } from '@ngrx/store';
import { Movies } from '../../types/movie.type';

export const loadMovies = createAction('[Movie] Load Movies');

export const loadMoviesSuccess = createAction('[Movie] Load Movies Success', props<{ data: Movies }>());

export const loadMoviesFailure = createAction('[Movie] Load Movies Failure', props<{ error: string }>());
