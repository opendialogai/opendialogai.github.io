document.getElementById('submitBtn').addEventListener('click', function() {
    var url = document.getElementById('urlInput').value;
    if(url) {
        if(!url.match(/^[a-zA-Z]+:\/\//)) {
            url = 'http://' + url;
        }
        document.getElementById('webFrame').src = url;
    }
});
