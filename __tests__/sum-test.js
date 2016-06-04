jest.unmock('../lib/sum');

describe('sum', function() {
  it('adds 1 + 2 to equal 3', function() {
    const sum = require('../lib/sum');
    expect(sum(1,2)).toBe(3);
  });
});
