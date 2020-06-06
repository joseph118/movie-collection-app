import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { FiltersEffects } from './filters.effects';
import { provideMockStore } from '@ngrx/store/testing';
import * as fromActions from '../actions/filters.actions';
import { ActivatedRoute, Router } from '@angular/router';
import objectContaining = jasmine.objectContaining;
import { genreType } from '../../../../models/genre.model';
import { getFilterGenres, getFilterText } from '../reducer';

describe('FiltersEffects', () => {
  const activatedRoute = null;
  let actions$: Observable<any>;
  let effects: FiltersEffects;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FiltersEffects,
        provideMockStore({
          selectors: [
            { selector: getFilterText, value: null },
            { selector: getFilterGenres, value: null }
          ]
        }),
        provideMockActions(() => actions$),
        {
          provide: Router,
          useValue: { navigate: jasmine.createSpy('navigate') }
        },
        {
          provide: ActivatedRoute,
          useValue: activatedRoute
        }
      ]
    });

    effects = TestBed.inject(FiltersEffects);
    router = TestBed.inject(Router);
  });

  it('should set the query parameters while returning filterByTextSuccess action', done => {
    const payload = 'search';
    actions$ = of({ type: fromActions.FiltersActionType.filterByText, payload });

    effects.filters$.subscribe(action => {
      expect(action.type).toBe(fromActions.FiltersActionType.filterByTextSuccess);
      expect(router.navigate).toHaveBeenCalledWith([], objectContaining({ queryParams: { text: payload } }));

      done();
    });
  });

  it('should set the query parameters while returning filterByGenreSuccess action', done => {
    const payload = [genreType.action];
    actions$ = of({ type: fromActions.FiltersActionType.filterByGenre, payload });

    effects.filters$.subscribe(action => {
      expect(action.type).toBe(fromActions.FiltersActionType.filterByGenreSuccess);
      expect(router.navigate).toHaveBeenCalledWith(
        [],
        objectContaining({ queryParams: { genres: payload.join(',') } })
      );

      done();
    });
  });

  it('should set the query parameters while returning clearFiltersSuccess action', done => {
    const payload = true;
    actions$ = of({ type: fromActions.FiltersActionType.clearFilters, payload });

    effects.clearFilters$.subscribe(action => {
      expect(action.type).toBe(fromActions.FiltersActionType.clearFiltersSuccess);
      expect(router.navigate).toHaveBeenCalledWith([], objectContaining({ queryParams: {} }));

      done();
    });
  });
});
