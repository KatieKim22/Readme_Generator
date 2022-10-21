const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

const markdownGenerator = require('./util/markdownGenerator.js');

// questions for user

const questions = [
    {
        type: "input",
        message: "What is the title of the project",
        name: "title",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your title');
                return false;
            }
        }

    }, {
        type: "input",
        message: "What is the project about? Give a detailed description",
        name: "description",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter your description');
                return false;
            }
        }
    }, {
        type: "input",
        message: "Describe installation instruction.",
        name: "installation"
    }, {
        type: "list",
        message: "What license does your project use?",
        name: "license",
        choices: ["none", "Apache 2.0", "MIT", "GPL v3.0"],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please select one of the four options');
                return false;
            }
        }
    }, {
        type: "input",
        Message: "Please input contributors names.",
        name: "contribution"
    }, {
        type: "input",
        name: "github",
        message: "What is your Github username so others can reach you for questions?",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please provide your username so others can reach you with questions');
                return false;
            }
        }
    }, {
        type: "checkbox",
        name: "technologies",
        message: "What technologies used for the project?",
        choices: ["HTML", "CSS", "JavaScript"],
        validate: techChoice => {
            if (techChoice) {
                return true;
            } else {
                console.log('Please select technologies you have used for the project');
                return false;
            }
        }
    }
];

// function to write Readme file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }
    })
}

// function to initiate 
function init() {
    inquirer.prompt(questions)
        .then(data => {
            writeToFile('readme.md', markdownGenerator(data));
            console.log(data)
        })
}

init();

module.exports = questions;
