javascript: (function () {
  var e = document.createElement("textarea");
  var title = document.title
    .replace(/\[/g, "\\[")
    .replace(/]/g, "\\]") // escape "[]"
    .replace(/\|/g, "\\|"); // escape "|"
  var url = document.URL.replace(/\(/g, "%2528").replace(/\)/g, "%2529"); // escape "()"
  e.textContent = "[" + title + "](" + url + ")";
  document.querySelector("body").append(e);
  e.select();
  document.execCommand("copy");
  e.remove();
})();
