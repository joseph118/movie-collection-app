import * as fromHome from './home.actions';

describe('loadTopRatedMovies', () => {
  it('should return an action', () => {
    expect(fromHome.loadTopRatedMovies({ payload: 5 }).type).toBe('[Home] Load Top Rated Movies');
  });
});
