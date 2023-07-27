import select from '@inquirer/select';
import shell from 'shelljs';

import intl from './intl.js';

async function showFullstackOptions(language) {
  const answer = await select({
    message: intl.message[language],
    choices: [
      {
        name: 'Next.js',
        value: 'nextjs',
        description: '',
      },
    ],
  });

  if (answer === 'nextjs') {
    shell.exec('npx create-next-app@latest');
  }
}

export default showFullstackOptions;
