$(document).ready(function(){
  // var btnText = document.getElementById("wolfbtn");
    $(".more-content").hide();
    $("#wolf-row").hide();
    $(".morebtn").click(function(){
      // $(this).prev(".more-content").slideToggle('fast');
      // btnText.innerHTML = "Less";
      $(".morebtn").innerHTML = "Less";
      // $("#all-row").fadeToggle();
      $("#wolf-row").fadeToggle();

      // $(this).innerHTML = "Less";t
    }); });