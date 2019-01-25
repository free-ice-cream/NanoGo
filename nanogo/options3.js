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
track1.inputEnabled=true;
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
backbut = game.add.sprite(14,473, 'optionsback');
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
  oTo34 = this.add.text(200, 134, oto34, main18green);
  oTo35 = this.add.text(200, 323, oto35, main18grey);
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
  oTo34.setStyle(  main18green);
  oTo35.setStyle(  main18grey);

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
  oTo34.setStyle(  main18grey);
  oTo35.setStyle(  main18green);
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
    track2.animations.play('no-hover', true);
    track1.animations.play('1active', true);
    oTo32.setStyle( main28green);
    oTo33.setStyle( main28grey);
    //
    oTo34.setStyle(  main18green);
    oTo35.setStyle(  main18grey);

  }else if(trackselection==2){
    track1.animations.play('no-hover', true);
    track2.animations.play('2active', true);
    oTo32.setStyle( main28grey);
    oTo33.setStyle( main28green);
    //
    oTo34.setStyle(  main18grey);
    oTo35.setStyle(  main18green);
  }

},
nexthover: function(){
  // if(trackselection==1){
    nextbut.animations.play('hover', true);
  // }
},
nextout: function(){
  // if(trackselection== 1){
    nextbut.animations.play('no-hover', true);
  // }
},
nextsel: function(){
  console.log("next");
  // game.state.start('play');
  game.state.start('options4');
  // if(trackselection== 1){
    //nextbut.animations.play('no-hover', true);
  // }
},
backhover: function(){
  // if(trackselection==1){
    backbut.animations.play('hover', true);
  // }
},
backout: function(){
  // if(trackselection== 1){
    backbut.animations.play('no-hover', true);
  // }
},
backsel: function(){
  // console.log("next");
  // game.state.start('play');
  game.state.start('options2');
  // if(trackselection== 1){
    //nextbut.animations.play('no-hover', true);
  // }
}

}
