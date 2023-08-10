(function () {
  Array.prototype.forEach.call(
    document.querySelectorAll("body *"),
    function (el) {
      var cs = window.getComputedStyle(el);
      if (cs.position == "fixed" || cs.position == "sticky") {
        el.parentNode.removeChild(el);
      }
    }
  );
})();
