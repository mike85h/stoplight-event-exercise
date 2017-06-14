(function() {
  'use strict';
  document.getElementById('stopButton').onclick = illuminateRed;
  document.getElementById('slowButton').onclick = illuminateYellow;
  document.getElementById('goButton').onclick = illuminateGreen;

  function illuminateRed() {
    if(document.getElementById('stopLight').style.backgroundColor == "red"){
      document.getElementById('stopLight').style.backgroundColor = "black";
    }else{
      document.getElementById('stopLight').style.backgroundColor = "red";
    }
  }

  function illuminateYellow() {
    if(document.getElementById('slowLight').style.backgroundColor == "yellow"){
      document.getElementById('slowLight').style.backgroundColor = " black";
    }else{
      document.getElementById('slowLight').style.backgroundColor = "yellow";
    }
  }

  function illuminateGreen(){
    if(document.getElementById('goLight').style.backgroundColor == "green"){
      document.getElementById('goLight').style.backgroundColor = "black";
    }else{
      document.getElementById('goLight').style.backgroundColor = "green";
    }
  }

  //if .mouseenter event happens, then console.log("Entered <textContent> Button") .mouseleave
  //


  // YOUR CODE HERE
})();




// function clearLights() {
//   document.getElementById('stopLight').style.backgroundColor = "black";
//   document.getElementById('slowLight').style.backgroundColor = "black";
//   document.getElementById('goLight').style.backgroundColor = "black";
// }
