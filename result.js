(function () {
  window.dabResult = window.dabResult || [];

  var testFiles = document.getElementsByClassName('dabtestfile');

  var getResult = function (filname) {
    for (var i = 0; i < window.dabResult.length; i++) {
      var result = window.dabResult[i];
      if (result.src === src) {
        return result.loaded;
      }
    }
    return false;
  };

  var allLoaded = true;

  var dumpData = [];
  for (var i = 0; i < testFiles.length; i++) {
    var testFile = testFiles[i];
    var src = testFile.getAttribute('src');
    var loaded = getResult(src);
    if (!loaded) {
      allLoaded = false;
    }
    dumpData.push({
      src: src,
      loaded: loaded
    });
  }

  if (allLoaded) {
    // AdBlocker is OFF
    var result = document.getElementById('result');
    result.classList.remove('warning');
    result.classList.add('success');
    result.innerHTML = 'OFF';
  }

  var dump = document.getElementById('dump');
  dump.innerHTML = JSON.stringify(dumpData, null, 2);
})();