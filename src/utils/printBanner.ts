import { lightCyan, green } from 'kolorist'
import process from 'node:process'
import fse from 'fs-extra'
import path from 'node:path'

/* 打印 banner */
export const printBanner = (projectName: string) => {
  const pkgJson = fse.readJSONSync(path.join(process.cwd(), `${projectName}/package.json`));
  const version = pkgJson.version;

  const figLet = ` __  __     __   __     __     ______   __         __  __     ______
/\\ \\/\\ \\   /\\ "-.\\ \\   /\\ \\   /\\  == \\ /\\ \\       /\\ \\/\\ \\   /\\  ___\\
\\ \\ \\_\\ \\  \\ \\ \\-.  \\  \\ \\ \\  \\ \\  _-/ \\ \\ \\____  \\ \\ \\_\\ \\  \\ \\___  \\
 \\ \\_____\\  \\ \\_\\\\"\\_\\  \\ \\_\\  \\ \\_\\    \\ \\_____\\  \\ \\_____\\  \\/\\_____\\
  \\/_____/   \\/_/ \\/_/   \\/_/   \\/_/     \\/_____/   \\/_____/   \\/_____/
`
  const info = `
  作者: 大麦大麦
  文档: https://damaicoding.github.io/uni-plus-doc
  掘金: https://juejin.cn/user/2368772393149325
  gitee: https://gitee.com/DaMaiCoding/uni-plus
  github: https://github.com/damaicoding/uni-plus
  @version: v${version}
  `

  console.log()
  console.log('------------------------------------------------------------------------');
  console.log(lightCyan(green(figLet)));
  console.log(info);
  console.log('------------------------------------------------------------------------\n');
}