// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { features } = require('process');

// TODO: Create an array of questions for user input
 
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init()





const generateReadme = ({ projectTitle, description, installation, usage, license, features, Contributions }) =>
  `# ${projectTitle}

  ## ${description}
    
  
  ## Table of Contents (Optional)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
  
  
  ## ${installation}
  
  
  ## ${usage}
  
  
  ## ${license}
  
  
  ## ${features}
  
  
  ## ${Contributions}
  
  
`;




inquirer
  .prompt([
    {
      type: 'input',
      name: 'project name',
      message: 'What is your project name?',
    },
    {
      type: 'input',
      name: 'location',
      message: 'Where are you from?',
    },
    {
      type: 'input',
      name: 'hobby',
      message: 'What is your favorite hobby?',
    },
    {
      type: 'input',
      name: 'food',
      message: 'What is your favorite food?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ])
  .then((projectTitle, description, installation, usage, license, features, Contributions) => {
    const readmeContent = generateReadme(projectTitle, description, installation, usage, license, features, Contributions);

    fs.writeFile('README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README file!')
    );
  });
