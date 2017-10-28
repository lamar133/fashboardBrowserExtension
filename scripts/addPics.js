//$(function (){
//    $('#addPics').click(function(){
//        console.log('addpics clicked');
//        chrome.tabs.query({active:true, currentWindow:true}, function (tabs){
//            chrome.tabs.sendMessage(tabs[0].id, {action: "addPics"});
//        })
//    })
//})

$(function (){
    $('#addPics').click(function(){
        console.log('addpics clicked');

        function collectPics() {

            var images = [];

            for(var i = 0; i < document.images.length; i++){
              images.push(document.images[i].src);
            }
            
            var serializedImages = JSON.stringify(images)

            return images;
        }

        chrome.tabs.executeScript({
            code: '(' + collectPics + ')();'
            }, (results) => {
            console.log(results);
        });
    });
})
                        