import * as fromFeature from '../../../movie-list/store/reducer';
import * as fromMovieDetail from './movie-detail.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export const movieDetailFeatureKey = 'movieDetail';

export interface MovieDetailState {
  detail: fromMovieDetail.State;
}

export interface State extends fromFeature.State {
  [movieDetailFeatureKey]: MovieDetailState;
}

export const reducers: ActionReducerMap<MovieDetailState> = {
  detail: fromMovieDetail.reducer
};

// States Selectors
export const selectMovieDetailState = createFeatureSelector<State, MovieDetailState>(movieDetailFeatureKey);
export const selectDetailState = createSelector(selectMovieDetailState, (state: MovieDetailState) => state.detail);

// Selectors
export const getMovieDetail = createSelector(selectDetailState, fromMovieDetail.getMovie);
export const getMovieDetailLoading = createSelector(selectDetailState, fromMovieDetail.getLoading);
export const getMovieDetailError = createSelector(selectDetailState, fromMovieDetail.getError);
