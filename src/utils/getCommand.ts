import { Command } from 'commander';
import { input } from '@inquirer/prompts';

export const getCommand = async () => {
  const program = new Command();
  // 获取命令行的参数, 根据参数执行不同的逻辑
  program
    .name('uni-plus')
    .description('脚手架 uni-plus')

  const opts = program.command('create')
    .description('创建项目')
    .option('-n, --name <name>', '项目名称')
    .opts()

  program.parse();

  let projectName = opts.name || ''

  // 如果命令行没有项目名，就输入项目名称
  while (!projectName) {
    projectName = await input({ message: '请输入项目名' });
  }

  return projectName

}
