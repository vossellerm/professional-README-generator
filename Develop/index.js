// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: import the generateMarkdown function from utils/generateMarkdown.js
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Write code to get user input, generate markdown, and save it to a file.
const init = () => {
  // inquirer
  inquirer
    .prompt([
      // description
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
      },
      // description
      {
        type: "input",
        name: "description",
        message: "Describe your project",
      },
      // installation instructions
      {
        type: "input",
        name: "installation",
        message: "What technology needs to be used or installed?",
      },
      // usage info
      {
        type: "input",
        name: "usage",
        message: "How can this project be used?",
      },
      // contribution guidelines
      {
        type: "input",
        name: "contribution",
        message: "What are your contribution guidelines?",
      },
      // test instructions
      {
        type: "input",
        name: "test",
        message: "How can your project be tested?",
      },
      // license selection
      {
        type: "list",
        name: "license",
        message: "What license did you use?",
        choices: [
          {
            name: "Apache",
            value:
              "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
          },
          {
            name: "Boost",
            value:
              "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
          },
          {
            name: "BSD",
            value:
              "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
          },
          {
            name: "Creative Commons",
            value:
              "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)",
          },
          {
            name: "Eclipse",
            value:
              "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
          },
          {
            name: "GNU",
            value:
              "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
          },
          {
            name: "IBM",
            value:
              "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
          },
          {
            name: "ISC",
            value:
              "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
          },
          {
            name: "MIT",
            value:
              "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
          },
          {
            name: "Mozilla",
            value:
              "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
          },
          {
            name: "Open Data Commons",
            value:
              "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)",
          },
          {
            name: "Perl",
            value:
              "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
          },
          {
            name: "SIL",
            value:
              "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)",
          },
          {
            name: "Unilicense",
            value:
              "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
          },
          {
            name: "Zlib",
            value:
              "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)",
          },
          {
            name: "None",
            value: "No license necessary for this project.",
          },
        ],
      },
      // GitHub username and link
      {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
      },
      {
        type: "input",
        name: "githubLink",
        message: "What is the link to you GitHub profile?",
      },
      // email address
      {
        type: "input",
        name: "email",
        message: "What email is the best place to reach you?",
      },
    ])
    //   populate answers in generateMarkdown
    .then((answers) => {
      if (
        answers.license ==
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      ) {
        answers.licenseTitle = "Apache";
      } else if (
        answers.license ==
        "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
      ) {
        answers.licenseTitle = "Boost";
      } else if (
        answers.license ==
        "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
      ) {
        answers.licenseTitle = "BSD";
      } else if (
        answers.license ==
        "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"
      ) {
        answers.licenseTitle = "Creative Commons";
      } else if (
        answers.license ==
        "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
      ) {
        answers.licenseTitle = "Eclipse";
      } else if (
        answers.license ==
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      ) {
        answers.licenseTitle = "GNU";
      } else if (
        answers.license ==
        "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
      ) {
        answers.licenseTitle = "IBM";
      } else if (
        answers.license ==
        "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
      ) {
        answers.licenseTitle = "ISC";
      } else if (
        answers.license ==
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      ) {
        answers.licenseTitle = "MIT";
      } else if (
        answers.license ==
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
      ) {
        answers.licenseTitle = "Mozilla";
      } else if (
        answers.license ==
        "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)"
      ) {
        answers.licenseTitle = "Open Data Commons";
      } else if (
        answers.license ==
        "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
      ) {
        answers.licenseTitle = "Perl";
      } else if (
        answers.license ==
        "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)"
      ) {
        answers.licenseTitle = "SIL";
      } else if (
        answers.license ==
        "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
      ) {
        answers.licenseTitle = "UniLicense";
      } else if (
        answers.license ==
        "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)"
      ) {
        answers.licenseTitle = "ZLib";
      } else {
        answers.licenseTitle = "No license necessary for this project.";
      }
      const markdownPageContent = generateMarkdown(answers);

      // write file
      fs.writeFile("sampleREADME.md", markdownPageContent, (err) =>
        err
          ? console.log(err)
          : console.log("Succesfully created SampleREADME.md!")
      );
    });
};

init();
