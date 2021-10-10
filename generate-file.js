const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            //if error reject promise 
            if (err) {
                reject(err);
                return;
            }

            // if no error resolve
            resolve({
                ok: true,
                message: 'File created! It is located at ./dist/README.md'
            });
        });
    });
};

module.exports = writeFile;