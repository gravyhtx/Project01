//Variable Assignments
var queryURL = "https://openwhyd.org/u/5e4d6e9f7853a6bfdd389ff7/playlist/0?format=json"
var container = $("#parent");

function request(){
    container.empty();
    console.log($(this).text());
    $.ajax({
        url: queryURL,
        method: "GET",
        dataType: "jsonp"
    }).then(function(response){
        console.log(response);
        for (i=0;i<4;i++){
            var songName = $("<span class='black-text' id='song-name'>");
            var newRow = $("<div class='row getIn'>");
            var assemblyRow = $("<div class='card-panel col s6 offset-l2 grey lighten-5 z-depth-1'>");
            var allignmentRow = $("<div class= 'row valign-wrapper'>");
            var imgCol = $("<div class='col s2'>");
            var textCol = $("<div class='col s10'>");
            songName.text(response[0].name);
            var songImg = $("<img src='"+response[0].img+"' alt='"+songName+"' class='circle responsive-img'>");
            textCol.append(songName);
            imgCol.append($("<br>"));
            imgCol.append(songImg);
            allignmentRow.append(imgCol);
            allignmentRow.append(textCol);
            assemblyRow.append(allignmentRow);
            newRow.append(assemblyRow);
            container.append(newRow);
            slideIn();
        }
    })
}

//Animation Controller
function slideIn(){
    var element =  $(".getIn");
    element.addClass("animated bounceInLeft");
}
//Animation Reset
function resetAnimate(){
        var element = $(".getIn");
        element.removeClass("animated bounceInLeft");
}

//Event Listeners
$(document).on("click", "a", request);
$(document).on("animationend", ".animated", resetAnimate);