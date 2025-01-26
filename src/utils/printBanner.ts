import { lightCyan, green } from 'kolorist'

/* 打印 banner */
export const printBanner = () => {
  const figLet = ` __  __     __   __     __     ______   __         __  __     ______
/\\ \\/\\ \\   /\\ "-.\\ \\   /\\ \\   /\\  == \\ /\\ \\       /\\ \\/\\ \\   /\\  ___\\
\\ \\ \\_\\ \\  \\ \\ \\-.  \\  \\ \\ \\  \\ \\  _-/ \\ \\ \\____  \\ \\ \\_\\ \\  \\ \\___  \\
 \\ \\_____\\  \\ \\_\\\\"\\_\\  \\ \\_\\  \\ \\_\\    \\ \\_____\\  \\ \\_____\\  \\/\\_____\\
  \\/_____/   \\/_/ \\/_/   \\/_/   \\/_/     \\/_____/   \\/_____/   \\/_____/
`
  const info = `
  作者: 大麦大麦
  文档: https://jackie-lin.github.io/uni-lin-doc
  掘金: https://juejin.cn/user/2368772393149325
  gitee: https://gitee.com/FOM/uni-plus.git
  github: https://github.com/Jackie-Lin/uni-plus
  `
  console.log('------------------------------------------------------------------------');
  console.log(lightCyan(green(figLet)));
  console.log(info);
  console.log('------------------------------------------------------------------------\n');
}