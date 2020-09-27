const fs = require('fs')
const inquirer = require('inquirer')
const generateMark = require('./utils/generateMarkdown')


// array of questions for user
const questions = 
  [
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
            name: 'install',
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
          {
            type: 'input',
            name: 'credits',
            message: 'Provide name of contributor: ',
          },
          {
            type: 'checkbox',
            name: 'license',
            message: 'choose ONE license for the project: ',
            choices: ['mit', 'gpl', 'apache', 'isc']
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
 ]

// function to write README file
function writeToFile(data) {
    fs.writeFile('./dist/README.md', data, err =>{
      if (err) {
        throw err;
      } else {
        console.log('file Created')
      }
    })
  };

// function to initialize program
function init() {
  inquirer.prompt(questions).then(answers => {
   const pageMarkdown = generateMark(answers)

    writeToFile(pageMarkdown)
  })
  
}

// function call to initialize program
init();