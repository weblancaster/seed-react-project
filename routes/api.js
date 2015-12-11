'use strict';

import transformMarkdown from '../libs/index';

export default function api(router) {
  router.route('/docs/:name')
    .get(function(req, res, next) {
      let name = req.params.name;
      let markdownAsHTML = transformMarkdown(name);

      res.json({
        data: markdownAsHTML
      });
    });
};
