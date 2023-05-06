// Function takes in the user response and formats for the readme
// returns data to 'fileText' constant
function generateREADME(response) {
  return `# ${response.title}
  ## Description
  

  ## Installation
  

  ## Usage
  

  ## Credits
  

  ## Features
  

  ## Questions
  If you have any questions then please reach out to me on Github at ${"https://github.com/" + response.username} or by sending an email at ${response.email}
  
`;
}

module.exports = generateREADME;
