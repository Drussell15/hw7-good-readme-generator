const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");
//make sure all requires are at top of page//
//.gitignore will ignore what we tell it to//

//add questions to user to an array of things we want to ask user//

const questions = [
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
        type: "checkbox",
        message: "what license will you use?",
        name: "license",
        choices: [
            "M.I.T",
            "ISC",
            "GPL X.X",
            "APACHE 2.0",
            "none",
        ]
    },
    {
        type: "input",
        message: "any other contributions that need to be added? who can contribute?",
        name: "contribution",
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
];
function writeToFile(fileName, data) {

        let README = generateMarkdown(data);
        fs.writeFile(fileName, README, err => {
            if (err) {
                throw err;
            }
        });
    }
function init() {
        inquirer.prompt(questions)
            .then(data => {
                writeToFile("README.md", data);
            })
            .catch(error => {
                throw error;
            });
    }
init();

// inquirer.prompt(questions).then((response) => {
//     console.log({ ...response });
//     writeToFile("README.md", generateMarkdown({ ...response }));
// });
