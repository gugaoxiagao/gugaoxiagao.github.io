// var plugins = [];
// if (['production', 'prod'].includes(process.env.NODE_ENV)) {
//   plugins.push('transform-remove-console');
// }

module.exports = {
  // presets: [
  //   '@vue/cli-plugin-babel/preset'
  // ]

  // transpileDependencies: []
  // presets: [
  //   ['@vue/app', {
  //       useBuiltIns: 'entry'
  //   }]
    presets: [
      '@vue/app'
    ]
  //   // ['@vue/app', {
  //   //   polyfills: [
  //   //     'es.promise',
  //   //     'es.symbol'
  //   //   ]
  //   // }]
  // plugins: plugins
};
