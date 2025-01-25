#!/usr/bin/env node
import { clearFile, coloneRep, getCommand, printBanner, printFinish, selectTemplate } from './utils';

/* 初始化 */
const init = async () => {
  // 1. 打印 uni-plus Banner
  await printBanner()
  // 2. 获取文件名称，可以通过命令行获取，命令行没有就手动输入，不输入就使用默认名称
  const projectName = await getCommand()
  // 3. 选择模板名称
  const templateName = await selectTemplate();
  // 4. 同名文件夹不为空，是否覆盖
  await clearFile(projectName)
  // 5.下载模板
  await coloneRep(projectName, templateName)
  // 6. 打印完成提示
  await printFinish(projectName)
}

init()


