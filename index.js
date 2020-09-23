const fs = require('fs')
const inquirer = require('inquirer')
const generateMark = require('./utils/generateMarkdown')


// array of questions for user
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project',
            validate: ProjectNameInput => {
                if (ProjectNameInput) {
                return true;
                } else {
                    console.log('Please enter the project name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                return true;
                } else {
                    console.log('Please enter a description of the project');
                    return false;
                }
            }
          },
          {
            type: 'input',
            name: 'intall',
            message: 'Provide input installation instructions for the project (Required)',
            validate: installationInput => {
                if (installationInput) {
                return true;
                } else {
                    console.log('Please enter installation instructions for the project');
                    return false;
                }
            }
          },
          {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use (Required)',
            validate: usageInput => {
                if (usageInput) {
                return true;
                } else {
                    console.log('Please enter a description of the project');
                    return false;
                }
            }
          },
          //! still need to sort out multiple credit entiries 
          {
            type: 'confirm',
            name: 'confirmCredits',
            message: 'Was there anyone else involved on the project?',
            default: true,
          },
          {
            type: 'input',
            name: 'credits',
            message: 'Provide name of contributor: ',
            message: 'provide contributors username: ',
            when: ({ confirmCredits }) => confirmCredits
          },
          {
            type: 'checkbox',
            name: 'license',
            message: 'choose a license for the project: ',
            choices: [' license preferred by the community', 'MIT License', ' GNU GPLv3', ' SIL Open Font License 1.1', 'CC0-1.0', 'The Unlicense']
          },
        {
          type: 'input',
          name: 'github',
          message: 'Enter your GitHub Username',
          validate: usernameInput => {
            if (usernameInput) {
              return true;
            } else {
              console.log('Please enter your GitHub Username');
              return false;
            }
          }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address',
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log('Please enter your email address');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'tests',
            message: 'Provide tests for the application',
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log('please enter some appication tests ');
                return false;
              }
            }
          },
        
    ]);
}

// function to write README file
function writeToFile(fil, data) {
    
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

questions()