// This will export a string of the page template to be turned into a README

module.exports = templateData => {
    const {title , description , install , usage , contribution , tests} = templateData;
    
    return `
# ${title}

## Description

${description}

## Installation
${install}

## Usage
${usage}

## Contributing
${contribution}

## Tests
${tests}`;
};