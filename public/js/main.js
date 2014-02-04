function handleFile() {
  var previewDiv = document.getElementById('preview');
  var fileList = this.files;
  var reader = new FileReader();

  reader.onload = (function(theFile) {
    return function(e) {
      previewDiv.innerHTML = ['<img class="thumb" src="', 
                        e.target.result, 
                        '" title="', 
                        escape(theFile.name), 
                        '"/>'].join('');
    };
  })(fileList[0]);

  reader.readAsDataURL(fileList[0]);
}

var fileInput = document.getElementById('file');
fileInput.addEventListener('change', handleFile, false);
