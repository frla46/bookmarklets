// 開いているページのHTMLをコピーする

javascript: (function () {
  var html = document.documentElement.outerHTML;
  var newWindow = window.open();
  newWindow.document.open();
  newWindow.document.write(
    "<pre>" + html.replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</pre>",
  );
  newWindow.document.close();
})();
