document.addEventListener('DOMContentLoaded', function() {
    var add = document.getElementById('addURL');
    add.addEventListener('click', function() {
        chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
            var url = tabs[0].url;
            document.getElementById('website').innerHTML = url;
        });
    });
});
