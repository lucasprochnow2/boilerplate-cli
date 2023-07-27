#!/usr/bin/env node

import { program } from 'commander';
import select from '@inquirer/select';

import showFrontendOptions from '../frontend/index.js';
import showFullstackOptions from '../fullstack/index.js';
import showBackendOptions from '../backend/index.js';
import intl from './intl.js';

program.version(1.0);

program
  .command('start')
  .description('Setup to start a new development project')
  .option('-l, --lang <language>', 'Change the setup language: en, pt', 'en')
  .action(async (options) => {
    const language = options.lang;

    const answer = await select({
      message: intl.message[language],
      choices: [
        {
          name: 'Frontend',
          value: 'frontend',
          description: intl.frontendOpt[language],
        },
        {
          name: 'Backend',
          value: 'backend',
          description: intl.backendOpt[language],
        },
        {
          name: 'Fullstack',
          value: 'fullstack',
          description: intl.fullstackOpt[language],
        },
      ],
    });

    if (answer === 'frontend') {
      await showFrontendOptions(language);
    }

    if (answer === 'fullstack') {
      await showFullstackOptions(language);
    }

    if (answer === 'backend') {
      await showBackendOptions(language);
    }
  });

program.parse(process.argv);
