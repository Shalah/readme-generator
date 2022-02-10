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





const generateHTML = ({ projectTitle, description, installation, usage, license, features, Contributions }) =>
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




