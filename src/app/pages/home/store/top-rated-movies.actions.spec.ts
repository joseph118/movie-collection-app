import * as Actions from './top-rated-movies.actions';

describe('TopRatedMoviesAction', () => {
  it('should create a getTopRatedMovies action', () => {
    const action = Actions.getTopRatedMovies({ payload: 5 });
    expect(action.type).toEqual(Actions.TopRatedMoviesActionType.getTopRatedMovies);
  });

  it('should create a getTopRatedMoviesSuccess action containing a payload', () => {
    const payload = [];
    const action = Actions.getTopRatedMoviesSuccess({ payload });

    expect(action).toEqual({
      type: Actions.TopRatedMoviesActionType.getTopRatedMoviesSuccess,
      payload
    });
  });

  it('should create a getTopRatedMovies action containing a payload', () => {
    const payload = 'error';
    const action = Actions.getTopRatedMoviesFailure({ payload });

    expect(action).toEqual({
      type: Actions.TopRatedMoviesActionType.getTopRatedMoviesFailure,
      payload
    });
  });
});
