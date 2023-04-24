// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
// The 'questions' array contains a series of prompt questions for the user when called that the user must answer
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'How would you describe this project?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How do you install this project?',
    },
    {
      type: 'input',
      name: 'guidelines',
      message: 'What are the guidlines for this project?',
    },
    {
      type: 'input',
      name: 'instructions',
      message: 'How do you use this project?',
    },
    {
      type: 'input',
      name: 'contact',
      message: 'What is the best email to contact you regarding further questions?',
    },
  ];
  
  // The 'questions' array is then called and prompts the questions into the terminal awaiting user input
  inquirer
    .prompt(questions);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
