console.log("Your index.js file is loaded correctly!");

$(document).ready(funtion(){
  $("a").on('click', funtion(click))}
    if (this. hash !=="pageTop"){
      event.preventDefault();
      var hash= this.hash
    };
 

    $('html, body').animate({
      scrollTop: $(#pageTop).offset().top
    }, 800, function(){
      window.location.hash = hash; 
    });

    // //I could not figure out these js funtions set ups to change color
    // of the buttonand the div when you hovered, i watch like three youtube
    // videos and 5 different tutorials but no luck.  in your grading i would 
    // know why these to funtions didn't work.

    // $(document).ready(function(){
    //   $("button").hover(function(){
    //     var Color = $(this).css("background-color");
    //     $("button").css("background-color", "gray");
    //   });
    // });
    
    // $(document).ready(function(){
    //   $('.cardText').hover(function(){
    //     $('.cardText').css('background','#05d1ff');
    //     },
    //   function(){
    //     $(".cardText").css('background','#767676');
    //   });
    // });

    $(".workCards").hover(
      function myFunction() {
            document.getElementById(".workCards").style.backgroundColor = "#1F4F7C";
      },
      function myFunction() {
         document.getElementById(".workCards").style.backgroundColor = "#349EF";
       })      
    


              
            
     