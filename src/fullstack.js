import select from '@inquirer/select';
import shell from 'shelljs';

async function showFullstackOptions() {
  const answer = await select({
    message: 'Selecione o framework fullstack que você deseja trabalhar',
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
