'use strict';

let transformMarkdown = require('../libs/index');

module.exports = function(router) {
  router.route('/docs/intro')
    .get(function(req, res, next) {
      let markdownAsHTML = transformMarkdown('intro');

      res.json({
        data: markdownAsHTML
      });
    });

  router.route('/docs/plugins')
    .get(function(req, res, next) {
      let markdownAsHTML = transformMarkdown('plugins');

      res.json({
        data: markdownAsHTML
      });
    });

};
