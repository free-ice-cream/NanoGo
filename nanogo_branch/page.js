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
   console.log("aboutPop");
   document.getElementById("projectOverlay").style.display = "block";
   // typeWriter() ;
}
projectOff =  function(){
  // console.log("aboutPop");
  aboutOff();
   document.getElementById("projectOverlay").style.display = "none";
}
calPop = function(s){
  console.log("s= "+s);
  document.getElementById("calendarOverlay").style.display = "block";
  // document.querySelector('.new-cal').appendChild(myCalendar);


  myCalendar = createCalendar({
   options: {
     class: 'my-class',
     id: 'my-id'                               // You need to pass an ID. If you don't, one will be generated for you.
   },
   data: {
     title: 'count to a million',     // Event title
     // start: new Date('June 15, 2019 19:00'),   // Event start date
     start: new Date(s),
     duration: 120,                            // Event duration (IN MINUTES)
     // end: new Date('June 15, 2019 23:00'),     // You can also choose to set an end time.
                                               // If an end time is set, this will take precedence over duration
     address: 'The internet',
     description: 'thats how long it took you to count to one million'
   }
   }),

   document.querySelector('.new-cal').appendChild(myCalendar);
}
calPopOff = function(){
  document.getElementById("calendarOverlay").style.display = "none";
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

var projectTxt1 = "Nano Go is a game about how small things are on the nanoscale.  Which is VERY small: there are one million nanometers (nm) in a millimeter.";
var projectTxt2 = "You probably have a sense of how small a millimeter is- but try to wrap your mind around something that is one millionth of that.";
var projectTxt3 = "This game helps you do just that by transporting you to the nanoscale and asking you to race - moving just one nanometer at a time.";
 var projectTxt4 = "We’re asking the ultimate question.   How long would it take you - you with the fast fingers- to hit a key on your keyboard a million times and travel 1 millimeter?";
var hats="beret";

var speed = 20; /* The speed/duration of the effect in milliseconds */
//
var myCalendar;// a var for the calendar object

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
  }else if(a4 < projectTxt4.length){
    document.getElementById("a4").innerHTML += projectTxt4.charAt(a4);
    a4++;
    setTimeout(typeWriter, speed);
  }
}
