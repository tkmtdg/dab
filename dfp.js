(function () {
  var url = new URL(document.currentScript.src);
  window.dabResult = window.dabResult || [];
  window.dabResult.push({
    src: url.pathname,
    loaded: true
  });
})();