import config from './webpack.base.config.babel.js';

export default {
  ...config,
  entry: {
    "request": './src/request.js',
    "example/HelloWorld": './example/HelloWorld/index.js',
    "example/HistoryBuff": './example/HistoryBuff/index.js',
    "example/MinecraftHelper": './example/MinecraftHelper/index.js',
    "example/SpaceGeek": './example/SpaceGeek/index.js'
  }
};