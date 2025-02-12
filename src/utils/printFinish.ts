/* eslint-disable no-console */
import { bold, green } from 'kolorist'
import { templateList } from '../template/base/templateData'
import type { TemplateList } from '../template/base/type'

/* 打印完成提示 */
export const printFinish = (projectName: string, templateName: string) => {
  const templateData = templateList.find(v => v.defaultProjectName === templateName) as TemplateList
  const runCode = templateData.runCode

  console.log(
    `  ${bold(green(`cd ${projectName}`))}`
  )
  console.log(`  ${bold(green('pnpm install'))}`)
  console.log(`  ${bold(green(runCode))}`)
  console.log();
}
