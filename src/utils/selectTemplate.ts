import { select } from '@inquirer/prompts';
import { templateList } from '../template/base/templateData'

/* 选择模板，获取模板名称 */
export const selectTemplate = async () => {
  const templateName = await select({
    message: '请选择项目模版',
    choices: templateList.map((item) => {
      return {
        name: item.defaultProjectName + item.extra,
        value: item.defaultProjectName,
      }
    }),
  });

  return templateName
}