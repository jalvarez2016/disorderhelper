/*global $*/
/*global localStorage*/
$(document).ready(function(){
   $("#disorder").click(function(){
    localStorage.clear();
    localStorage.setItem("disorder",$("#typeofdisorder").val());
    console.log(localStorage.getItem("disorder"));
   })
});  

function api(searchterm){
    $.ajax({
      url: "#"+searchterm+"#",
      method: "GET",
      success: function(response) {
          
      },
    }); 
}