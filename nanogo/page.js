aboutPop =  function(){
  // console.log("aboutPop");
  projectOff();
   document.getElementById("aboutOverlay").style.display = "block";
    typeWriter() ;
}
aboutOff =  function(){
  // console.log("aboutPop");
   document.getElementById("aboutOverlay").style.display = "none";
}

projectPop =  function(){
  // console.log("aboutPop");
   document.getElementById("projectOverlay").style.display = "block";
   // typeWriter() ;
}
projectOff =  function(){
  // console.log("aboutPop");
  aboutOff();
   document.getElementById("projectOverlay").style.display = "none";
}
//some vars to track the lenght of the strings.

var a1 = 0;
var a2 = 0;
var a3 = 0;
var a4 = 0;
//
var p1 = 0;
var p2 = 0;
var p3 = 0;
var p4 = 0;

var projectTxt1 = " Nano Go is a game about how small things are on the nanoscale. You probably have a sense of how small a millimeter is but you there are 1,000,000 nanometers (nm) in a millimeter.";
var projectTxt2 =  "We lack a frame of reference for things on such a tiny scale. So this game is about trying to let us create that missing frame of reference.";
var projectTxt3 = "Essentially we are going to find out how long it would take you to move 1mm by moving just 1nm at a time. That’s right, how long would it take you to hit a key on your keyboard a million times.";
// var projectTxt4 =

var speed = 20; /* The speed/duration of the effect in milliseconds */

typeWriter = function () {
  if (a1 < projectTxt1.length) {
    document.getElementById("a1").innerHTML += projectTxt1.charAt(a1);
    a1 ++;
    setTimeout(typeWriter, speed);
  }else if(a2 < projectTxt2.length){
    document.getElementById("a2").innerHTML += projectTxt2.charAt(a2);
    a2++;
    setTimeout(typeWriter, speed);
  }else if(a3 < projectTxt3.length){
    document.getElementById("a3").innerHTML += projectTxt3.charAt(a3);
    a3++;
    setTimeout(typeWriter, speed);
  }
}
