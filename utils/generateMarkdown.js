// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Install](#install)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Questions](#questions)
  - [Tests](#tests)

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

  ${data.license}

  <a name="questions"></a>
  ## Questions

  ${data.github}
  ${data.email}

  <a name="tests"></a>
  ## Tests

  ${data.tests}

`;
}

module.exports = generateMarkdown;
