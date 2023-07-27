import select from '@inquirer/select';
import input from '@inquirer/input';
import shell from 'shelljs';

import intl from './intl.js';

async function showBackendOptions(language) {
  const answer = await select({
    message: intl.message[language],
    choices: [
      {
        name: 'NodeJS',
        value: 'nodejs',
        description: '',
      },
    ],
  });

  if (answer === 'nodejs') {
    const nodeDirName = await input({ message: intl.directoryInputMessage[language] });
    shell.exec(`git clone https://github.com/lucasprochnow2/DI-with-awilix.git ${nodeDirName}`);
  }
}

export default showBackendOptions;
