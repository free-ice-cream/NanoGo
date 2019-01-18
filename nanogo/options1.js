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
  oTo12 = this.add.text(30, 82, oto12, first18greenc);
  oTo13 = this.add.text(30, 260, oto13, first18greenc);
  oTo14 = this.add.text(30, 450, oto14, first18greenc);
  //
  bassLoop = game.add.audio('bass-loop');
  bassLoop.loopFull(0.8);
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
