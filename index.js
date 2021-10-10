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