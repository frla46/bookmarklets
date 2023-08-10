(function () {
  var e = document.createElement("textarea");
  var title = document.title;
  var url = document.URL;
  var dt = new Date();
  var y = dt.getFullYear();
  var m = ("00" + (dt.getMonth() + 1)).slice(-2);
  var d = ("00" + dt.getDate()).slice(-2);
  var date = y + "/" + m + "/" + d;
  e.textContent = title + ", " + url + ", " + date + "参照";
  document.querySelector("body").append(e);
  e.select();
  document.execCommand("copy");
  e.remove();
})();
