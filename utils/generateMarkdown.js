// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ![GitHub Logo](https://img.shields.io/badge/License-${data.license}-blue.svg)

  ${data.description}

  ## Table of Contents

  * [Install](#install)

  * [Usage](#usage)

  * [Credits](#credits)

  * [License](#license)

  * [Questions](#questions)
   
  * [Tests](#tests)

  <a name="install"></a>
  ## Install

  ${data.install}

  <a name="usage"></a>
  ## Usage 

  ${data.usage}

  <a name="credits"></a>
  ## Credits

  ${data.credits}

  <a name="license"></a>
  ## License

  Click link for more info on this applications license

  [License Info](https://choosealicense.com/licenses/${data.license}/)
  
  <a name="questions"></a>
  ## Questions

  If you have an question feel free to contact me, links below!

  Personal Email: ${data.email}
  
  GitHub Account: https://github.com/${data.github}

  <a name="tests"></a>
  ## Tests

  ${data.tests}

`;
}

module.exports = generateMarkdown;
