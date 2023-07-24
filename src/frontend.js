import select from '@inquirer/select';
import input from '@inquirer/input';
import shell from 'shelljs';

async function showFrontendOptions() {
  const answer = await select({
    message: 'Selecione o framework frontend que você deseja trabalhar',
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
    const reactDirName = await input({ message: 'Qual o nome do diretório do projeto?' });
    shell.exec(`npx create-react-app ${reactDirName}`);
  }

  if (answer === 'vue') {
    shell.exec('npm init vue@latest');
  }
}

export default showFrontendOptions;
