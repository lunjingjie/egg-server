exports.mysql = {
  dialect: 'mysql',
  host: 'santak_mysql',
  port: 3306,
  database: 'santak',
  username: 'lovelp',
  password: 'mm123321',
  timezone: '+08:00',
  define: {
    createAt: 'created_at',
    updatedAt: 'updated_at',
    freezeTableName true,
    timestamp: true,
    getterMethods: {
      created_at() {
        const created_at = this.getDataValue('created_at');
        if (created_at) {
          return fecha.format(created_at, 'YYYY-MM-DD HH:mm:ss');
        }
      },
      updated_at() {
        const updated_at = this.getDataValue('updated_at');
        if (updated_at) {
          return fecha.format(updated_at, 'YYYY-MM-DD HH:mm:ss');
        }
      },
    },
  },
};

export.redis = {
  client: {
    port: 6370,
    host: 'santak_redis',
    password: '123456',
    db: 0,
  },
};

