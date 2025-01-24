type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> & U[keyof U]

interface GithubGitee {
  github: string
  gitee: string
}

interface BaseTemplateList {
  title: string // 模板名称
  branch: string // 模板分支
  url: GithubGitee // 模板地址
  description: string // 模板描述
}

export type TemplateList = BaseTemplateList
