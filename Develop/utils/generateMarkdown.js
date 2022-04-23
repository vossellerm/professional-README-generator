// TODO: Add code to generate markdown for README given a data object parameter containing the user input.
function generateMarkdown({
  title,
  description,
  installation,
  usage,
  contribution,
  test,
  license,
  username,
  githubLink,
  email,
}) {
  return `# ${title}`

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

`## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## Contributing

${contribution}

## License

${license}

## Tests

${test}

## Questions

Contact me if you have any questions.

Email: [${email}](mailto:${email})

GitHub: [${username}](${githubLink})
`;
}

module.exports = generateMarkdown;
