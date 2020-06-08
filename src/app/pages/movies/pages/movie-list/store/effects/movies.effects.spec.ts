import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { provideMockStore } from '@ngrx/store/testing';
import * as fromActions from '../actions/movies.actions';
import { MoviesEffects } from './movies.effects';
import { MoviesService } from '../../../../../../services/movies.service';
import { Movies } from '../../../../../../models/movie.model';
import { getMovieListRequestId } from '../reducer';

describe('MoviesEffects', () => {
  let actions$: Observable<any>;
  let effects: MoviesEffects;
  let moviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MoviesEffects,
        provideMockStore({
          selectors: [{ selector: getMovieListRequestId, value: 1 }]
        }),
        provideMockActions(() => actions$),
        {
          provide: MoviesService,
          useValue: jasmine.createSpyObj('MoviesService', ['getFilteredMovies'])
        }
      ]
    });

    effects = TestBed.inject(MoviesEffects);
    moviesService = TestBed.inject(MoviesService);
  });

  it('should request data and return getMoviesSuccess action with payload', done => {
    const payload = null;
    const responseData = [];
    actions$ = of({ type: fromActions.MoviesActionType.getMovies, payload });

    moviesService.getFilteredMovies.and.returnValue(of(responseData));

    effects.loadMovies$.subscribe(action => {
      expect(action.type).toBe(fromActions.MoviesActionType.getMoviesSuccess);
      expect(action.payload.id).toBe(1);
      expect((action.payload as { movies: Movies; id: number }).movies).toEqual(responseData);
      done();
    });
  });
});
