import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TopRatedMoviesEffects } from './top-rated-movies.effects';

describe('TopRatedMoviesEffects', () => {
  let actions$: Observable<any>;
  let effects: TopRatedMoviesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopRatedMoviesEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.inject(TopRatedMoviesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
