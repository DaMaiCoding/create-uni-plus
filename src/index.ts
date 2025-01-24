#!/usr/bin/env node

import { Command } from 'commander';
import { select, input } from '@inquirer/prompts';
import { pathExistsSync, readdirSync, removeSync, existsSync, readJson, remove, writeJSON } from 'fs-extra'
import { join } from 'pathe'
import { prompt } from 'prompts';
import { Spinner } from 'cli-spinner'
import gitClone from 'git-clone/promise'
import { greenBright } from 'colorette'
// import { templateList } from './templateList/base/templateData'

const program = new Command();
const create = async (projectName: string) => {
  // 1. 选择模板，获取模板名称
  const templateName = await select({
    message: '请选择项目模版',
    choices: [
      {
        name: 'uni-plus Base 模板',
        value: 'uni-plus-base'
      },
      {
        name: 'uni-plus Demo 模板',
        value: 'uni-plus-demo'
      }
    ],
  });

  // 2. 如果命令行没有项目名，就输入项目名称
  while (!projectName) {
    projectName = await input({ message: '请输入项目名' });
  }

  const isEmpty = (path: string) => {
    return !(pathExistsSync(path) && readdirSync(path).length !== 0)
  }

  const emptyDir = (path: string) => {
    if (!existsSync(path)) return
    removeSync(path)
  }

  const targetDir = join(process.cwd(), projectName)

  if (!isEmpty(targetDir)) {
    const { overwrite } = await prompt({
      name: '是否覆盖',
      default: true,
      type: 'confirm',
      message: () => (targetDir === '.' ? '当前目录' : `目标目录 "${targetDir}"`) + ' 不为空，删除现有文件并继续?',
    })
    if (!overwrite) {
      process.exit(1)
    } else {
      emptyDir(targetDir)
    }
  }

  interface remotesType {
    git: string,
    name: string
  }

  const remotes: remotesType[] = [
    { git: 'https://gitee.com/FOM/uni-lin.git', name: 'uni-plus-base' },
    { git: 'https://gitee.com/FOM/uni-lin.git', name: 'uni-plus-demo' },
  ]

  const remote = remotes.find(v => v.name === templateName)?.git

  const spinner = new Spinner('正在下载中... %s')
  spinner.setSpinnerString('|/-\\')
  spinner.start()

  await gitClone(remote as string, projectName)

  await remove(join(targetDir, '.git'))

  const packageJson = await readJson(join(targetDir, 'package.json'))
  packageJson.name = projectName

  await writeJSON(join(targetDir, 'package.json'), packageJson, { spaces: 2 })

  spinner.stop(true)

  console.log(greenBright('模板下载完成'))
}
// 1. 获取命令行的参数, 根据参数执行不同的逻辑
program
  .name('uni-plus')
  .description('脚手架 uni-plus')

program.command('create')
  .description('创建项目')
  .option('-n, --name <name>', '项目名称')
  .action(async (res) => {
    const { name } = res;
    create(name);
  });

program.parse();
