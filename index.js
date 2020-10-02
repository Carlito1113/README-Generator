const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


inquirer.prompt([
    {
        type:"input",
        message:"Enter Project Title",
        name:"title"
    },
    {
        type:"input",
        message: "Give a description for this application",
        name: "description"
    },
    {
        type:"input",
        message: "How would you install this application?",
        name: "install"
    },
    {
        type:"input",
        message: "How do you use this application?",
        name: "usage"
    },
    {
        type:"list",
        message: "What licenses are used in this application?",
        name: "license"
    },
    {
        type:"input",
        message: "Who contributed to this project?",
        name: "contributors"
    },
    {
        type:"input",
        message: "What command is used to run tests?",
        name: "tests"
    },
    {
        type:"input",
        message: "What is your GitHub username?",
        name: "github"
    },
    {
        type:"input",
        message: "What is your email",
        name: "email"
    },
])
.then(function(answers) {
    // console.log(answers);
let badgeURL;
    if (Response.license === "MIT License") {
        badgeURL = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
    if (Response.license === "GNU GPL v3") {
        badgeURL = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }
    if (Response.license === "GNU GPL v3") {
        badgeURL = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }


const generatedFile = generateMarkdown(answers);

    fs.writeFile("README.md", markdownFile, function(err){
        if(err) throw err;
    })
    console.log(generatedFile);

})