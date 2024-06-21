// 現在のページをgoogle翻訳する

javascript: (function () {
  location.href =
    "https://translate.google.com/translate?sl=auto&tl=ja&u=" +
    window.location.href.replace("www.reddit.com", "old.reddit.com");
})();
