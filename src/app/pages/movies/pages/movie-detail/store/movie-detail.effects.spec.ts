import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { MovieDetailEffects } from './movie-detail.effects';
import { provideMockStore } from '@ngrx/store/testing';
import * as fromActions from './movie-detail.actions';
import { MoviesService } from '../../../../../services/movies.service';
import { getMovieList } from '../../movie-list/store/reducer';

describe('MovieDetailEffects', () => {
  const mockResponse = [{ key: 'deadpool' }];
  let actions$: Observable<any>;
  let effects: MovieDetailEffects;
  let moviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MovieDetailEffects,
        provideMockStore({
          selectors: [{ selector: getMovieList, value: mockResponse }]
        }),
        provideMockActions(() => actions$),
        {
          provide: MoviesService,
          useValue: jasmine.createSpyObj('MoviesService', ['getMovieByKey'])
        }
      ]
    });

    effects = TestBed.inject(MovieDetailEffects);
    moviesService = TestBed.inject(MoviesService);
  });

  it('should request movie from service and return getMovieDetailSuccess action with payload', done => {
    const payload = 'deadpool';
    actions$ = of({ type: fromActions.MovieDetailActionType.getMovieDetail, payload });

    effects.getMovie$.subscribe(action => {
      expect(action.type).toBe(fromActions.MovieDetailActionType.getMovieDetailSuccess);
      expect(action.payload).toEqual(mockResponse[0]);
      done();
    });
  });
});
