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
        choices: ["Apache", "Boost", "BSD 3", "BSD 2"],
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
      const markdownPageContent = generateMarkdown(answers);

      // write file
      fs.writeFile("sampleREADME.md", markdownPageContent, (err) =>
        err
          ? console.log(err)
          : console.log("Succesfully created sampleREADME.md!")
      );
    });
};

init();
