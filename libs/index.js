'use strict';

let path = require('path');
let fs = require('fs');
let markdown = require("markdown").markdown;

let markDownPath = path.join(__dirname, '../docs');

module.exports = function transformMarkdown(name) {
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
  let markdownAsHTML = markdown.toHTML(markdownFile.toString());

  return markdownAsHTML;
}