import { green, red } from 'kolorist'
import type { TemplateList } from './type'

export const templateList: TemplateList[] = [
  {
    title: `uni-plus-base${green('(base 项目)')}`,
    branch: 'base',
    url: {
      gitee: 'https://gitee.com/FOM/uni-plus.git',
      github: 'https://github.com/Jackie-Lin/uni-plus',
    },
    description: `${red('(base 项目)')}`
  },
  {
    title: `uni-plus-demo${green('(demo 项目)')}`,
    branch: 'demo',
    url: {
      gitee: 'https://gitee.com/FOM/uni-plus.git',
      github: 'https://github.com/Jackie-Lin/uni-plus',
    }, // 模板地址
    description: `${red('(demo 项目)')}`
  }
]
