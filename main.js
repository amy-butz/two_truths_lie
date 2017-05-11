$(document).ready(function(){
console.log("Your document is ready!");
  $(".button").on("click", function(){
      if ($(this).hasClass("lie")) {
        $(".button").removeAttr("id");
        $(this).attr('id',"false");
        $("header").text("Correct!").css({'margin-left' : '0px', 'text-align' : 'center', 'font-weight' : 'bold', 'color' : '#56A589'});
        $('#next').css({'display' : 'block'});
      } else {
        $(".button").removeAttr("id");
        $(this).attr('id',"true");
        $("header").text("Wrong, Try Again").css({'margin-left' : '0px', 'text-align' : 'center', 'font-weight' : 'bold', 'color' : '#DB6f6f' });
      }
  });

  $("#next").on("click", function(){
    $('#Amy').css({'display' : 'none'});
    $('#Aalia').css({'display' : 'block'});
    $("header").text("Guess the Lie...about Aalia...").css({'margin-left' : '20px', 'text-align' : 'left', 'font-weight' : '400', 'color' : 'black' });
  }
)

});
