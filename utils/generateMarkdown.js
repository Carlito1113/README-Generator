
function generateMarkdown(answers) {
    return `
    # ${answers.title}

    ## Description
    ${answers.description}

    ### Installation
    ${answer.install}    
    
    ## Table of Contents (Optional)
    
    If your README is very long, add a table of contents to make it easy for users to find what they need.
    
    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)
    
    
    ## Usage 
    ${answer.usage}
    Provide instructions and examples for use. Include screenshots as needed. 
    
    
    ## Credits
    ${answer.contributors}
    
    
    ## License
    ${answer.license}  

    ## Tests
    ${answer.tests}  
    
    ## questions
    ${answer.questions}

    ## github user
    ${answer.github}

    ## email
    ${answer.email}
    
    ---
    
    🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
    
    ## Badges
    
    ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
    
    Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
    
  
    ---
    © 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
    
    
    `;
}

module.exports = generateMarkdown;