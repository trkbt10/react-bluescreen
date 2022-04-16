import path from "path";
import webpack from "webpack";

export default function webpackConfig() {
  return {
    entry: {
      index: path.join(__dirname, "src", "index.tsx"),
    },
    output: {
      path: path.join(__dirname, "dist"),
      filename: "[name].js",
      libraryTarget: "commonjs2",
    },
    mode: "production",
    devtool: undefined,
    target: "web",
    module: {
      rules: [
        {
          test: /.tsx?$/,
          loader: "ts-loader",
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    performance: false,
    optimization: {
      splitChunks: false,
      runtimeChunk: undefined,
      minimize: true,
      providedExports: true,
      usedExports: false,
    },
    plugins: [],
    resolve: {
      extensions: [".js", ".ts", ".tsx", ".json", ".mjs", ".wasm"],
    },
  };
}
