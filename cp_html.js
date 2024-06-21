// 開いているページのHTMLをコピーする

javascript: (function () {
  var e = document.createElement("textarea");
  e.value = document.documentElement.innerHTML;
  document.body.appendChild(e);
  e.select();
  document.execCommand("copy");
  document.body.removeChild(e);
})();
