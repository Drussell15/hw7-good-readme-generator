const fs = require("fs");
const inquirer = require("inquirer");
const util =require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");
//make sure all requires are at top of page//
//.gitignore will ignore what we tell it to//

//add questions to user to an array of things we want to ask user//
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
    {
        type: "input",
        message: "what is your GitHub username?",
        name: "username",
    },
    {
        type: "input",
        message: "What do you want to title this project/repository?",
        name: "title",
    },
    {
        type: "input",
        message: "describe the project/repository.",
        name: "description",
    },
    {
        type: "input",
        message: "lets create a table of contents.",
        name: "table",
    },
    {
        type: "input",
        message: "how will this project be used?",
        name: "useage",
    },
    {
        type: "input",
        message: "what do users need to install? what order? software/hardware recs?",
        name: "install",
    },
    {
        type: "list",
        name: "license",
        message: "what license will you use?",
        choices: [
            "AGPL",
            "MIT",
            "GPLv3,
            "APACHE 2.0",
            "none"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "what users contributed?"
    },
    {
        type: "input",
        message: " describe how you  tested the app?",
        name: "testing",
    },
    {
        type: "input",
        message: "if there are questions, what is the best email to reach you?",
        name: "questions",
    }
])
.then(answers=> { 
        fs.writeFile("README.md", generateMarkdown(answers), (err) => {
            if (err) throw err;
            console.log('README created');
        })
    })
}
//inquirer is async info

function writeToFile(fileName, data) {
    
}

function init() {
    
}


propmtUser();
init();
