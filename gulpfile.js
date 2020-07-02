
const gulp = require("gulp");
const webpackStream = require("webpack-stream");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");
const del = require("del");

let clean = () => {
    return del("./dist");
};

let move = () => {
    return gulp.src("./src/**/*").pipe(gulp.dest("./dist"));
};

let compile = () => {
    return gulp.src("./dist/countDown.js").pipe(webpackStream({
        devtool: "source-map",
        output: {
            filename: "countDown.min.js",
            path: __dirname + "/dist"
        },
        module: {
			rules: [{
				test: /\.js$/,  
				use: [{
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}]
			}]
        },
        plugins: [
            new UglifyJsPlugin({
                cache: true,
                sourceMap: true,
                test: /\.js$/,
                parallel: true
            })
        ],
        mode: "production"
    }, webpack)).pipe(gulp.dest("./dist"));;
};

gulp.task("default", gulp.series(clean, move, compile));