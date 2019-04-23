var optionsState1 = {
// BASICS
create: function(){
console.log("optionsState1");
var topbanner = game.add.sprite(0,0, 'greenheadbg');
  nextbut = game.add.sprite(660,473, 'tracknext');
  // howBut = game.add.sprite(360,288, 'tutbut');
  nextbut.inputEnabled=true;
  nextbut.events.onInputDown.add(this.nextsel, this);
  nextbut.events.onInputOver.add(this.nexthover,this);
  nextbut.events.onInputOut.add(this.nextout,this);
  //
  var nexthov1 = nextbut.animations.add('hover', [ 1], 1, false);
  var nexthov0 = nextbut.animations.add('no-hover', [ 0], 1, false);
  //
  oTo11 = this.add.text(5, 8, oto11, main28white);
  oTo12 = this.add.text(30, 100, oto12, first18greenc);
  oTo13 = this.add.text(30, 180, oto13, first18greenc);
  oTo14 = this.add.text(30, 230, oto14, first18greenc);
  oTo15 = this.add.text(30, 280, oto15, first18greenc);
  oTo16 = this.add.text(30, 330, oto16, first18greenc);
  oTo17 = this.add.text(30, 380, oto17, first18greenc);
  oTo18 = this.add.text(30, 530, oto18, first18greenc);
  //

  // console.log("bassLoop", bassLoop);
  // if(bassLoop === "undefined"){
  //   console.log("undefined bass");
  // }
  if(!options1Audio){
    bassLoop = game.add.audio('bass-loop');
    bassLoop.loopFull(0.8);
    options1Audio = true;
  }
  // console.log("bassLoop", bassLoop);
},
update:function(){

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
  // console.log("next");
  game.state.start('options2');
  // if(trackselection== 1){
    //nextbut.animations.play('no-hover', true);
  // }
}


}
