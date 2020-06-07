import * as fromReducer from './movies.reducer';
import * as fromActions from '../actions/movies.actions';

describe('MoviesReducer', () => {
  afterEach(() => {
    fromReducer.initialState.error = '';
    fromReducer.initialState.movies = null;
    fromReducer.initialState.loading = false;
  });

  it('should return the state with loading flag', () => {
    const { initialState } = fromReducer;
    const payload = null;
    const action = fromActions.getMovies({ payload });
    const state = fromReducer.reducer(initialState, action);

    expect(state).toEqual({ ...initialState, loading: true });
  });

  it('should return the state with updated movies', () => {
    const { initialState } = fromReducer;
    const payload = [];
    const action = fromActions.getMoviesSuccess({ payload });
    const state = fromReducer.reducer(initialState, action);

    expect(state).toEqual({ ...initialState, movies: payload });
  });

  it('should return the state with error', () => {
    const { initialState } = fromReducer;
    const payload = 'error';
    const action = fromActions.getMoviesFailure({ payload });
    const state = fromReducer.reducer(initialState, action);

    expect(state).toEqual({ ...initialState, error: payload });
  });
});
