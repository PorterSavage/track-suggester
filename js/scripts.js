$(document).ready(function(){
  $("form#form").submit(function(event){
    event.preventDefault();
    var os = $("input:radio[name=os]:checked").val();
    var end = $("input:radio[name=end]:checked").val();
    var create = $("input:radio[name=create]:checked").val();
    var build = $("input:radio[name=build]:checked").val();
    var subject = $("input:radio[name=subject]:checked").val();

    if (!os || !end || !create || !build || !subject){
      alert("Make sure you've checked an answer for each question!")
    } else if (os === "windows" && end === "front" && create === "games" && build === "scratch" && subject === "art"){
      $("#java").fadeOut(800);
      $("#java").fadeIn(800);
      $("#ruby").hide();
      $("#csharp").hide();

    } else if (os === "ios" && end === "back" && create === "apps" && build === "ikea" && subject === "math"){
      $("#ruby").fadeIn(800);
      $("#java").hide();
      $("#csharp").hide();

    } else if (end === "neither" && create === "webpages"){
      $("#csharp").fadeIn(800);
      $("#ruby").hide();
      $("#java").hide();

    } else{
      $("#java").fadeOut(800);
      $("#java").fadeIn(800);
      $("#ruby").hide();
      $("#csharp").hide();
    }

  });
});
