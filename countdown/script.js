
var deadlineA = new Date("Jan 25, 2019 14:00:00").getTime();


var x = setInterval(function() {

  
  var mnt = new Date().getTime();
    
  
  var distance = deadlineA - mnt;
    
  
  var jours = Math.floor(distance / (1000 * 60 * 60 * 24));
  var heures = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  
  document.getElementById("deadline").innerHTML = jours + "J " + heures + "h "
  + minutes + "m " + seconds + "s ";
    
   
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("deadline").innerHTML = "Deadline Atteinte";
  }
}, 1000);