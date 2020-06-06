import * as Actions from './movie-detail.actions';

describe('MovieDetailActions', () => {
  it('should create a getMovieDetail action containing a payload', () => {
    const payload = 'id';
    const action = Actions.getMovieDetail({ payload });

    expect(action).toEqual({
      type: Actions.MovieDetailActionType.getMovieDetail,
      payload
    });
  });

  it('should create a getMovieDetailSuccess action containing a payload', () => {
    const payload = null;
    const action = Actions.getMovieDetailSuccess({ payload });

    expect(action).toEqual({
      type: Actions.MovieDetailActionType.getMovieDetailSuccess,
      payload
    });
  });

  it('should create a getMoviesFailure action containing a payload', () => {
    const payload = 'error';
    const action = Actions.getMovieDetailFailure({ payload });

    expect(action).toEqual({
      type: Actions.MovieDetailActionType.getMovieDetailFailure,
      payload
    });
  });
});
