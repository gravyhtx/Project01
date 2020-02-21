//Variable Assignments
var container = $("#parent");
var happyURL = "https://openwhyd.org/u/5e4d6e9f7853a6bfdd389ff7/playlist/1?format=json";
var focusURL = "https://openwhyd.org/u/5e4d6e9f7853a6bfdd389ff7/playlist/2?format=json";
var angryURL = "https://openwhyd.org/u/5e4d6e9f7853a6bfdd389ff7/playlist/3?format=json";
var melancholyURL = "https://openwhyd.org/u/5e4d6e9f7853a6bfdd389ff7/playlist/4?format=json";
var waddupURL = "https://openwhyd.org/u/5e4d6e9f7853a6bfdd389ff7/playlist/0?format=json";
var queryURL;

//Ajax request for playlist
function request(){
    if ($(this).text() === "Happy"){
        queryURL = happyURL;
    } else if ($(this).text() === "Focus"){
        queryURL = focusURL;
    } else if ($(this).text() === "Angry"){
        queryURL = angryURL;
    } else if ($(this).text() === "Melancholy"){
        queryURL = melancholyURL;
    } else if ($(this).text() === "Waddup"){
        queryURL = waddupURL;
    }

    container.empty();
    console.log($(this).text());
    $.ajax({
        url: queryURL,
        method: "GET",
        dataType: "jsonp"
    }).then(function(response){
        console.log(response);
        for (i=0;i<5;i++){
            var songName = $("<span class='black-text' id='song-name'>");
            var newRow = $("<div class='row getIn'>");
            var assemblyRow = $("<div class='card-panel col s6 offset-l2 grey lighten-5 z-depth-1'>");
            var allignmentRow = $("<div class= 'row valign-wrapper'>");
            var imgCol = $("<div class='col s2'>");
            var textCol = $("<div class='col s10'>");
            songName.text(response[i].name);
            var songImg = $("<img src='"+response[i].img+"' alt='"+songName+"' class='circle responsive-img'>");
            textCol.append(songName);
            imgCol.append($("<br>"));
            imgCol.append(songImg);
            allignmentRow.append(imgCol);
            allignmentRow.append(textCol);
            assemblyRow.append(allignmentRow);
            newRow.append(assemblyRow);
            container.append(newRow);
            slideIn();
            // var musicPlayerCol = $("<div class='offset-l1 col s2'>");
            // var dataExp = new RegExp(/(\/yt\/)/, "gmi");
            // console.log(dataExp);
            // var idOnly = response[i].eId.replace(dataExp, "");
            // console.log(idOnly);
            // var newPlayer = $("<div data-video='"+idOnly+"' data-autoplay='0' data-loop='1' id='youtube-audio'>");
            // musicPlayerCol.append(newPlayer);
            // assemblyRow.append(musicPlayerCol);
            // var firstScript = $("<script>");
            // var secondScript = $("<script>");
            // firstScript.attr("src","https://www.youtube.com/iframe_api");
            // console.log(firstScript);
            // $("head").append(firstScript);
            // secondScript.attr("src","https://cdn.rawgit.com/labnol/files/master/yt.js");
            // console.log(secondScript)
            // $("head").append(secondScript);
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

// Type Effect
// setTimeout(myFunction, 3000)
var showText = function (target, message, index, interval,) {   
    if (index < message.length) {
      $(target).append(message[index++]);
      setTimeout(function () { showText(target, message, index, interval,); }, interval);
    }
  }
  $(function () {
    showText("#h3", "Tell me how you're feeling...", 0, 150,);   
  });

console.log(YT);