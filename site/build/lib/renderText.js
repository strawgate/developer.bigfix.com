var hljs = require('highlight.js'),
  Hogan = require('hogan.js'),
  marked = require('marked');

hljs.registerLanguage('bigfix-relevance', require('hljs-bigfix-relevance'));

/**
 * Highlight relevance code.
 */
function highlightRelevance(relevance) {
  return hljs.highlight('bigfix-relevance', relevance).value;
}

/**
 * Parse the contents of an {{example}} block.
 */
function parseExample(text) {
  var example = { question: '', answers: [], errors: [] };

  text.trim().split('\n').forEach(function(line) {
    if (line.indexOf('Q:') === 0) {
      example.question = highlightRelevance(line.substr(2).trim());
    } else if (line.indexOf('A:') === 0) {
      example.answers.push({text: line.substr(2).trim()});
    } else if (line.indexOf('E:') === 0) {
      example.errors.push({text: line.substr(2).trim()});
    }
  });

  return example;
}

/**
 * Escape any special markdown characters in the example.
 */
function escapeMarkdown(html) {
  return html.replace(/\*/g, '&#42;').replace(/_/g, '&#95;');
}

/**
 * Render a markdown document to HTML.
 */
function renderText(text, templates) {
  var exampleData = {
    example: function() {
      return function(text) {
        return escapeMarkdown(templates.example.render(parseExample(text)));
      };
    }
  };

  var renderer = new marked.Renderer();
  var title = '';

  // Override the 'heading' function so that we can automatically determine
  // the title for this page based on the first heading.

  renderer.heading = function(text) {
    if (title === '') {
      title = text;
    }

    return marked.Renderer.prototype.heading.apply(this, arguments);
  };

  // Override the 'code' function so that we can colorize relevance.

  renderer.code = function(code, language) {
    if (language === 'relevance') {
      return '<pre><code>' + highlightRelevance(code) + '</code></pre>';
    }

    return marked.Renderer.prototype.code.apply(this, arguments);
  };

  var content =
    marked(Hogan.compile(text).render(exampleData), {renderer : renderer});

  return { title: title, content: content };
}

module.exports = renderText;
