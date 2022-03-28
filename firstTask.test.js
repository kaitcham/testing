const stringLength = require('./firstTask')

test('should hello characters equal 5', () => {
    expect(stringLength('hello')).toBe(5);
});