import { ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { MoviesState, reducer as movieReducer } from './movies.reducer';

export interface ApplicationState {
  movies: MoviesState;
}

export const reducers: ActionReducerMap<ApplicationState> = {
  movies: movieReducer
};

export const metaReducers: MetaReducer<ApplicationState>[] = !environment.production ? [] : [];

export const selectMoviesState = (state: ApplicationState) => state.movies;
export const selectMovies = createSelector(selectMoviesState, (state: MoviesState) => state.data);
export const selectMoviesError = createSelector(selectMoviesState, (state: MoviesState) => state.error);
export const selectMoviesLoading = createSelector(selectMoviesState, (state: MoviesState) => state.loading);
