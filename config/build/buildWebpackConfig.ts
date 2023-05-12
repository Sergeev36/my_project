import {buildLoaders} from "./buildLoaders";
import {buildResolves} from "./buildResolves";
import {buildPlugins} from "./buildPlugins";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig (options: BuildOptions): webpack.Configuration {
  const {mode, paths, isDev} = options

  return {
    mode,
    entry: paths.entry,
    output: {
      path: paths.build,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolves(),
    plugins: buildPlugins(options),
    devtool: isDev ?'inline-source-map' : undefined,
    devServer: isDev? buildDevServer(options): undefined,
  }
}