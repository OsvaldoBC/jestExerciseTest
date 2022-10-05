const capitalize = require('../src/modules/capitalize.js');

describe("capitalize tests", () => {
  test("capitalize 1", () => {
    //Arrange
    const string = 'charles';

    //Act
    const result1 = capitalize(string);

    //Assert
    expect(result1).toEqual('Charles');
  });
});