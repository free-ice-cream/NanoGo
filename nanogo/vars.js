

    var hexgrid;
    var hole;//this will be the baddie
    //swap in and out the url string for the different enviroments
    //
    // var ficurl = '/nanogotest/nanogo';
   var ficurl = '';
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
   var endText1 = "OK tryout over NANO Racer! you traveled ";
   //var endText2 = "you traveled ";
   var endText2 = " At that rate you will finish the 1mm race track on "
   var endText3 = " Days! ";
   //var endText4 = "At that rate you will finish on ";
   var endText5 = " in ";
   var endText6 = "s. ";
   //

  // var endText7 = "jjjjjjjjj"
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
   var gameTime=10;
   const gameDuration = 10;
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
   var carGrav = 300;// teh "amount" of gravity
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
   var timeText;
   var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   var finishTime;
   //
   //FONTS
   var timestyle = { font: 'bold 40pt courier ', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 650 };//countdown
   var st32 = { font: 'bold 32pt courier ', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 650 };
   var st24 = { font: 'bold 24pt courier ', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 650 };
   var st64 = { font: 'bold 64pt courier ', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 650 };
   var st56 = { font: 'bold 56pt courier ', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 650 };
   var introStyle = { font: 'bold 60pt courier ', fill: 'GREEN', align: 'left', wordWrap: true, wordWrapWidth: 650 };
   var endStyle = { font: 'bold 28pt courier ', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 650 };


//not sure if these are used???
var player;
var count=0;
var but;

var toggle= false;

//
// Lets try creating vars for our functions here
var  starLayout;//play.js
//var tick;//play.js
//var cursors;//setting up the arrow ksys
var drift= 25;// how har we shunt left and right
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
