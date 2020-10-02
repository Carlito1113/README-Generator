
function generateMarkdown(answers) {
    return `# ${answers.title}
    

    ## Description
    ${answers.description}

    ### Installation
    Run this to install
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
    Contributors:
    ${answer.contributors}
    
    
    ## License
    This application is licensed under
    ${answer.license}  

    ## Contributing
    After forking this repository, contributions in the form of issues and pull requests are welcomed and encouraged.

    ## Tests
    Run this command for testing the application
    ${answer.tests}  
    
    ## questions
    If you have any questions regarding this application contact me at
    ## my github profile
    ${answer.github}
    ## Or
    ## my email
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