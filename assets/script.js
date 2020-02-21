//Variable Assignments
var container = $("#parent");
var happyURL = "https://openwhyd.org/u/5e4d6e9f7853a6bfdd389ff7/playlist/1?format=json";
var focusURL = "https://openwhyd.org/u/5e4d6e9f7853a6bfdd389ff7/playlist/2?format=json";
var angryURL = "https://openwhyd.org/u/5e4d6e9f7853a6bfdd389ff7/playlist/3?format=json";
var melancholyURL = "https://openwhyd.org/u/5e4d6e9f7853a6bfdd389ff7/playlist/4?format=json";
var waddupURL = "https://openwhyd.org/u/5e4d6e9f7853a6bfdd389ff7/playlist/0?format=json";
var queryURL;

var giphSearch = "galaxy";
var giphyURL = "https://api.giphy.com/v1/gifs/search?api_key=rZTYUOqa0z6GfNo3cziHE0JP76USkDx1&q=" + giphSearch + "&limit=20&offset=0&rating=G&lang=en";

function giphyRequest(){
    $.ajax({
        url: giphyURL,
        method: "GET",
    }).then(function(response){
        var giphArr = response.data;
        for (var i = 0; i < 4; i++){
            var r = Math.floor(Math.random() *giphArr.length -1);
            console.log(r);
            var carouselItem = $("<a class='carousel-item'>");
            var carouselGiph = $("<img class='responsive img' src="+response.data[r].images.downsized_large.url+">");
            carouselItem.append(carouselGiph);
            $("#carouselDiv").append(carouselItem);
            
            console.log(response.data[r]);
        };
        $('.carousel.carousel-slider').carousel({fullWidth: true});
    })
};

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
    $.ajax({
        url: queryURL,
        method: "GET",
        dataType: "jsonp"
    }).then(function(response){
        for (i=0;i<5;i++){
            var songName = $("<span class='black-text' id='song-name'>");
            var newRow = $("<div class='row getIn'>");
            var assemblyRow = $("<div class='card-panel col s6 offset-l1 grey lighten-5 z-depth-1'>");
            var allignmentRow = $("<div class= 'row valign-wrapper'>");
            var imgCol = $("<div class='col s2'>");
            var textCol = $("<div class='col s10'>");
            songName.text(response[i].name);
            var songImg = $("<img src='"+response[i].img+"' alt='"+songName+"' class='circle responsive-img'>");
            var mediaCol = $("<div class = 'col s4'>");
            //Regular Expression call
            console.log(response);
            let exp1 = new RegExp(/(?<=tracks\/).*/, "gmi");
            let exp2 = new RegExp(/\/stream/, "gmi");
            let arr1 = exp1.exec(response[i].eId);
            let string1 = arr1[0];
            let id = string1.replace(exp2, "");
            //Soundcloud media player
            var mediaPlayer = $("<iframe width='100%' height='140' scrolling='no' frameborder='no' allow='autoplay' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/"+id+"&color=%232e2a1f&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true'>");
            textCol.append(songName);
            imgCol.append($("<br>"));
            imgCol.append(songImg);
            allignmentRow.append(imgCol);
            allignmentRow.append(textCol);
            mediaCol.append(mediaPlayer);
            assemblyRow.append(allignmentRow);
            newRow.append(assemblyRow);
            newRow.append(mediaCol);
            container.append(newRow);
            slideIn();
        }
    })
};

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

$(document).ready(function(){
  
    
    //Event Listeners
    $(document).on("click", "a", request);
    $(document).on("animationend", ".animated", resetAnimate);
    
    
    giphyRequest();
});


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