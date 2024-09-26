const { Circle, Triangle, Square } = require('./shapes');

describe('Shape render tests', () => {
  test('Circle renders correctly', () => {
    const circle = new Circle('blue');
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="blue" />');
  });

  test('Triangle renders correctly', () => {
    const triangle = new Triangle('red');
    expect(triangle.render()).toBe('<polygon points="150,10 240,190 60,190" fill="red" />');
  });

  test('Square renders correctly', () => {
    const square = new Square('green');
    expect(square.render()).toBe('<rect x="50" y="0" width="200" height="200" fill="green" />');
  });
});
