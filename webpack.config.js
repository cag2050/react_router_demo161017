/**
 * Created by chenanguo on 2016/10/14.
 */
var fs = require("fs"),
    path = require("path"),
    jspage = "/js/page/";
// 获得js/page文件夹下的js文件
var getJsFiles = function () {
    var jsPath = path.resolve("src" + jspage);
    var dirs = fs.readdirSync(jsPath);
    var matchs = [],
        files = {},
        all = [];
    dirs.forEach(function (item) {
        matchs = item.match(/(.+)\.js$/);
        var _path = '';
        if (matchs) {
            _path = path.resolve("src" + jspage, item);
            files[matchs[1]] = _path;
            all.push(_path);
        }
    });
    return files;
};

var config = {
    // entry: './src/js/index.js',
    entry: getJsFiles(),
    // 启动webpack-dev-server后，你在目标文件夹中是看不到编译后的文件的,实时编译后的文件都保存到了内存中。
    output: {
        path: './dist/js/page',
        // 如果配置了publicPath这个字段的值的话，在index.html文件里面也应该做出调整。
        // 因为webpack-dev-server伺服的文件是相对publicPath这个路径的。
        // publicPath: '/assets/',
        filename: 'bundle.js'
        // filename: "[name].js"
        // sourceMapFilename: "[file].map"
    },
    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                exclude: "/node_modules/",
                loader: 'babel',
                query: {
                    // presets: ['es2015']
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};

// console.log(config);
module.exports = config;