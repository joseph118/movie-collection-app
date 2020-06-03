import * as fromFilters from './filters.actions';

describe('loadFilters', () => {
  it('should return an action', () => {
    expect(fromFilters.filterByText.type).toBe('[Movies] Filter By Text');
  });
});
