import webpack from "webpack";
import baseConfig from "./webpack.config";
import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";
export default function () {
  const base = baseConfig();

  return {
    ...base,
    entry: {
      main: path.join(__dirname, "src", "example.tsx"),
    },
    devServer: { allowedHosts: "all" },
    output: {
      path: path.join(__dirname, "docs"),
      filename: "bundle.js",
      libraryTarget: "window",
    },
    target: "web",
    mode: "production",
    plugins: [
      ...base.plugins,
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
    ],
    externals: [],
  };
}
