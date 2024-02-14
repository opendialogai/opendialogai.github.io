document.getElementById('scenerioSelector').addEventListener('change', function() {
    document.body.style.backgroundColor = this.value;
    document.getElementById('scenerioSelected').textContent = this.value;
});
document.getElementById('submitBtn').addEventListener('click', function() {
    var url = document.getElementById('urlInput').value;
    if(url) {
        if(!url.match(/^[a-zA-Z]+:\/\//)) {
            url = 'http://' + url;
        }
        document.getElementById('webFrame').src = url;
    }
});
