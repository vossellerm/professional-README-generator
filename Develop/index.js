// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: import the generateMarkdown function from utils/generateMarkdown.js
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Write code to get user input, generate markdown, and save it to a file.
const init = () => {
  // inquirer
  inquirer.prompt([
    // description
    {},
    // installation instructions
    {},
    // usage info
    {},
    // contribution guidelines
    {},
    // test instructions
    {},
    // license selection
    {},
    // GitHub username and link
    {},
    // email address
    {},
  ]);
};
