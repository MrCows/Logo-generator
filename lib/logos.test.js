const { newLogo } = require('./logos');

describe('newLogo', () => {
    it('should create an SVG for a Circle with specified text and colors', () => {
        const logo = newLogo({
            text: 'ABC',
            textColor: 'white',
            shape: 'Circle',
            shapeColor: 'blue',
        });
        expect(logo).toContain('<circle cx="150" cy="100" r="80" fill="blue" />');
        expect(logo).toContain('fill="white">ABC</text>');
    });

    it('should create an SVG for a Triangle with specified text and colors', () => {
        const logo = newLogo({
            text: 'XYZ',
            textColor: 'black',
            shape: 'Triangle',
            shapeColor: 'red',
        });
        expect(logo).toContain('<polygon points="150,10 240,190 60,190" fill="red" />');
        expect(logo).toContain('fill="black">XYZ</text>');
        expect(logo).toContain('y="165"');
    });

    it('should create an SVG for a Square with specified text and colors', () => {
        const logo = newLogo({
            text: '123',
            textColor: 'green',
            shape: 'Square',
            shapeColor: 'yellow',
        });
        expect(logo).toContain('<rect x="50" y="0" width="200" height="200" fill="yellow" />');
        expect(logo).toContain('fill="green">123</text>');
    });

    it('should throw an error for an invalid shape', () => {
        expect(() => {
            newLogo({
                text: 'Error',
                textColor: 'blue',
                shape: 'InvalidShape',
                shapeColor: 'red',
            });
        }).toThrow('Invalid shape');
    });
});
