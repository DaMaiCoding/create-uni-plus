import { green, red } from 'kolorist'
import type { TemplateList } from './type'

export const templateList: TemplateList[] = [
  {
    title: `uni-plus-base${green('(base 项目)')}`,
    branch: 'base',
    url: {
      gitee: 'https://gitee.com/DaMaiCoding/uni-plus.git',
      github: 'https://github.com/DaMaiCoding/uni-plus.git',
    },
    runCode: 'pnpm dev:h5'
  },
  {
    title: `uni-plus-demo${green('(demo 项目)')}`,
    branch: 'demo',
    url: {
      gitee: 'https://gitee.com/DaMaiCoding/uni-plus.git',
      github: 'https://github.com/DaMaiCoding/uni-plus.git',
    }, // 模板地址
    runCode: 'pnpm dev:h5'
  },
  {
    title: `uni-plus-mock${green('(mock 项目)')}`,
    branch: 'master',
    url: {
      gitee: 'https://gitee.com/DaMaiCoding/uni-plus-mock.git',
      github: 'https://github.com/DaMaiCoding/uni-plus-mock.git',
    }, // 模板地址
    runCode: 'pnpm start:dev'
  }
]
