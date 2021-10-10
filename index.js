// main project file
// uses inquirer to get user input and calls functions to generate the file

const fs = require('fs');
const inquirer = require('inquirer');
const generateString = require('./page-template');
const generateFile = require('./generate-file');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description for your project (required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'Enter installation instructions for your project',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter installation instructions for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please provide usage information!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Provide instructions for other developers who wish to contribute to your project, or state otherwise',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please provide contribution instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide instructions on how to run tests for your application',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please provide testing instructions!');
                    return false;
                }
            }
        }
    ]);
};

promptUser()
    .then(fileData => {
        return generateString(fileData);
    })
    .then(markDownString => {
        return generateFile(markDownString);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse.message);
    })
    .catch(err => {
        console.log(err);
    });