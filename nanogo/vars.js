
var gameBuild = "build 1.0"; //this is kind of arbitrary  ie the naming conventionstarted at v 0.7 as we were about 6-7 builds in
    ///var hexgrid;
    var hole;//this will be the baddie
    //swap in and out the url string for the different enviroments
    //
    // var ficurl = '/nanogotest/nanogo';
   var ficurl = '';
   var pageTitle="Nano Go!";
   //
   //State Control
   //
   //gameState should be teh definitive var to check to see where we are in the game cycle
   //var gameState =
   var gameLive = false;// this is the core var to check if we are in play mode or  NOT
   var homeTime = false;// so we know when to go home
   var score = 0;
   var scoreText ;
   var startText = "NANO GO How far can you go?";
   var displayText = "you have traveled : ";
   // var endText1 = "OK tryout over NANO Racer! you traveled ";
   // //var endText2 = "you traveled ";
   // var endText2 = " At that rate you will finish the 1mm race track on "
   // var endText3 = " Days! ";
   // //var endText4 = "At that rate you will finish on ";
   // var endText5 = " in ";
   // var endText6 = "s. ";
   //
   //Menu
   var countdown =false;
   //OPTIONS PAGE 1
   //THE BASICS
   var oTo11;
   var oTo12;
   var oTo13;
   var oTo14;
   var oTo15;
   //
   var oto11 ="Step 1: Basics";
   var oto12 ="This is nano Go where you try out as a nano Racer.  That is, this is a simulated race game where you try and drive a race car that is just a few nanometers(nm) long. The nano go race tracks are just 1mm long but there are 1,000,000nm  in 1mm and we will be racing at the speed of 1nm per tap. ";
   var oto13 ="But don’t worry, this is just a trial, a test to see if you have got what it takes to be a nano racer. In this game you will travel as far as you can in 30 seconds. We will then do the maths to see how long it would take you, at your rate of travel, to finish the 1mm race track.";
   var oto14 ="Now let’s choose a Nano Racer and a track to race on.";
   var oto15 ="";

   // OPTIONS PAGE 2 THE CAR
   var oTo21;
   var oTo22;
   var oTo23;
   var oTo24;
   var oTo25;
   //stringd
   var oto21 = "Step 2: Click to select a Nanoracer.";
   var oto22 = "Nano Racer 1";
   var oto23 = "Nano Racer 2";
   var oto24 = "This nano racer is made from two carbon nanotubes. These are tiny cylinders made of carbon connected in a hexagonal pattern. This racer moves well in straight lines but is not so good in the curves.";
   var oto25 = "This nano racer has wheels made from tiny carbon spheres called bucky balls. The carbon here is connected in a pattern resembling the hexagons on a football. This racer can move sideways as fast as it can move forward.";
   //OPTIONS PAGE 3
   // THE TRACK
   //options text objects
   var oTo31 ;
   var oTo32 ;
   var oTo33 ;
   var oTo34 ;
   var oTo35 ;
   // options pge 2 strings
   var oto31 = "Step 3: Click to select a race track.";
   var oto32 = "Track 1";
   var oto33 = "Track 2";
   var oto34 = "This is the standard Graphene race track. Graphene is just one super thin crystal of carbon.";
   var oto35 = "This track is made from Graphene too. However, this one is kept at 10 ºK. that's  -263 ºC to most of us. At these temperatures you can move with almost no friction but if you collide with a hole you will not have enough energy to escape it!";
   // Game Over Text objects
   var goT;
   var goTo1;
   var goTo2;
   var goTo3;
   //game over strings
   var goTitle = "GAME OVER Nano Racer!";
   var goto1a ="You traveled ";
   var goto1b = "nm in ";
   var goto1c = " seconds. That means you were hitting the forward arrow an average of ";
   var goto1d =" times a second.";
   //
   var goto2a ="If you continued to tap at that rate,to complete the track you will have to keep tapping until next ";
   var goto2b =" at around ";
   var goto2c = "  Thats a lot of counting!";
   //
   // var goto3 = "A million is a big number and a nanometer is a very short distance. ";
   var goto3 = "To help that sink in, you can use this button to set up a calendar reminder that will let you know when you would finish the race. It will help you to get a feel of how big a million is and therefore how small things are on the nanoscale.";

   //
   //var endText7 = "jjjjjjjjj"
   var si = "nM ";
   //
   // new end text vars
   var distanceTraveled;
   var timeTaken;
   var nTimesThisTime;
   var finishDayTime;
   //
   var introT;
   var introText = "Hit Space bar to play";
   var countDown;
   var gameTime=30;
   const gameDuration = 30;
   //
   var  clockX=  650;
   var clockY = 16;
   //
   var endX =70;
   var endY = 180;
   //
   //SOME POINT POSITIONS
   //HUD
   var hudTop =0;
   var hudLeft =0;
   var hudRight =800;
   var hudBot =120;
   // var hudTop =game.world.height-120;
   // var hudLeft =0;
   // var hudRight =game.world.width;
   // var hudBot =game.world.height;

   //Game Over
   var goTop = 150;
   var goLeft = 60;
   var goRight = 740;
   var goBot = 450;
   //game start
   var hudOffset =80;
   //the rest of these values are edited drectly in play.js because we andt to be able to use game.world.height / width
   var gsTop = 180;
   var gsLeft = 60;
   var gsRight = 740;
   var gsBot = 450;
   //
   var hudSet = false;//a toggle to knwo when the hud is drawn
   var goSet = false;// a toggle to know when the g o bg is drawn
   var gsSet = false;// a toggle to knwowhen the g start is drawn
   //
   var spaceKey; //a var for the spacebar
   var carGrav = 0;//300;// teh "amount" of gravity // SWITCHED OFF!!
   var carBounce = 0.3;// the bounce factor when teh car lands at teh start
   var tileRate = 16 ;//the rate at which the background moves
   //
   var rev;
   var mainTheme;
   //
   var starTrack;
   var trackLX = 200;
   var trackRX = 550;
   var trackYD = 100;
//
  var carStartY= 300; //a start pos for a new car
  var frameNo=1;//animation frame position
   //
   var timeText;
   var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   var finishTime;
   //
   //FONTS
   var timestyle = { font: 'bold 40pt Consolas ', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 650 };//countdown
   var st32 = { font: 'bold 32pt courier ', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 650 };
   var st24 = { font: 'bold 24pt courier ', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 650 };
   var st64 = { font: 'bold 64pt courier ', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 650 };
   var st56 = { font: 'bold 56pt courier ', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 650 };
   var introStyle = { font: 'bold 60pt courier ', fill: 'GREEN', align: 'left', wordWrap: true, wordWrapWidth: 650 };
   var endStyle = { font: 'bold 28pt courier ', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 650 };
   var main56 ={font: ' 56pt ChintzyCPUBRK', fill: 'green', align:'left', wordWrap: true, wordWrapWidth: 650 };
   var main28white ={font: ' 28pt ChintzyCPUBRK', fill: 'white', align:'left', wordWrap: true, wordWrapWidth: 750 };
   var main28green ={font: ' 28pt ChintzyCPUBRK', fill: 'green', align:'left', wordWrap: true, wordWrapWidth: 650 };
   var main28greenc ={font: ' 18pt Consolas', fill: 'green', align:'left', wordWrap: true, wordWrapWidth: 650 };
   var first18greenc ={font: ' 16pt Consolas', fill: 'green', align:'left', wordWrap: true, wordWrapWidth: 750 };
   var main28grey ={font: ' 28pt ChintzyCPUBRK', fill: 'grey', align:'left', wordWrap: true, wordWrapWidth: 650 };
   var main18green ={font: ' 18pt ChintzyCPUBRK', fill: 'green', align:'left', wordWrap: true, wordWrapWidth: 600 };
   var main18greenc ={font: ' 17pt Consolas', fill: 'green', align:'left', wordWrap: true, wordWrapWidth: 600 };
   var main18grey ={font: ' 18pt ChintzyCPUBRK', fill: 'grey', align:'left', wordWrap: true, wordWrapWidth: 600 };
   var main18greyc ={font: ' 17pt Consolas', fill: 'grey', align:'left', wordWrap: true, wordWrapWidth: 600 };
   var main18bluec ={font: ' 17pt Consolas', fill: '#1E3CDC', align:'left', wordWrap: true, wordWrapWidth: 750 };
   //
   //
   // var main32 ={font: ' 32pt ChintzyCPUBRK', fill: var(--overbrightgreen), align:'left', wordWrap: true, wordWrapWidth: 650 };

//not sure if these are used???
var player;
var count=0;
var but;
//SOME TOGGLES AND STATE vars

var toggle= false;
//below are our key press toggles
var upTog = false;
var downTog = false;
var leftTog = false;
var rightTog = false;
//
var trackselection = 1;// we will use this to set the track

//
// Lets try creating vars for our functions here
var  starLayout;//play.js
//var tick;//play.js
//var cursors;//setting up the arrow ksys
var drift= 25;// how har we shunt left and right
// var thrust
var friction=0;
var warm = 1;//these are the multiplers used for the different tracks
var cold = 2;
//
// some values to feed in to our random position function to set up holes
var holeMaxX =500;
var holeMinX =30;
var holeYoff=100;
//
var holeHolder;
// var hole;
var holeFreq = 5;
//
// var time_til_spawn = this.getRandomInt(holeFreq);
var time_til_spawn;
var last_spawn_time;
//
var holeX = [100, 200, 300, 400, 500 ];
var currHole=0;
var stuck = false;// have we hit a hole or not
var holeYstart = -20;
var lives = 3;
var timeOfDeath;
var safeSpawnTime = 3000;
var platforms;
var howToScreen;
var howToStartBut;
//
var carType=1;
var carLoopLength = 8;
var holeFull=false;//is there a a car in teh hole
