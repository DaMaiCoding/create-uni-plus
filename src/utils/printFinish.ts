/* eslint-disable no-console */
import { bold, green } from 'kolorist'

/* 打印完成提示 */
export const printFinish = (projectName: string) => {
  console.log();
  console.log(
    `  ${bold(green(`cd ${projectName}`))}`
  )
  console.log(`  ${bold(green('pnpm install'))}`)
  console.log(`  ${bold(green('pnpm dev:h5'))}`)
  console.log();
}
