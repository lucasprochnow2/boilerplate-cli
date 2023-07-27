import select from '@inquirer/select';
import input from '@inquirer/input';
import shell from 'shelljs';

import intl from './intl.js';

async function showFrontendOptions(language) {
  const answer = await select({
    message: intl.message[language],
    choices: [
      {
        name: 'React',
        value: 'react',
        description: '',
      },
      {
        name: 'Vue',
        value: 'vue',
        description: '',
      },
    ],
  });

  if (answer === 'react') {
    const reactDirName = await input({ message: intl.reactDirectoryName[language] });
    shell.exec(`npx create-react-app ${reactDirName}`);
  }

  if (answer === 'vue') {
    shell.exec('npm init vue@latest');
  }
}

export default showFrontendOptions;
