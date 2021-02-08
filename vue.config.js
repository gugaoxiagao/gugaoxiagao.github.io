const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  outputDir: 'docs',
  // lintOnSave: process.env.NODE_ENV === 'development',
  // entry: ['babel-polyfill', './app/js']
  // entry: ['babel-polyfill', './src/main.js']
  configureWebpack: config => {
    // (config.entry.app = ['babel-polyfill', './src/main.js']);
  },
  // entry: ['babel-polyfill', './src/main.js']
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'));
  }

  // chainWebpack: config => {
  //   config.entry('polyfill').add('@babel/polyfill')
  //   // config.resolve.alias
  //   //   .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
  //   //   .set('_c', resolve('src/components'))
  // }
};
