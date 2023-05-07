// Function takes in the user response and formats for the readme
// returns data to 'fileText' constant
function generateREADME(response) {
  return `# ${response.title}
  ## Description
  ${response.title} ${response.description}
  \n

  ## Requirements
  ${response.requirements}
  \n

  ## Installation
  ${response.installation}
  \n

  ## Usage
  ${response.usage}
  \n

  ## Credits
  ${response.credit}
  \n

  ## Questions
  If you have any questions then please reach out to me on Github at ${"https://github.com/" + response.username} or by sending an email at ${response.email}
  
`;
}

module.exports = generateREADME;
