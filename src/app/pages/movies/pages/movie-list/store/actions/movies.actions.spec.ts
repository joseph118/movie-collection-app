import * as Actions from './movies.actions';

describe('MoviesActions', () => {
  it('should create a getMovies action containing a payload', () => {
    const payload = { text: 'test', genres: [] };
    const action = Actions.getMovies({ payload });

    expect(action).toEqual({
      type: Actions.MoviesActionType.getMovies,
      payload
    });
  });

  it('should create a getMoviesSuccess action containing a payload', () => {
    const payload = { movies: [], id: 0 };
    const action = Actions.getMoviesSuccess({ payload });

    expect(action).toEqual({
      type: Actions.MoviesActionType.getMoviesSuccess,
      payload
    });
  });

  it('should create a getMoviesFailure action containing a payload', () => {
    const payload = { error: '', id: 0 };
    const action = Actions.getMoviesFailure({ payload });

    expect(action).toEqual({
      type: Actions.MoviesActionType.getMoviesFailure,
      payload
    });
  });
});
