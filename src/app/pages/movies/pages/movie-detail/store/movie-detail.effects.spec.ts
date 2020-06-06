import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { MovieDetailEffects } from './movie-detail.effects';

describe('MovieDetailEffects', () => {
  let actions$: Observable<any>;
  let effects: MovieDetailEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieDetailEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.inject(MovieDetailEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
