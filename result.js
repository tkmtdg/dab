(function () {
  if (
    !window.dabResult ||
    !window.dabResult.length
  ) {
    // AdBlocker is ON
    return;
  }

  var testFiles = document.getElementsByClassName('dabtestfile');

  var getResult = function (filname) {
    for (var i = 0; i < window.dabResult.length; i++) {
      var result = window.dabResult[i];
      if (result.filename === filename) {
        return result.loaded;
      }
    }
    return false;
  };

  var loadedAtLeastOne = false;

  var dumpData = [];
  for (var i = 0; i < testFiles.length; i++) {
    var testFile = testFiles[i];
    var filename = testFile.getAttribute('src');
    var loaded = getResult(filename);
    if (loaded) {
      loadedAtLeastOne = true;
    }
    dumpData.push({
      filename: filename,
      loaded: loaded
    });
  }

  if (loadedAtLeastOne) {
    // AdBlocker is OFF
    var result = document.getElementById('result');
    result.classList.remove('warning');
    result.classList.add('success');
    result.innerHTML = 'OFF';
  }

  var dump = document.getElementById('dump');
  dump.innerHTML = JSON.stringify(dumpData, null, 2);
})();