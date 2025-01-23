// 開いているページのタイトルとURLをmarkdown形式でコピーする

javascript: (function () {
  var title = document.title
    .replace(/\[/g, "\\[")
    .replace(/]/g, "\\]")
    .replace(/\|/g, "\\|");
  var url = document.URL.replace(/\(/g, "%2528").replace(/\)/g, "%2529");
  prompt("Markdown Link", "[" + title + "](" + url + ")");
})();
