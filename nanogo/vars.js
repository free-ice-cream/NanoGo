
var gameBuild = "build 2.8"; //
var testing = false;//  a bool used to switch between testing and production mode
console.log("testing = "+testing);
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
   var gameLive = true;// this is the core var to check if we are in play mode or  NOT
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
   // options pge 3 strings
   var oto31 = "Step 3: Click to select a race track.";
   var oto32 = "Track 1";
   var oto33 = "Track 2";
   var oto34 = "This track is made from Graphene. Graphene is just one super thin crystal of carbon. With a melting point of 4800 ºk you will have a tough time getting to the end of this track";
   var oto35 = "This track is made from Silver. There will not me much time, silver melts at just  1234.93 ºK";
   //option page 4 text objects and STRINGS
   var oTo41;
   var oTo42;
   var oTo43;
   var oTo44;
   var oTo45;
   var oTo46;
   var oTo47;
   var oTo48;
   var oTo49;
   //
   var oto41 = "Stage 4. What to look out for!";// page title
   var oto42 = "Heat !"; //obj title 1
   var oto43 = "Watch out, as the heat rises the increasing speed of the molecules will start to knock your racer about the track.";
   var oto44 = "Holes !";
   var oto45 = "if you hit one of these you will lose a life.";
   var oto46 = "Power ups !!";
   var oto47 = "Tired of being pushed about by the heat? This power up will temporarily increase your traction to the track with a sticky outrigger molecule. ";
   var oto48 = "Step Fractures !";
   var oto49 = "This is where the material of the race track itself changes in height. If you fall off an edge you will lose a life.";
   //
   var endmessage1 ;// a var for the object
   var endmessage2 ;//
   var endMessage1 = "GAME OVER!";// avar for the string
   var endMessage2a = "at ";
   var endMessage2b = " degrees "
   var endMessage2c = " the track has melted! ";
   var endMessage3 = " You're out of lives!"

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
   //gplay page TEXT
   var scollingTextCopy1 = "Welcome Nano racer! messages about the enviroment will display here...                 ";
   var si = "nM ";//
   //
   // SCROLLING TEXT BOX VARS AND STRINGS
   //
   // 20 deg
   var mess1Thesh = 20;
   var scrollingMessage0 = "";
   var scrollingMessage1 = " This is the message window, ....                               ";
   // 200
    var mess2Thesh = 200;
   var scrollingMessage2 = " Things are really getting hot in here. Your racer is starting to move eratically due to the heat....                               ";
   // 327
   var scrollingMessage3 = " its over 327ºC hot enough for lead to melt...                         ";
   var scrollingMessages = [ scrollingMessage1, scrollingMessage2, scrollingMessage3];
   var messageIndex = 0; // a key to see where we are in teh messages list.
   var currMessage = "";
   var maxChars = 22;// the maximum number of chars to show inany one message.
   var mesFlag1= false;
   var mesFlag2= false;
   var mesFlag3= false;
   var mesFlag4= false;
   var mesFlag5= false;
   //
   var newHud;//
   var hudBack;//

   // new end text vars
   var distanceTraveled;
   var timeTaken;
   var nTimesThisTime;
   var finishDayTime;
   //


   var countDown;
   var gameTime=0;
   // var gameStartTime=0;
   const gameDuration = 30;
   //
   var clockX=  150;
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
   var carGrav = 200;//300;// teh "amount" of gravity // SWITCHED OFF!!
   var carBounce = 0.3;// the bounce factor when teh car lands at teh start
   var tileRate = 24 ;//the rate at which the background moves
   var carAccelRate = 50;
   //
   var rev;
   var mainTheme;
   //
   var starTrack;
   var trackLX = 200;
   var trackRX = 550;
   var trackYD = 100;
//
  var carStartY= 50; //a start pos for a new car
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
   var thin28white ={font: ' 28pt ChintzyCPUBRK', fill: 'white', align:'left', wordWrap: true, wordWrapWidth: 650 };
   var main28green ={font: ' 28pt ChintzyCPUBRK', fill: 'green', align:'left', wordWrap: true, wordWrapWidth: 650 };
   var main28greenc ={font: ' 18pt Consolas', fill: 'green', align:'left', wordWrap: true, wordWrapWidth: 650 };
   var first18greenc ={font: ' 16pt Consolas', fill: 'green', align:'left', wordWrap: true, wordWrapWidth: 750 };
   var main28grey ={font: ' 28pt ChintzyCPUBRK', fill: 'grey', align:'left', wordWrap: true, wordWrapWidth: 650 };
   var main18green ={font: ' 18pt ChintzyCPUBRK', fill: 'green', align:'left', wordWrap: true, wordWrapWidth: 600 };
   var main18greenc ={font: ' 17pt Consolas', fill: 'green', align:'left', wordWrap: true, wordWrapWidth: 600 };
   var main18grey ={font: ' 18pt ChintzyCPUBRK', fill: 'grey', align:'left', wordWrap: true, wordWrapWidth: 600 };
   var main18greyc ={font: ' 17pt Consolas', fill: 'grey', align:'left', wordWrap: true, wordWrapWidth: 600 };
   var main18bluec ={font: ' 17pt Consolas', fill: '#1E3CDC', align:'left', wordWrap: true, wordWrapWidth: 750 };
   var screen18green ={font: ' 18pt ChintzyCPUBRK', fill: '#3BFC34', align:'right', wordWrap: true, wordWrapWidth: 600 };
   var scrollingGreen ={font: ' 28pt ChintzyCPUBRK', fill: '#3BFC34', boundsAlignH: "right", wordWrap: false, wordWrapWidth: 368 };
   var collumOne ={font: ' 16pt Consolas', fill: 'green', align:'left', wordWrap: true, wordWrapWidth: 350 };// endscreen collumn 1
   var collumTwo ={font: ' 17pt Consolas', fill: '#1E3CDC', align:'left', wordWrap: true, wordWrapWidth: 350};// endscreen collum 2
   var main28blue ={font: ' 28pt ChintzyCPUBRK', fill: '#1E3CDC', align:'left', wordWrap: true, wordWrapWidth: 650 };
   var main18blue ={font: ' 17pt Consolas', fill: '#1E3CDC', align:'left', wordWrap: true, wordWrapWidth: 600 };
   var main28red ={font: ' 28pt ChintzyCPUBRK', fill: '#AA232A', align:'left', wordWrap: true, wordWrapWidth: 650 };
   var main18red ={font: ' 17pt Consolas', fill: '#AA232A', align:'left', wordWrap: true, wordWrapWidth: 600 };
   var main18reds ={font: ' 17pt Consolas', fill: '#AA232A', align:'left', wordWrap: true, wordWrapWidth: 400 };
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
var driftBase = 25;// how har we shunt left and right
var drift = driftBase;

// var thrust
var friction = 0;
var warm = 1;//these are the multiplers used for the different tracks
var cold = 2;
//
// some values to feed in to our random position function to set up holes
var holeMaxX = 500;
var holeMinX = 30;
var holeYoff = 100;
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
var currHole = 0;
var stuck = false;// have we hit a hole or not
var holeYstart = -20;
var livesBase = 3;
var lives = livesBase;
var timeOfDeath;
var safeSpawnTime = 3000;
var platforms;
var howToScreen;
var howToStartBut;
//
var carType = 1;
var carLoopLength = 8;
var holeFull = false;//is there a a car in teh hole
var stepFull = false;//has as car just fallen over the edge
//
var startTemp = 4;//starting temp in kelvin
var absolute0 = -273;// absolute zero, to be used to convert between k and c
var tempScaleName = "k";// a vr to store the name of tehtemp scale we are using
var siK = "k";// the si unit for kelvin
var siC = "c";// the si unit for celcius
var currentTemp = startTemp;
var blooBleeb = 0;// a test var to see if this heat () problem is general
var entropy = 0;//set this here maybe ?
var tempEffect1 =  15; // how small an effect temp is on the car !!the smaller the number the larger the effect
var tempEffect2 =  30; // how small an effect temp is on the car
var tempEffectY = tempEffect1 ;//a var to store the effec on y as it changes form car to car
var tempEffectX = tempEffect1 ;//
var tempEffectR = 100;// the amount temp affects rotaton
var tempBoox = true; //a toggle to get pos and ned vals in the temp changes for x
var tempBooy = true; //a toggle to get pos and ned vals in the temp changes for y
var tempBooR = true;// the same but for rotaion
var tempIncrement = 10;// how much he temp goes up per secon
var miniNudge = 10;// was 5  how much the player can effect velocity.
//
var carXpos;
var carYpos;// vars to hold teh position so we dont manupulate it directly with the functions
var meltingPointOfGrapheneURL = "http://www.aerogelgraphene.com/graphene-melting-point/";
var meltingPointOfGraphene = 4800; //k
// var meltingPointOfGraphene = 200; //k
var meltingPointOfSliverURL = "https://en.wikipedia.org/wiki/Silver";
var meltingPointOfSilver = 1234.93;//k
//
// var meltingPointOfLeadURL;//
var meltingPointOfLead = 600;//k
// var meltingPointOfSilver
var trackMeltingPoint;// a place to store the current track melting point.
var scaleToggle ;// this will be our toggle switch for the tem scale
//
var siText;// somwwhere to store teh text object
var scaleDiff =0; // a place to reference teh diffeence between k and c updated in toggle()
//
// Temperature break points
var tempBreaks= [];
var noOfBreaks = 10;// how many differetn animations  do we want for the temp
//
var heatSheild;
var heatSheildMeter;
var sheildScale = 0;// we start out with no sheild
var emitter;
var phaseShift =false;// have we got to melting point yet?
//
var audioLive = true;// a toggle to switch the music on / OFF
//
var fullTimeS;// this  is here we will store teh total number of seconds needed to count to a million at our clickrate
//
var carCentreX ;
var carCentreY ;
var sheildCenterX;
var sheildCenterY;
var sheildOfsetX;
var sheildOfsetY;
var sheildDeminishRate = 0.005;
var sheildRespawnBase = -3000;
//
var outRig1;// vars for the outriggers
var outRig2;
var outRig3;
var outRig4;
var outFramNo = 0;
var outBool1 =false;// are they active
var outBool2 =false;
var outBool3 =false;
var outBool4 =false;
//
var rightStaircase = [];// somewhere to keep the steps :)
var leftStaircase = [];// somewhere to keep the steps :)
// var stepBools = [];
//TOOO delete these
// var d //
// var pole; //used to set check the time so we can redraw less frequently when using the update loop.
// var d2;// =new Date();
// var pole2 ;
// var diff = 3000;// the tiem diff we are looking for ie the cadence of teh redraw
// var dateBool1 = false;// a bool to check if we have set the time the first time
var stepLimit = 12; // the number of steps we re going to make
var distCheck = 0; // this might be a better way to check to see if we shoucl redraw ....
//
var adjustedRate;// this is where the rate of the tiles is held
var stepTileH = 50;// the height of the step tile
var bottomOtheWorld = 500;
//
var rightZig = true;//going left
var rightZag = false;// going right
var rightInnerBoundLimit = 600;// limit x position for the steps
var rightInnerBound = 750;
var rightOuterBound = 795;// limit x position for the steps
var rightOuterBoundLimit= 700;
var rightStepStart = 780;
//
var leftZig = true;//going left
var leftZag = false;// going right
// OK SO the logic of inner and outer is now reversed, but I mnot going to change it as it is already set
var leftInnerBoundLimit = -300;//
var leftInnerBound = -200;
//
var leftOuterBound = -100;// limit x position for the steps
var leftOuterBoundLimit = -5;
//
var leftStepStart = -150;
var restSteps = 20;// how long to wait at teh top or bottom
var rightCurrRest = 0;
var leftCurrRest = 0;
var attackRate = 6; // the rate at shich teh stepps will change
var cree = false;
var creeTime = 4;// how long have you got invincibility for after respawn
