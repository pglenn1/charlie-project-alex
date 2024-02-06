$( document ).ready(function() {
   
  $('#img').click( 
    function(){
      //code goes here
      console.log("position: ", $('#img').position() );
    }
  ); 
  
  $( "#img" ).draggable({
      stop: function() {
        if(  $('#img').position().left > 300){
        
          console.log("user clicked img");
    $("#outputMsg").text("WOW YOU WIN!");
    //$("#outputDiv").toggle();
        }
    }  
  });
});