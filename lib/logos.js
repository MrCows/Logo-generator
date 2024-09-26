const { Circle, Triangle, Square } = require('./shapes');

function newLogo({ text, textColor, shape, shapeColor }) {
    let shapeInstance;

    switch (shape) {
        case 'Circle':
            shapeInstance = new Circle(shapeColor);
            break;
        case 'Triangle':
            shapeInstance = new Triangle(shapeColor);
            break;
        case 'Square':
            shapeInstance = new Square(shapeColor);
            break;
        default:
            throw new Error('Invalid shape');
    }
    if (shape === 'Triangle') {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shapeInstance.render()}
  <text x="150" y="165" font-size="50" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`;
    }
    else
    {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shapeInstance.render()}
  <text x="150" y="110" font-size="50" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`;
    }

};

module.exports = { newLogo };
