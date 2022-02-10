// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [

    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'name',
        },

        {
            type: 'input',
            message: 'What is your email?',
            email: 'email',
        },

        {
            type: 'input',
            message: 'What is your project name?',
            project: 'projectName',
        },

        {
            type: 'list',
            message: 'What kind of license should your project have?',
            name: 'language',
            choices: ["English", "French", "Spanish"]
        },

        {
            type: 'list',
            message: 'What is your preferred method of communication?',
            name: 'Communication',
            choices: ["Phone", "Email", "In-Person"]
        }
    ])
        
        .then((response) => {
            console.log(response);
            // fs.writeFile('userentries.txt', JSON.stringify(response), function (err) {
            //     if (err) {
            //         console.log(err)
            //     }
            //     else {
            //         console.log("Successful!!")
            //     }
            // });
        })




]    
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init()
