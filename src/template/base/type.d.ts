type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> & U[keyof U]

interface GithubGitee {
  github: string
  gitee: string
}

interface BaseTemplateList {
  defaultProjectName: string // 模板名称
  extra: string // 模板额外信息
  branch: string // 模板分支
  url: GithubGitee // 模板地址
  runCode: string // 运行命令
}

export type TemplateList = BaseTemplateList
