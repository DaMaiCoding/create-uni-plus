import { build } from "esbuild";

await build({
  bundle: true,
  entryPoints: ["./src/index.ts"],
  outfile: "./src/cli/index.cjs",
  format: "cjs",
  platform: "node",
  target: "node18",
  minify: true,
});
