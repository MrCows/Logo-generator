const fs = require('fs');
const { writeFile } = require('fs/promises');
const inquirer = require('inquirer');  // No need for dynamic import with v8
const { newLogo } = require('./lib/logos');
const path = require('path');

async function makeLogo() {
    const questions = [
        {
            type: 'input',
            message: 'Please provide up to three characters for the text of your logo',
            name: 'text',
            validate: function (input) {
                if (input.length >= 4) {
                    return 'Please enter a max of 3 characters';
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: 'Enter a text color (keyword or hex code):',
            name: 'textColor',
        },
        {
            type: 'list',
            message: 'Please select a shape for your logo',
            choices: ['Circle', 'Triangle', 'Square'],
            name: 'shape'
        },
        {
            type: 'input',
            message: 'Enter a shape color',
            name: 'shapeColor'
        }
    ];

    // Prompt the user for inputs
    const data = await inquirer.prompt(questions);

    // Create and save the SVG logo based on user inputs
    const assetsDir = path.join(__dirname, 'assets');
    const filePath = path.join(assetsDir, `logo-${data.text}.svg`);
    await writeFile(filePath, newLogo(data));
    console.log('Your SVG logo was successfully generated!');
}

// Run the function
makeLogo();