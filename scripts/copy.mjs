/* 将根目录下的 README.md 复制到 packages/cli 下，如果已经存在文件就覆盖*/
import fse from "fs-extra";
import { join } from "pathe";

const readmePath = join(process.cwd(), "README.md");
const cliReadmePath = join(process.cwd(), "packages/cli/README.md");

fse.copySync(readmePath, cliReadmePath);

console.log('README.md 复制成功');