#!/usr/bin/env node

import { program } from 'commander';
import chalk from 'chalk';

program.version(1.0);

program
  .command('add [todo]')
  .description('Adiciona um to-do')
  .action((todo) => {
    console.log(chalk.green(todo));
  });

program.parse(process.argv);