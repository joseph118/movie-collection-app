import * as fromReducer from '../reducers/top-rated-movies.reducer';
import * as fromActions from '../top-rated-movies.actions';

describe('TopRatedMoviesReducer', () => {
  afterEach(() => {
    fromReducer.initialState.error = '';
    fromReducer.initialState.loading = false;
    fromReducer.initialState.movies = null;
  });

  it('should return the state with loading flag true', () => {
    const { initialState } = fromReducer;
    const payload = 5;
    const action = fromActions.getTopRatedMovies({ payload });
    const state = fromReducer.reducer(initialState, action);

    expect(state).toEqual({ ...initialState, loading: true });
  });

  it('should return the state with movies', () => {
    const { initialState } = fromReducer;
    const payload = [];
    const action = fromActions.getTopRatedMoviesSuccess({ payload });
    const state = fromReducer.reducer(initialState, action);

    expect(state).toEqual({ ...initialState, movies: payload });
  });

  it('should return the state with error', () => {
    const { initialState } = fromReducer;
    const payload = 'error';
    const action = fromActions.getTopRatedMoviesFailure({ payload });
    const state = fromReducer.reducer(initialState, action);

    expect(state).toEqual({ ...initialState, error: payload });
  });
});
