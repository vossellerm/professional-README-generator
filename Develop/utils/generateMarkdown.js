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
  licenseTitle,
}) {
  return `# ${title}

${license}

## Description

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

${licenseTitle}

## Tests

${test}

## Questions

Contact me if you have any questions.

Email: [${email}](mailto:${email})

GitHub: [${username}](${githubLink})`;
}

module.exports = generateMarkdown;
