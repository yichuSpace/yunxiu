// packages/vlib-ui/scripts/build/task/build-style.ts
import { dest, src } from "gulp";
import path from "path";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import cleanCSS from "gulp-clean-css";
import { rollup } from "rollup";
import esbuild from "rollup-plugin-esbuild";
import glob from "fast-glob";
import { compRoot, output, outputEsm, outputCjs } from "../utils/paths";
import { generatePaths } from "../utils/rollup";

/**
 * [src/*.scss] to [es/*.scss, lib/*.scss]
 */
const buildScssCopy = async () => {
  await new Promise((resolve) => {
    src(`${compRoot}/**/*.scss`)
      .pipe(dest(outputEsm))
      .pipe(dest(outputCjs))
      .on("end", resolve);
  });
};
/**
 * [src/**\/style/*.scss] to [es/**\/style/*.css, lib/**\/style/*.css]
 */
const buildScssModules = async () => {
  const sass = gulpSass(dartSass);
  await new Promise((resolve) => {
    src(`${compRoot}/**/style/*.scss`)
      .pipe(sass.sync()) // 编译
      .pipe(autoprefixer({ cascade: false })) // 兼容
      .pipe(cleanCSS()) // 压缩
      .pipe(dest(outputEsm)) // es
      .pipe(dest(outputCjs)) // lib
      .on("end", resolve); // 监听流完成
  });
};
/**
 * [src/*.scss] to [dist/*.css]
 */
const buildScssFull = async () => {
  const sass = gulpSass(dartSass);
  await new Promise((resolve) => {
    src(`${compRoot}/*.scss`)
      .pipe(sass.sync()) // 编译
      .pipe(autoprefixer({ cascade: false })) // 兼容
      .pipe(cleanCSS()) // 压缩
      .pipe(dest(output)) // dist
      .on("end", resolve); // 监听流完成
  });
};
/**
 * [src/**\/style/*.ts] to [es/**\/style/*.js, lib/**\/style/*.js]
 */
const buildStyleModules = async () => {
  const input = [
    // style
    ...(await glob(`${compRoot}/**/style/*.ts`)),
    // resolver
    path.resolve(compRoot, "resolver.ts"),
  ];

  const bundle = await rollup({
    input,
    plugins: [
      esbuild({
        sourceMap: true,
      }),
    ],
    external: [/./],
    treeshake: false,
  });

  await Promise.all([
    bundle.write({
      format: "esm",
      dir: outputEsm,
      exports: undefined,
      preserveModules: true,
      preserveModulesRoot: "src",
      sourcemap: true,
      entryFileNames: `[name].mjs`,
    }),
    bundle.write({
      format: "cjs",
      dir: outputCjs,
      exports: "named",
      preserveModules: true,
      preserveModulesRoot: "src",
      sourcemap: true,
      entryFileNames: `[name].js`,
      paths: generatePaths(),
    }),
  ]);
};

export const buildStyle = async () => {
  await Promise.all([
    buildScssCopy(),
    buildScssModules(),
    buildScssFull(),
    buildStyleModules(),
  ]);
};
