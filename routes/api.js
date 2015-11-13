'use strict';

let transformMarkdown = require('../libs/index');

module.exports = function(router) {
  router.route('/docs/:name')
    .get(function(req, res, next) {
      let name = req.params.name;
      let markdownAsHTML = transformMarkdown(name);

      res.json({
        data: markdownAsHTML
      });
    });
};
