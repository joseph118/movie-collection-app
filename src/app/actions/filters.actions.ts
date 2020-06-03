import { createAction, props } from '@ngrx/store';
import { GenreType } from '../types/genre.type';

export enum FiltersActionType {
  filterByText = '[Movies] Filter By Text',
  filterByTextSuccess = '[Movies] Filter By Text Success',
  filterByGenre = '[Movies] Filter By Genre',
  filterByGenreSuccess = '[Movies] Filter By Genre Success'
}

export const filterByText = createAction(FiltersActionType.filterByText, props<{ payload: string }>());
export const filterByTextSuccess = createAction(FiltersActionType.filterByTextSuccess);
export const filterByGenre = createAction(FiltersActionType.filterByGenre, props<{ payload: GenreType[] }>());
export const filterByGenreSuccess = createAction(FiltersActionType.filterByGenreSuccess);
