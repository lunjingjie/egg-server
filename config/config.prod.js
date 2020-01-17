'use strict';

module.exports = {
  mysql: {
    client: {
      // host
      host: '118.25.96.101',
      // 端口号
      port: '3306',
      // 用户名
      user: 'lunjingjie',
      // 密码
      password: '1234',
      // 数据库名(开发)
      // database: 'egg_server_dev',
      // 数据库名(生产)
      database: 'egg_server_prod',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  },
};
