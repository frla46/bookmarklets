// 右クリ禁止解除・コピー禁止解除

javascript: (function () {
  var d = document,
    s = [
      "user-select",
      "-webkit-user-select",
      "-moz-user-select",
      "-ms-user-select",
    ],
    a = ["mousedown", "selectstart", "copy", "contextmenu"],
    p = function (e) {
      e.stopPropagation();
    };
  [
    "mousedown",
    "contextmenu",
    "selectstart",
    "copy",
    "keydown",
    "keypress",
    "keyup",
  ].forEach(function (n) {
    d.addEventListener(n, p, true);
  });
  d.body.addEventListener("contextmenu", p);
  Array.prototype.forEach.call(document.querySelectorAll("*"), function (l) {
    s.forEach(function (t) {
      l.style.setProperty(t, "auto", "important");
    });
    a.forEach(function (n) {
      l.addEventListener(n, p, true);
    });
  });
})();
