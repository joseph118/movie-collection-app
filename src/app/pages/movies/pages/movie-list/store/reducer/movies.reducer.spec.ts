import * as fromReducer from './movies.reducer';
import * as fromActions from '../actions/movies.actions';
import { getRequestId } from './movies.reducer';

describe('MoviesReducer', () => {
  afterEach(() => {
    fromReducer.initialState.error = '';
    fromReducer.initialState.movies = null;
    fromReducer.initialState.loading = false;
    fromReducer.initialState.requestId = 0;
  });

  it('should return the state with loading true and request ID incremented', () => {
    const { initialState } = fromReducer;
    const payload = null;
    const action = fromActions.getMovies({ payload });
    const state = fromReducer.reducer(initialState, action);

    expect(state).toEqual({ ...initialState, loading: true, requestId: 1 });
  });

  it('should return the state with updated movies', () => {
    const { initialState } = fromReducer;
    const payload = { movies: [], id: 0 };
    const action = fromActions.getMoviesSuccess({ payload });
    const state = fromReducer.reducer(initialState, action);

    expect(state).toEqual({ ...initialState, movies: payload.movies });
  });

  it('should return the state with error', () => {
    const { initialState } = fromReducer;
    const payload = { error: '', id: 0 };
    const action = fromActions.getMoviesFailure({ payload });
    const state = fromReducer.reducer(initialState, action);
    expect(state).toEqual({ ...initialState, error: payload.error });
  });
});
