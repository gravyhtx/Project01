console.log("Hopefully it works?");
var songName = $("#song-name");
var queryURL = "https://openwhyd.org/u/4d94501d1f78ac091dbc9b4d/playlist/10?format=json&limit=10000"

$.ajax({
    url: queryURL,
    method: "GET",
    dataType: "jsonp"
}).then(function(response){
    songName.text(response[0].name);
})