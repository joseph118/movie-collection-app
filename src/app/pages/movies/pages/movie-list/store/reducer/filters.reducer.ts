import { createReducer, on } from '@ngrx/store';
import * as FiltersAction from '../actions/filters.actions';
import { GenreType } from '../../../../../../models/genre.model';

export interface State {
  text: string;
  genres: GenreType[];
}

export const initialState: State = {
  text: '',
  genres: []
};

export const reducer = createReducer(
  initialState,
  on(FiltersAction.filterByGenre, (state, action) => ({ ...state, genres: action.payload })),
  on(FiltersAction.filterByGenreSuccess),
  on(FiltersAction.filterByText, (state, action) => ({ ...state, text: action.payload })),
  on(FiltersAction.filterByTextSuccess),
  on(FiltersAction.clearFilters, state => ({ text: '', genres: [] })),
  on(FiltersAction.clearFiltersSuccess)
);

export const getText = (state: State) => state.text;
export const getGenres = (state: State) => state.genres;
