/* Yahoo Query Language (YQL)
The YQL (Yahoo! Query Language) platform enables you to query, filter, and combine data across the web through a single interface. It exposes a SQL -like syntax that is both familiar to developers and expressive enough for getting the right data.
*/

// https://gist.github.com/anonymous/7f79807bc6abb00024df

function injectScript(url) {
  'use strict';
  var scriptElement = document.createElement('script');
  scriptElement.setAttribute('src', url);
  scriptElement.setAttribute('type', 'text/javascript');
  document.getElementsByTagName('head')[0].appendChild(scriptElement);
}

function handleResponse(yql) {
  'use strict';
  var items = yql.query.results.feed.entry, output = '', no_items = items.length, i, title, link, date;
  for (i = 0; i < no_items; i += 1) {
    title = items[i].title;
    link = items[i].link.href;
    date = items[i].date;
    output += '<li><a href="' + link + '">' + title + '</a>' + date + '</li>';
  }
  // Place news stories in div tag
  document.getElementById('blog.caepa.js').innerHTML = output;
}

document.addEventListener('DOMContentLoaded', function () {
  // https://developer.yahoo.com/yql/console/
  // select * from feednormalizer where url='http://news.ycombinator.com/rss' and output='atom_1.0'
  'use strict';
  injectScript("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20feednormalizer%20where%20url%3D'http%3A%2F%2Fnews.ycombinator.com%2Frss'%20and%20output%3D'atom_1.0'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=handleResponse");
}, false);

