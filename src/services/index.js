const news = require('./news/news.service.js');
const users = require('./users/users.service.js');
const shops = require('./shops/shops.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(news);
  app.configure(users);
  app.configure(shops);
};
