// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
 
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init()





const generateReadme = ({ projectTitle, description, installation, usage, license, features, contributions, tests, email, github }) =>

  

  `# ${projectTitle}

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Description
  ${description}
    
  
## Table of Contents 
- [Installation](##Installation)
- [Usage](##Usage)
- [Features](##features)
- [Contributions](##contributions)
- [License](##license)
- [tests](##tests)
- [Questions](##Questions) 
  
  
## Installation
  ${installation} 
  
  
## Usage
  ${usage}
  
## Features
  ${features}

## Contributions
  ${contributions}

## License
  This project is licensed under the ${license} license.

## tests
  ${tests}

## questions 
  If you have any questions, contact me at ${email}. You can find more info of my work at ${github}
  
`;




inquirer
  .prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: 'What is your project name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Can you describe your project in few sentences?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How can your project be installed by users?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How can your project be used by users?', 
    },
    {
      type: 'input',
      name: 'features',
      message: 'What features does your application have?',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Who contributed to this application',
    },
    {
        type: 'list',
        name: 'license',
        choices: [ 'MIT', 'Apache 2.0', 'GPL 3.0' ],
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter your tests',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your Email',
    },
  ])
  .then((projectTitle, description, installation, usage, license, features, contributions, tests, github, email) => {
    const readmeContent = generateReadme(projectTitle, description, installation, usage, license, features, contributions, tests, github, email);

    fs.appendFile('README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README file!')
    );
  });
