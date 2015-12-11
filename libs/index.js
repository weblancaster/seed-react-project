'use strict';

import path from 'path';
import fs from 'fs';
import marked from 'marked';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value;
  }
});

const markDownPath = path.join(__dirname, '../docs');

export default function transformMarkdown(name) {
  let files = fs.readdirSync(markDownPath);

  for ( let i = 0; i < files.length; i++ ) {
    let file = files[i];
    if ( file.indexOf(name) > -1 ) {
      return markdownToHtml(file);
    }
  }
};

function markdownToHtml(file) {
  let filePath = path.join(markDownPath, file);
  let markdownFile = fs.readFileSync(filePath);
  let markdownAsHTML = marked(markdownFile.toString());

  return markdownAsHTML;
}