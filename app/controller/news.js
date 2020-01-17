const Controller = require('egg').Controller;

class NewController extends Controller {
  async list() {
    const user = await this.service.newsService.find();
    console.log(user);
    this.ctx.body = {
      user: 'admin—test2',
      data: user,
    };
  }
}

module.exports = NewController;
