var optionsState3 = {
// TRACK SELECTION
create: function(){
  console.log("optionsState3");
//images
var topbanner = game.add.sprite(0,0, 'greenheadbg');
//
//Buttons
track1 = game.add.sprite(2,74, 'track1');
// howBut = game.add.sprite(360,288, 'tutbut');
track1.inputEnabled = true;
track1.events.onInputDown.add(this.track1sel, this);
track1.events.onInputOver.add(this.t1hover,this);
track1.events.onInputOut.add(this.t1out,this);
//
track2 = game.add.sprite(2,260, 'track2');
// howBut = game.add.sprite(360,288, 'tutbut');
track2.inputEnabled=true;
track2.events.onInputDown.add(this.track2sel, this);
track2.events.onInputOver.add(this.t2hover,this);
track2.events.onInputOut.add(this.t2out,this);
//
nextbut = game.add.sprite(660,473, 'tracknext');
// howBut = game.add.sprite(360,288, 'tutbut');
nextbut.inputEnabled=true;
nextbut.events.onInputDown.add(this.nextsel, this);
nextbut.events.onInputOver.add(this.nexthover,this);
nextbut.events.onInputOut.add(this.nextout,this);
//
backbut = game.add.sprite(backx,backy, 'optionsback');
backbut.scale.setTo(0.85, 0.85);
// howBut = game.add.sprite(360,288, 'tutbut');
backbut.inputEnabled=true;
backbut.events.onInputDown.add(this.backsel, this);
backbut.events.onInputOver.add(this.backhover,this);
backbut.events.onInputOut.add(this.backout,this);
//
//TEXT
//
  oTo31 = this.add.text(5, 8, oto31, main28white);
  oTo32 = this.add.text(190, 83, oto32, main28green);
  oTo33 = this.add.text(190, 267, oto33, main28grey);
  oTo34 = this.add.text(200, 134, oto34, main18greenc);
  oTo35 = this.add.text(200, 323, oto35, main18greyc);
  //

//ANIMATIONS
var t1hov1 = track1.animations.add('hover', [ 1], 1, false);
var t1hov0 = track1.animations.add('no-hover', [ 0], 1, false);
var t1active = track1.animations.add('1active', [ 1], 1, false);
//
var t2hov1 = track2.animations.add('hover', [ 1], 1, false);
var t2hov0 = track2.animations.add('no-hover', [ 0], 1, false);
var t2active = track2.animations.add('1active', [ 1], 1, false);
//
var nexthov1 = nextbut.animations.add('hover', [ 1], 1, false);
var nexthov0 = nextbut.animations.add('no-hover', [ 0], 1, false);
//
var backhov1 = backbut.animations.add('hover', [ 1], 1, false);
var backhov0 = backbut.animations.add('no-hover', [ 0], 1, false);
// var nextactive = track2.animations.add('1active', [ 1], 1, false);
//
//all audio butt stuff
// audioControl = game.add.sprite(100,100, 'soundcontrol');
volback = game.add.sprite(vbx, vby, 'volback');
volplus = game.add.sprite(pbx, pby, 'volplus');
volminus = game.add.sprite(mbx, mby, 'volminus');
//
var audplus0 = volplus.animations.add('vp-rest', [0], 1, false);
var audplus1 = volplus.animations.add('vp-hov', [1], 1, false);
var audplus2 = volplus.animations.add('vp-down', [2], 1, false);
var audplus3 = volplus.animations.add('vp-max', [3], 1, false);
//
var audmin = volminus.animations.add('vm-rest', [0], 1, false);
var audmin1 = volminus.animations.add('vm-hov', [1], 1, false);
var audmin2 = volminus.animations.add('vm-down', [2], 1, false);
var audmin3 = volminus.animations.add('vm-min', [3], 1, false);
//
// var audioon = audioControl.animations.add('audioOn', [ 0], 1, false);
// var audiooff = audioControl.animations.add('audioOff', [ 1], 1, false);
volplus.inputEnabled = true;
volminus.inputEnabled = true;
//
volplus.events.onInputDown.add(this.plusPlus, this);
volplus.events.onInputOver.add(this.plusOver, this);
volplus.events.onInputOut.add(this.plusOut, this);
//
volminus.events.onInputDown.add(this.minusPlus, this);
volminus.events.onInputOver.add(this.minusOver, this);
volminus.events.onInputOut.add(this.minusOut, this);
//
// audio end
//
this.trackSet();
},
update:function(){

},
track1sel: function(){
  console.log("track 1 selected");
  trackselection=1;
  track2.animations.play('no-hover', true);
  track1.animations.play('1active', true);
  oTo32.setStyle( main28green);
  oTo33.setStyle( main28grey);
  //
  oTo34.setStyle(  main18greenc);
  oTo35.setStyle(  main18greyc);

},
t1hover: function(){
  if(trackselection==2){
    track1.animations.play('hover', true);
  }
},
t1out: function(){
  if(trackselection== 2){
    track1.animations.play('no-hover', true);
  }
},
//
track2sel: function(){
  console.log("track 2 selected");
  trackselection=2;
  track1.animations.play('no-hover', true);
  track2.animations.play('2active', true);
  oTo32.setStyle( main28grey);
  oTo33.setStyle( main28green);
  //
  oTo34.setStyle(  main18greyc);
  oTo35.setStyle(  main18greenc);
},
t2hover: function(){
  if(trackselection==1){
    track2.animations.play('hover', true);
  }
},
t2out: function(){
  if(trackselection== 1){
    track2.animations.play('no-hover', true);
  }
},
trackSet:function(){
  if(trackselection==1){
    console.log("trackselection==1");
    track2.animations.play('no-hover', true);
    track1.animations.play('1active', true);
    oTo32.setStyle( main28green);
    oTo33.setStyle( main28grey);
    //
    oTo34.setStyle(  main18greenc);
    oTo35.setStyle(  main18greyc);

  }else if(trackselection==2){
    console.log("trackselection==2");
    track1.animations.play('no-hover', true);
    track2.animations.play('2active', true);
    oTo32.setStyle( main28grey);
    oTo33.setStyle( main28green);
    //
    oTo34.setStyle(  main18greyc);
    oTo35.setStyle(  main18greenc);
  }

},
nexthover: function(){
    nextbut.animations.play('hover', true);
},
nextout: function(){
    nextbut.animations.play('no-hover', true);
},
nextsel: function(){
  console.log("next");
  game.state.start('options4');
},
backhover: function(){
    backbut.animations.play('hover', true);
},
backout: function(){
    backbut.animations.play('no-hover', true);
},
backsel: function(){
  game.state.start('options2');
},
plusPlus: function() {
  console.log("bassLoop.volume ", bassLoop.volume);
  if (bassLoop.volume <= 0.9) {
    bassLoop.volume += 0.1;
    volplus.animations.play('vp-down', true)
  }
},
//audio functions
plusPlus: function() {
  if (gameLiveVol<= 0.9) {
    gameLiveVol += 0.1;
    bassLoop.volume = gameLiveVol;
    volplus.animations.play('vp-down', true)
  }
},
plusOver: function() {
  volplus.animations.play('vp-hov', true)
},
plusOut: function() {
  volplus.animations.play('vp-rest', true)
},
minusPlus: function() {

  if (gameLiveVol >= 0.1) {
    gameLiveVol -= 0.1;
    bassLoop.volume = gameLiveVol;
    volminus.animations.play('vm-down', true)
  }
},
minusOver: function() {
  volminus.animations.play('vm-hov', true)
},
minusOut: function() {
  volminus.animations.play('vm-rest', true)
}
//end audio functions

}
