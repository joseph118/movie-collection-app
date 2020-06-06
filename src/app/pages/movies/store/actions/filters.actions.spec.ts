import * as Actions from './filters.actions';

describe('FiltersAction', () => {
  it('should create a clearFilters action containing a payload', () => {
    const payload = false;
    const action = Actions.clearFilters({ payload });
    expect(action.type).toEqual(Actions.FiltersActionType.clearFilters);
  });

  it('should create a clearFiltersSuccess', () => {
    const action = Actions.clearFiltersSuccess();
    expect(action.type).toEqual(Actions.FiltersActionType.clearFiltersSuccess);
  });

  it('should create a filterByGenre action containing a payload', () => {
    const payload = [];
    const action = Actions.filterByGenre({ payload });
    expect(action.type).toEqual(Actions.FiltersActionType.filterByGenre);
  });

  it('should create a filterByGenreSuccess', () => {
    const action = Actions.filterByGenreSuccess();
    expect(action.type).toEqual(Actions.FiltersActionType.filterByGenreSuccess);
  });

  it('should create a filterByText action containing a payload', () => {
    const payload = 'test';
    const action = Actions.filterByText({ payload });

    expect(action).toEqual({
      type: Actions.FiltersActionType.filterByText,
      payload
    });
  });

  it('should create a filterByTextSuccess', () => {
    const action = Actions.filterByTextSuccess();
    expect(action.type).toEqual(Actions.FiltersActionType.filterByTextSuccess);
  });
});
