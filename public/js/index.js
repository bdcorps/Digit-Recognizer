$("#inptxt").on("change input paste keyup", function() {
updatepixels();
});

$(document).ready(function() {
  updatepixels();
})

var max = 7;
function updatepixels() {
      var input = document.getElementById("inptxt").value;

        if (input.length>max){
          max = input.length;
        }
      var canvas = document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");
      for (i = 0; i < 36; i++) {
         var ind_x = i%6;
         var ind_y = Math.floor(i/6);
         if (input[i]==1){
         ctx.fillStyle = "#FF0000";
         ctx.fillRect(20*ind_x,(20*ind_y),20,20);
      }else if(input[i]==0){
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(20*ind_x,(20*ind_y),20,20);}else{
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(20*ind_x,(20*ind_y),20,20);}
    }
 }
