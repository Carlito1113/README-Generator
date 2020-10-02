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
        type:"input",
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



const generatedFile = generateMarkdown(answers);

    fs.writeFile("README.md", markdownFile, function(err){
        if(err) throw err;
    })
    console.log(generatedFile);

})