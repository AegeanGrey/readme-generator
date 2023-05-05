// Function takes in the user response and formats for the readme
// returns data to 'fileText' constant
function generateREADME(response) {
  return `# ${response.title}
  
`;
}

module.exports = generateREADME;
