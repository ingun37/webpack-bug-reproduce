const path = require("path");

module.exports = {
    output: {
        library: 'yourLibName',
        libraryTarget: 'var',
    },
    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, "dist"),
        publicPath: "/",
    },
}