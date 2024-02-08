$(document).ready(function() {
  $('#img').click(function() {
      console.log("position: ", $('#img').position());
  }); 
  
  $("#img").draggable({
      axis: 'x', // Restrict movement to the x-axis
      stop: function() {
          if ($('#img').position().left > 500) {
              console.log("user clicked img");
              $("#outputMsg").text("Shrek is Free!");
              $("#outputMsg").toggleClass("rainbow-flash"); // Toggle the rainbow animation class
          } else {
              $("#outputMsg").removeClass("rainbow-flash"); // Remove the rainbow animation class if not dragged more than 300 pixels
          }
      }  
  });
});