import { Spinner } from 'cli-spinner'
import gitClone from 'git-clone/promise'
import { greenBright } from 'colorette'
import { templateList } from '../template/base/templateData'
import { readJson, remove, writeJSON } from 'fs-extra'
import { join } from 'pathe'
import type { TemplateList } from '../template/base/type'

// 下载模板
export const coloneRep = async (projectName: string, templateName: string) => {
  const targetDir = join(process.cwd(), projectName)
  const templateData = templateList.find(v => v.defaultProjectName === templateName) as TemplateList

  const repoUrl = templateData.url.gitee
  const branchName = templateData.branch

  const spinner = new Spinner('正在下载中... %s')
  spinner.setSpinnerString('|/-\\')
  spinner.start()

  await gitClone(repoUrl, projectName, { checkout: branchName })

  await remove(join(targetDir, '.git'))

  const packageJson = await readJson(join(targetDir, 'package.json'))
  packageJson.name = projectName

  await writeJSON(join(targetDir, 'package.json'), packageJson, { spaces: 2 })

  spinner.stop(true)

  console.log();
  console.log(greenBright('模板下载完成'))
}