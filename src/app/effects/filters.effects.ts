import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filterByGenre, filterByText, FiltersActionType } from '../actions/filters.actions';
import { concatMap, map, tap, withLatestFrom } from 'rxjs/operators';
import { loadMovies, MoviesActionType } from '../actions/movies.actions';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { ApplicationState, selectFilterGenres, selectFilterText } from '../reducers';

@Injectable()
export class FiltersEffects {
  genreFilter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(filterByGenre),
      concatMap(action => of(action).pipe(withLatestFrom(this.store$.select(selectFilterText)))),
      tap(([action, text]) => {
        this.store$.dispatch(loadMovies({ payload: { genres: action.payload, text } }));
      }),
      map(() => ({ type: FiltersActionType.filterByGenreSuccess }))
    )
  );

  textFilter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(filterByText),
      concatMap(action => of(action).pipe(withLatestFrom(this.store$.select(selectFilterGenres)))),
      tap(([action, genres]) => {
        this.store$.dispatch(loadMovies({ payload: { text: action.payload, genres } }));
      }),
      map(() => ({ type: FiltersActionType.filterByTextSuccess }))
    )
  );

  constructor(private actions$: Actions, private store$: Store<ApplicationState>) {}
}
