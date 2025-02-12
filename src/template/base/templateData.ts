import { green, red } from 'kolorist'
import type { TemplateList } from './type'

export const templateList: TemplateList[] = [
  {
    defaultProjectName: 'uni-plus-base',
    extra: `${green('(基础模板)')}`,
    branch: 'base',
    url: {
      gitee: 'https://gitee.com/DaMaiCoding/uni-plus.git',
      github: 'https://github.com/DaMaiCoding/uni-plus.git',
    },
    runCode: 'pnpm dev:h5'
  },
  {
    defaultProjectName: 'uni-plus-demo', 
    extra: `${green('(DEMO项目)')}`,
    branch: 'demo',
    url: {
      gitee: 'https://gitee.com/DaMaiCoding/uni-plus.git',
      github: 'https://github.com/DaMaiCoding/uni-plus.git',
    }, // 模板地址
    runCode: 'pnpm dev:h5'
  },
  {
    defaultProjectName: 'uni-plus-mock',
    extra: `${green('(MOCK项目)')}`,
    branch: 'master',
    url: {
      gitee: 'https://gitee.com/DaMaiCoding/uni-plus-mock.git',
      github: 'https://github.com/DaMaiCoding/uni-plus-mock.git',
    }, // 模板地址
    runCode: 'pnpm start:dev'
  }
]
