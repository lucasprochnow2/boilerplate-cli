#!/usr/bin/env node

import { program } from 'commander';
import chalk from 'chalk';
import select from '@inquirer/select';

import showFrontendOptions from './frontend.js';

program.version(1.0);

program
  .command('start')
  .description('Setup para iniciar novo projeto de desenvolvimento')
  .action(async () => {
    const answer = await select({
      message: 'Selecione o tipo do projeto',
      choices: [
        {
          name: 'Frontend',
          value: 'frontend',
          description: 'Opções de boilerplate são: React e Vuejs',
        },
        {
          name: 'Backend',
          value: 'backend',
          description: 'Opções de boilerplate são: Nodejs',
        },
        {
          name: 'Fullstack',
          value: 'fullstack',
          description: 'Opções de boilerplate são: Nextjs',
        },
      ],
    });

    if (answer === 'frontend') {
      await showFrontendOptions();
    } else {
      console.log(chalk.yellow('WIP...'));
    }
  });

program.parse(process.argv);
