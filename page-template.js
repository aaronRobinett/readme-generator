// This will export a string of the page template to be turned into a README
// contribution and test functions allow for user to skip those questions if desired.

const contributionResponse = contribution => {
    if (!contribution) {
        return '\n';
    } else {
        return `## Contributing\n${contribution}\n`
    }
}

const testResponse = tests => {
    if (!tests) {
        return '\n';
    } else {
        return `## Tests\n${tests}\n`
    }
}

const contributionTable = cont => {
    if (!cont) {
        return '\n';
    } else {
        return '* [Contributing](#contributing)\n'
    }
}

const testTable = test => {
    if (!test) {
        return '\n';
    } else {
        return '* [Tests](#tests)\n'
    }
}

// function to take all user data and output the string that will become the markdown file
module.exports = templateData => {
    const { title, description, install, usage, contribution, tests, github, email } = templateData;

    return `
# ${title}

## Description

${description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
${contributionTable(contribution)}
${testTable(tests)}
* [Questions](#questions)

## Installation
${install}

## Usage
${usage}

${contributionResponse(contribution)}

${testResponse(tests)}

## Questions
Check out my [github profile!](https://github.com/${github})
\nEmail me at ${email} if you have any questions!`;
};