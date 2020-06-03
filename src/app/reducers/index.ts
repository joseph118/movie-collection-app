import { ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { MoviesState, reducer as moviesReducer } from './movies.reducer';
import { FilterState, reducer as filtersReducer } from './filters.reducer';
import { HomeState, reducer as homeReducer } from './home.reducer';

export interface ApplicationState {
  movies: MoviesState;
  filters: FilterState;
  home: HomeState;
}

export const reducers: ActionReducerMap<ApplicationState> = {
  movies: moviesReducer,
  filters: filtersReducer,
  home: homeReducer
};

export const metaReducers: MetaReducer<ApplicationState>[] = !environment.production ? [] : [];

export const selectMoviesState = (state: ApplicationState) => state.movies;
export const selectMovies = createSelector(selectMoviesState, (state: MoviesState) => state.data);
export const selectMoviesError = createSelector(selectMoviesState, (state: MoviesState) => state.error);
export const selectMoviesLoading = createSelector(selectMoviesState, (state: MoviesState) => state.loading);

export const selectFiltersState = (state: ApplicationState) => state.filters;
export const selectFilterText = createSelector(selectFiltersState, (state: FilterState) => state.text);
export const selectFilterGenres = createSelector(selectFiltersState, (state: FilterState) => state.genres);

export const selectHomeState = (state: ApplicationState) => state.home;
export const selectTopRatedMovies = createSelector(selectHomeState, (state: HomeState) => state.topRatedMovies);
