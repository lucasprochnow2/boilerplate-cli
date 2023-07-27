import select from '@inquirer/select';
import input from '@inquirer/input';
import shell from 'shelljs';

async function showBackendOptions() {
  const answer = await select({
    message: 'Selecione a tecnologia backend que você deseja trabalhar',
    choices: [
      {
        name: 'NodeJS',
        value: 'nodejs',
        description: '',
      },
    ],
  });

  if (answer === 'nodejs') {
    const nodeDirName = await input({ message: 'Qual o nome do diretório em que deseja clonar o projeto?' });
    shell.exec(`git clone https://github.com/lucasprochnow2/DI-with-awilix.git ${nodeDirName}`);
  }
}

export default showBackendOptions;
