const Service = require('egg').Service;

class newsService extends Service {
  async find() {
    const user = await this.app.mysql.query('select * from users');
    return user;
  }
}

module.exports = newsService;
