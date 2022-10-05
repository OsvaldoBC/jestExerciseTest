const Calculator = require('../src/modules/calculator.js');

describe("calculator sum tests", () => {
  test("calculator sum 1", () => {
    //Arrange
    const a = 1;
    const b = 2;

    //Act
    const result1 = Calculator.add(a, b);

    //Assert
    expect(result1).toEqual(3);
  });

  test("calculator sum 2", () => {
    //Arrange
    const a = -15;
    const b = 10;

    //Act
    const result2 = Calculator.add(a, b);

    //Assert
    expect(result2).toEqual(-5);
  });

  test("calculator sum 3", () => {
    //Arrange
    const a = 1.5;
    const b = 2.3;

    //Act
    const result3 = Calculator.add(a, b);

    //Assert
    expect(result3).toBeCloseTo(3.8);
  });
});

describe("calculator subtract tests", () => {
  test("calculator subtract 1", () => {
    //Arrange
    const a = 5;
    const b = 2;

    //Act
    const result1 = Calculator.subtract(a, b);

    //Assert
    expect(result1).toEqual(3);
  });

  test("calculator subtract 2", () => {
    //Arrange
    const a = -15;
    const b = 10;

    //Act
    const result2 = Calculator.subtract(a, b);

    //Assert
    expect(result2).toEqual(-25);
  });

  test("calculator subtract 3", () => {
    //Arrange
    const a = 1.5;
    const b = 2.3;

    //Act
    const result3 = Calculator.subtract(a, b);

    //Assert
    expect(result3).toBeCloseTo(-0.8);
  });
});

describe("calculator multiply tests", () => {
  test("calculator multiply 1", () => {
    //Arrange
    const a = 1;
    const b = 2;

    //Act
    const result1 = Calculator.multiply(a, b);

    //Assert
    expect(result1).toEqual(2);
  });

  test("calculator multiply 2", () => {
    //Arrange
    const a = -15;
    const b = 10;

    //Act
    const result2 = Calculator.multiply(a, b);

    //Assert
    expect(result2).toEqual(-150);
  });

  test("calculator multiply 3", () => {
    //Arrange
    const a = 1.5;
    const b = 2.3;

    //Act
    const result3 = Calculator.multiply(a, b);

    //Assert
    expect(result3).toBeCloseTo(3.45);
  });
});

  describe("calculator divide tests", () => {
    test("calculator divide 1", () => {
      //Arrange
      const a = 6;
      const b = 3;
  
      //Act
      const result1 = Calculator.divide(a, b);
  
      //Assert
      expect(result1).toEqual(2);
    });
  
    test("calculator divide 2", () => {
      //Arrange
      const a = -15;
      const b = 3;
  
      //Act
      const result2 = Calculator.divide(a, b);
  
      //Assert
      expect(result2).toEqual(-5);
    });
  
    test("calculator divide 3", () => {
      //Arrange
      const a = 8.2;
      const b = 2;
  
      //Act
      const result3 = Calculator.divide(a, b);
  
      //Assert
      expect(result3).toBeCloseTo(4.1);
    });
});