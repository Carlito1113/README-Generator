function generateMarkdown(answers, URL) {
  return `# ${answers.title}

${URL}

## Description
${answers.description}

### Installation
Run this to install
${answers.install}    
    
## Table of Contents (Optional)
    
If your README is very long, add a table of contents to make it easy for users to find what they need.
    
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
    
    
## Usage 
${answers.usage}
Provide instructions and examples for use. Include screenshots as needed. 
    
    
## Credits
Contributors:
${answers.contributors}
    
    
## License
This application is licensed under
${answers.license}  

## Contributing
After forking this repository, contributions in the form of issues and pull requests are welcomed and encouraged.

## Tests
Run this command for testing the application
${answers.tests}  
    
## questions
If you have any questions regarding this application contact me at
## my github profile
${answers.github}
## Or
## my email
${answers.email}

`;
}

module.exports = generateMarkdown;
