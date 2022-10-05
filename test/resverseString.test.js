const reverseString = require('../src/modules/reverseString');

test('hello should be olleh', () => {
    expect(reverseString('hello')).toBe('olleh');
});