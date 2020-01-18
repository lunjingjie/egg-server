// 'use strict';
//
// const JWT = require('jsonwebtoken');
//
// module.exports = options => {
//   return async function(ctx, next) {
//     // 获取request请求中header的authorization值
//     const token = ctx.request.header.authorization;
//     const method = ctx.method.toLowerCase();
//     if (method === 'get') {
//       await next();
//     } else if (!token) {
//       // 如果请求路径为“登录页”或者“注册页”
//       // 跳过 await next();
//       if (ctx.path === '/login') {
//         await next();
//       } else {
//         ctx.throw(401, '请先登录!');
//       }
//     }
//   };
// };
