const { override, fixBabelImports, addLessLoader, addWebpackPlugin } = require('customize-cra');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

process.env.GENERATE_SOURCEMAP = "false";

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        //为支持新版less-loader的配置方式，对于源码有所修改  modules:{localIdentName: '[path][name]__[local]--[hash:base64:5]'}
        javascriptEnabled: true,
        modifyVars: {}
    }),
    addWebpackPlugin(new AntdDayjsWebpackPlugin())
);