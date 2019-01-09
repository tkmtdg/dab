(function () {
  var n = document.getElementsByClassName('dabtestfile').length;
  if (
    window.dabResult &&
    window.dabResult.length &&
    window.dabResult.length === n
  ) {
    // AdBlocker is OFF
    var result = document.getElementById('result');
    result.innerHTML = 'OFF';
  }
})();