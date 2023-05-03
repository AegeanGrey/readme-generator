// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

const run = process.argv[2];

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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer

    // The 'questions' array is then called and prompts the questions into the terminal awaiting user input
    .prompt(questions)

  // The users input data is then passed into 'response' and converted into string format to be put into a newly generated readme.md file
  .then((response) => 
    fs.writeFile('readme.md', JSON.stringify(response), (error) => 

      // The Arrow function then logs a string to the terminal if successful, if not then it will display an error
      error ? console.error(error) : console.log('README File Generated!')
    )
  );
}

// Function call to initialize app
// The computer checks to see if the users 2nd argument is equal to run to initialize the generator
if (run === 'run') {
  init();

  // If the computer doesn't get 'node index.js run' then it will console log the following string
} else {
  console.log('To create a readme file type: node index.js run');
}
