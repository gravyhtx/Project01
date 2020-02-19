console.log("Hopefully it works?");

const element =  document.querySelector('.bounce')
element.classList.add('animated', 'bounceInLeft')
// const element2 =  document.querySelector('.yummy')
// element2.classList.add('animated', 'bounceInLeft')
            

    // $(document).ready(function(){
    //     $('.js--triggerAnimation').click(function(e){
    //       e.preventDefault();
    //       var anim = $('.js--animations').val();
    //       testAnim(anim);
    //     });
var songName = $("#song-name");
var queryURL = "https://openwhyd.org/u/5e4d6e9f7853a6bfdd389ff7/playlist/0?format=json"

$.ajax({
    url: queryURL,
    method: "GET",
    dataType: "jsonp"
}).then(function(response){
    songName.text(response[0].name);
})
