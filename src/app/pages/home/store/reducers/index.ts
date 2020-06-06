import * as fromRoot from '../../../../reducers';
import * as fromTopRatedMovies from './top-rated-movies.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export const homeFeatureKey = 'home';

export interface HomeState {
  topRated: fromTopRatedMovies.State;
}

export interface State extends fromRoot.State {
  [homeFeatureKey]: HomeState;
}

export const reducers: ActionReducerMap<HomeState> = {
  topRated: fromTopRatedMovies.reducer
};

// States Selectors
export const selectHomeState = createFeatureSelector<State, HomeState>(homeFeatureKey);
export const selectTopRatedMoviesState = createSelector(selectHomeState, (state: HomeState) => state.topRated);

// Selectors
export const getTopRatedMovies = createSelector(selectTopRatedMoviesState, fromTopRatedMovies.getTopRatedMovies);
export const getTopRatedLoading = createSelector(selectTopRatedMoviesState, fromTopRatedMovies.getLoading);
export const getTopRatedError = createSelector(selectTopRatedMoviesState, fromTopRatedMovies.getError);
