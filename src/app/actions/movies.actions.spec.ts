import * as fromMovie from './movies.actions';

describe('loadMovies', () => {
  it('should return an action', () => {
    expect(fromMovie.loadMovies(null).type).toBe('[Movie] Load Movies');
  });
});
