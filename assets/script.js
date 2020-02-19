console.log("Hopefully it works?");
var songName = $("#song-name");
var queryURL = "https://openwhyd.org/u/5e4d6e9f7853a6bfdd389ff7/playlist/0?format=json"

$.ajax({
    url: queryURL,
    method: "GET",
    dataType: "jsonp"
}).then(function(response){
    songName.text(response[0].name);
})