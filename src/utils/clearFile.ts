import { prompt } from 'prompts';
import { pathExistsSync, readdirSync, removeSync, existsSync } from 'fs-extra'
import { join } from 'pathe'

const isEmpty = (path: string) => {
  return !(pathExistsSync(path) && readdirSync(path).length !== 0)
}

const emptyDir = (path: string) => {
  if (!existsSync(path)) return
  removeSync(path)
}

// 同名文件覆盖
export const clearFile = async (projectName: string) => {
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
}