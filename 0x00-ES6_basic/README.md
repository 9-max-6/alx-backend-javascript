0x00. ES6 Basics
JavaScriptES6

    Weight: 1
    Ongoing second chance project - started Jul 22, 2024 6:00 AM, must end by Jul 27, 2024 6:00 AM
    An auto review will be launched at the deadline

In a nutshell…

    Auto QA review: 8.0/41 mandatory & 0.0/4 optional
    Altogether:  19.51%
        Mandatory: 19.51%
        Optional: 0.0%
        Calculation:  19.51% + (19.51% * 0.0%)  == 19.51%

Concepts

For this project, we expect you to look at these concepts:

    JavaScript programming
    Software Linter

Resources

Read or watch:

    ECMAScript 6 - ECMAScript 2015
    Statements and declarations
    Arrow functions
    Default parameters
    Rest parameter
    Javascript ES6 — Iterables and Iterators

Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

    What ES6 is
    New features introduced in ES6
    The difference between a constant and a variable
    Block-scoped variables
    Arrow functions and function parameters default to them
    Rest and spread function parameters
    String templating in ES6
    Object creation and their properties in ES6
    Iterators and for-of loops

Requirements
General

    All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
    Allowed editors: vi, vim, emacs, Visual Studio Code
    All your files should end with a new line
    A README.md file, at the root of the folder of the project, is mandatory
    Your code should use the js extension
    Your code will be tested using the Jest Testing Framework
    Your code will be analyzed using the linter ESLint along with specific rules that we’ll provide
    All of your functions must be exported

Setup
Install NodeJS 12.11.x

(in your home directory):

curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

$ nodejs -v
v12.11.1
$ npm -v
6.11.3

Install Jest, Babel, and ESLint

in your project directory, install Jest, Babel and ESList by using the supplied package.json and run npm install.
Configuration files

Add the files below to your project directory
package.json
Click here to show/hide file contents
babel.config.js
Click here to show/hide file contents
.eslintrc.js
Click here to show/hide file contents
Finally…

Don’t forget to run npm install from the terminal of your project folder to install all necessary project dependencies.
Tasks 0. Const or let?
mandatory
Score: 100.0% (Checks completed: 100.0%)

Modify

    function taskFirst to instantiate variables using const
    function taskNext to instantiate variables using let

export function taskFirst() {
var task = 'I prefer const when I can.';
return task;
}

export function getLast() {
return ' is okay';
}

export function taskNext() {
var combination = 'But sometimes let';
combination += getLast();

return combination;
}

Execution example:

bob@dylan:~$ cat 0-main.js
import { taskFirst, taskNext } from './0-constants.js';

console.log(`${taskFirst()} ${taskNext()}`);

bob@dylan:~$
bob@dylan:~$ npm run dev 0-main.js
I prefer const when I can. But sometimes let is okay
bob@dylan:~$

Repo:

    GitHub repository: alx-backend-javascript
    Directory: 0x00-ES6_basic
    File: 0-constants.js

1. Block Scope
   mandatory
   Score: 66.67% (Checks completed: 66.67%)

Given what you’ve read about var and hoisting, modify the variables inside the function taskBlock so that the variables aren’t overwritten inside the conditional block.

export default function taskBlock(trueOrFalse) {
var task = false;
var task2 = true;

if (trueOrFalse) {
var task = true;
var task2 = false;
}

return [task, task2];
}

Execution:

bob@dylan:~$ cat 1-main.js
import taskBlock from './1-block-scoped.js';

console.log(taskBlock(true));
console.log(taskBlock(false));
bob@dylan:~$
bob@dylan:~$ npm run dev 1-main.js
[ false, true ]
[ false, true ]
bob@dylan:~$

Repo:

    GitHub repository: alx-backend-javascript
    Directory: 0x00-ES6_basic
    File: 1-block-scoped.js

2. Arrow functions
   mandatory
   Score: 0.0% (Checks completed: 0.0%)

Rewrite the following standard function to use ES6’s arrow syntax of the function add (it will be an anonymous function after)

export default function getNeighborhoodsList() {
this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

const self = this;
this.addNeighborhood = function add(newNeighborhood) {
self.sanFranciscoNeighborhoods.push(newNeighborhood);
return self.sanFranciscoNeighborhoods;
};
}

Execution:

bob@dylan:~$ cat 2-main.js
import getNeighborhoodsList from './2-arrow.js';

const neighborhoodsList = new getNeighborhoodsList();
const res = neighborhoodsList.addNeighborhood('Noe Valley');
console.log(res);
bob@dylan:~$
bob@dylan:~$ npm run dev 2-main.js
[ 'SOMA', 'Union Square', 'Noe Valley' ]
bob@dylan:~$

Repo:
