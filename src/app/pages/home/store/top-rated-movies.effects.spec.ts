import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { TopRatedMoviesEffects } from './top-rated-movies.effects';
import { provideMockStore } from '@ngrx/store/testing';
import { MoviesService } from '../../../services/movies.service';
import * as fromActions from './top-rated-movies.actions';

describe('TopRatedMoviesEffects', () => {
  let actions$: Observable<any>;
  let effects: TopRatedMoviesEffects;
  let moviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TopRatedMoviesEffects,
        provideMockStore(),
        provideMockActions(() => actions$),
        {
          provide: MoviesService,
          useValue: jasmine.createSpyObj('MoviesService', ['getMoviesSortedByRating'])
        }
      ]
    });

    effects = TestBed.inject(TopRatedMoviesEffects);
    moviesService = TestBed.inject(MoviesService);
  });

  it('should request movies from service and return getTopRatedMoviesSuccess action with payload', done => {
    const responseData = [];
    moviesService.getMoviesSortedByRating.and.returnValue(of(responseData));

    actions$ = of({ type: fromActions.TopRatedMoviesActionType.getTopRatedMovies });

    effects.topRatedMovies$.subscribe(action => {
      expect(action.type).toBe(fromActions.TopRatedMoviesActionType.getTopRatedMoviesSuccess);
      expect(action.payload).toEqual(responseData);
      done();
    });
  });
});
