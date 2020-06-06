import * as fromReducer from '../reducers/movie-detail.reducer';
import * as fromActions from '../movie-detail.actions';

describe('MovieDetailReducer', () => {
  afterEach(() => {
    fromReducer.initialState.error = '';
    fromReducer.initialState.loading = false;
    fromReducer.initialState.movie = null;
  });

  it('should return the state with loading flag true', () => {
    const { initialState } = fromReducer;
    const payload = 'id';
    const action = fromActions.getMovieDetail({ payload });
    const state = fromReducer.reducer(initialState, action);

    expect(state).toEqual({ ...initialState, loading: true });
  });

  it('should return the state with movie', () => {
    const { initialState } = fromReducer;
    const payload = null;
    const action = fromActions.getMovieDetailSuccess({ payload });
    const state = fromReducer.reducer(initialState, action);

    expect(state).toEqual({ ...initialState, movie: payload });
  });

  it('should return the state with error', () => {
    const { initialState } = fromReducer;
    const payload = 'error';
    const action = fromActions.getMovieDetailFailure({ payload });
    const state = fromReducer.reducer(initialState, action);

    expect(state).toEqual({ ...initialState, error: payload });
  });
});
