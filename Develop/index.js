// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('../Develop/utils/generateMarkdown')
let dir = '../Dist'

// TODO: Create an array of questions for user input
const promptUser = async () => {
    await inquirer.prompt(
        [{
        type: 'input',
        name: 'title',
        message: 'What is the title of the project? (Required)',
        validate: nameInput_1 => {
            if (nameInput_1) {
                return true;
            } else {
                console.log('Enter the project title');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required):',
        validate: nameInput_1 => {
            if (nameInput_1) {
                return true;
            } else {
                console.log('Enter a description');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage instructions:',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List any contributors or third-party assets.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license type if you wish to include one.',
        choices: ['Mozilla Public 2.0', 'MIT', 'Apache 2.0', 'GNU GPLv3', 'The Unlicense', 'None']
    },
    {
        type: 'confirm',
        name: 'contributor',
        message: 'Would you like others to contribute to your project?',
        default: false
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter testing instructions:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your github username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your e-mail address:',
    },
    ])
        .then(data => {
            return generateMarkdown(data)
        })
        .then(markdown => {
            return writeToFile(markdown)
        })
    ;
};

// TODO: Create a function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir)
    }
      fs.writeFile('../Dist/README.md', fileContent, err => {
        if (err) {
            reject(err);
            return;
        }
            resolve({
            ok: true,
            message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
const init = async () => {
    await promptUser()
}

// Function call to initialize app
init();