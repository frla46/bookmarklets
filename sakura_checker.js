javascript: (function () {
  var canonicalLink = document.querySelector('link[rel="canonical"]');
  if (canonicalLink) {
    var newUrl = canonicalLink.href.replace(
      /www\.amazon\.co\.jp\/.*\/dp/,
      "sakura-checker.jp/search",
    );
    window.location.href = newUrl;
  }
})();
