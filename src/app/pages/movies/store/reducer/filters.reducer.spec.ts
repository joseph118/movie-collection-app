import * as fromReducer from '../reducer/filters.reducer';
import * as fromActions from '../actions/filters.actions';

describe('FiltersReducer', () => {
  afterEach(() => {
    fromReducer.initialState.text = '';
    fromReducer.initialState.genres = [];
  });

  it('should return the state with updated text', () => {
    const { initialState } = fromReducer;
    const payload = 'search';
    const action = fromActions.filterByText({ payload });
    const state = fromReducer.reducer(initialState, action);

    expect(state).toEqual({ ...initialState, text: payload });
  });

  it('should return the state with updated genres', () => {
    const { initialState } = fromReducer;
    const payload = [];
    const action = fromActions.filterByGenre({ payload });
    const state = fromReducer.reducer(initialState, action);

    expect(state).toEqual({ ...initialState, genres: payload });
  });

  it('should return the state with empty text and genres', () => {
    const { initialState } = fromReducer;
    const payload = false;
    const action = fromActions.clearFilters({ payload });
    const state = fromReducer.reducer(initialState, action);

    expect(state).toEqual({ text: '', genres: [] });
  });
});
