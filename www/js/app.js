//document ready function
$(document).ready(function(){

console.log("DOM ready");
  
function time(){
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
   	var seconds = currentTime.getSeconds();
     if (seconds < 10) 
        {
            // Add the "0" digit to the front
            // so 9 becomes "09"
            seconds = "0" + seconds;
        }
    var clockDiv = document.getElementById('timeDiv');
   
    clockDiv.innerText = hours + ":" + minutes + ":" + seconds;
    setInterval(time, 1000);
        
}
    
    time();
    
    
 });