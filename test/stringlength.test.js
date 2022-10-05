const stringlength = require('../src/modules/stringlength');
test('contar caracteres de un string', () => {
    expect(stringlength('prueba')).toBe(6);
  });

test('contar caracteres de un string', () => {
    expect(stringlength('osvaldojosebarrioscortina')).toBe('error');
  });