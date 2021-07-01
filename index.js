const Employee = require("./library/Employee");
const Manager = require("./library/Manager");
const Engineer = require("./library/Engineer");
const Intern = require("./library/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const team = [];

const managerQuestions = [
  {
    type: "input",
    name: "managerName",
    message: "Enter the team manager's name",
  },
  {
    type: "input",
    name: "managerId",
    message: "Enter the team manager's employee id number",
  },
  {
    type: "input",
    name: "managerEmail",
    message: "Enter the team manager's email address",
  },
  {
    type: "input",
    name: "managerOffice",
    message: "Enter the team manager's office number",
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "engineerName",
    message: "Enter the engineer's name",
  },
  {
    type: "input",
    name: "engineerId",
    message: "Enter the engineer's employee id number",
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "Enter the engineer's email address",
  },
  {
    type: "input",
    name: "engineerGitHub",
    message: "Enter the engineer's GitHub username",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "internName",
    message: "Enter the intern's name",
  },
  {
    type: "input",
    name: "internId",
    message: "Enter the intern's employee id number",
  },
  {
    type: "input",
    name: "internEmail",
    message: "Enter the intern's email address",
  },
  {
    type: "input",
    name: "internSchool",
    message: "Enter the school/university the intern attended",
  },
];

function init() {
  inquirer.prompt(managerQuestions).then((answers) => {
    const manager = new Manager(
      answers.managerName,
      answers.managerId,
      answers.managerEmail,
      answers.managerOffice
    );
    team.push(manager);
    employeeRole();
  });
}

function employeeRole() {
  const roleQuestion = [
    {
      type: "list",
      name: "role",
      message: "Would you like to add another employee?  Select the employee's role or select Done if you are finished.",
      choices: ["Engineer", "Intern", "Done"],
    },
  ];
  inquirer.prompt(roleQuestion).then((response) => {
    const role = response.role;
    switch (role) {
      case "Engineer":
        engineerCard();
        break;
      case "Intern":
        internCard();
    }
  });
}

function engineerCard() {
  inquirer.prompt(engineerQuestions).then((answers) => {
    const engineer = new Engineer(
      answers.engineerName,
      answers.engineerId,
      answers.engineerEmail,
      answers.engineerGitHub
    );
    team.push(engineer);
    employeeRole();
  });
}

function internCard() {
  inquirer.prompt(internQuestions).then((answers) => {
    const intern = new Intern(
      answers.internName,
      answers.internId,
      answers.internEmail,
      answers.internSchool
    );
    team.push(intern);
    employeeRole();
  });
}
console.log(team);
init();

// team.push()
// const manager = new Manager("tyler" , 10, "test.com");
// team.push(manager)
