const news = require('./news/news.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(news);
};
