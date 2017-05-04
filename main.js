$(document).ready(function(){
console.log("Your document is ready!");
  $(".button").on("click", function(){
      if ($(this).hasClass("lie")) {
        $(".button").removeAttr("id");
        /*$(this).css({'border-color': '#56A589', 'color' :'#56A589'});*/
        $(this).attr('id',"false");
        $("header").text("Correct!").css({'text-align' : 'center', 'font-weight' : 'bold', 'color' : '#56A589' });
      } else {
        $(".button").removeAttr("id");
        /*$(this).css({'border-color' :'#DB6f6f', 'color' :'#DB6f6f'});*/
        $(this).attr('id',"true");
        $("header").text("Wrong, Try Again").css({'text-align' : 'center', 'font-weight' : 'bold', 'color' : '#DB6f6f' });
      }
  });

});
