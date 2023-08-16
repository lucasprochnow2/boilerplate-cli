<p align="center">
  <h1 align="center">Boilerplate-cli</h1>
</p>

<p align="center">
  <a aria-label="Javascript logo" href="https://developer.mozilla.org/">
    <img src="https://shields.io/badge/JavaScript-F7DF1E?logo=JavaScript&logoColor=000&style=for-the-badge">
  </a>
  <a aria-label="Node.js logo" href="https://nodejs.org/">
    <img alt="" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
  </a>
  <a aria-label="CLI logo">
    <img alt="" src="https://img.shields.io/badge/CLI-000?style=for-the-badge&logo=gnu-bash&logoColor=white">
  </a>
</p> 

## Docs in other language 

[Click here](https://github.com/lucasprochnow2/boilerplate-cli/blob/main/README.md#boilerplate-cli) to read the docs in portuguese.

## Description

CLI created to bootstrap applications using terminal in your local computer.

## Instalation

1. Clone github repository to your computer running the command below in your terminal:
```zsh
git clone https://github.com/lucasprochnow2/boilerplate-cli.git
```
2. Install all the project dependencies running the command below in your terminal:
```zsh
yarn
```
3. Install the CLI globally in your computer running the command below in your terminal:
```zsh
npm link
```

All done!! Now you are able to run boilerplate-cli in your terminal! Run the command below to start the CLI:

```zsh
newproject start
```

If everything is correct, a menu of options will be prompted in your terminal, as the print below shows:

![CLI first menu](assets/first-menu.png)

## Details about start command

The `start` command has the goal of start a new application in your local environment. The setup options of the command are:


- React and VueJS -  "Frontend" category;
- NodeJS - "Backend" category;
- NextJS - "Fullstack" category.

### Language (`--lang`)

The language of the setup menu can be changed running `start` command with `--lang` or `-l` flag.

The default language is `en` and the available languages are: `pt` and `en`.

To change the language, run the below command:
```zsh
newproject start --lang pt
```
or 
```zsh
newproject start -l pt
```

### Help (`--help`)

Flag that show all the details about the `start` command. Could be replaced by the short version of the flag: `-h`

To show the help options, run the command below:
```zsh
newproject start --help
```
or 
```zsh
newproject start -h
```

## Libraries used in implementation

### Commander

NodeJS lib to create CLI's: https://github.com/tj/commander.js#readme

### Inquirer.js

Lib that shows user interactive interfaces in the terminal: https://github.com/SBoudrias/Inquirer.js#inquirer

### Chalk

Lib the allows change the text style in terminal: https://github.com/chalk/chalk#

### ShellJS

Lib that allow shell commands being executed in terminal: https://github.com/shelljs/shelljs
