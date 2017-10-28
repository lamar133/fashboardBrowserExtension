chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action == "addPics"){

        var images = [];

        for(var i = 0; i < document.images.length; i++){
          images.push(document.images[i].src);
        }
        chrome.runtime.sendMessage({images:images});
    };
});