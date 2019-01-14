var optionsState4 = {
  //CONSOLIDATION AND REFLECTION.
  create: function(){
console.log("optionsState4");
    nextbut = game.add.sprite(660,473, 'tracknext');
    backbut = game.add.sprite(14,473, 'optionsback');
    // howBut = game.add.sprite(360,288, 'tutbut');
    nextbut.inputEnabled=true;
    nextbut.events.onInputDown.add(this.nextsel, this);
    nextbut.events.onInputOver.add(this.nexthover,this);
    nextbut.events.onInputOut.add(this.nextout,this);
    //
    backbut.inputEnabled=true;
    backbut.events.onInputDown.add(this.backsel, this);
    backbut.events.onInputOver.add(this.backhover,this);
    backbut.events.onInputOut.add(this.backout,this);
    //
    var nexthov1 = nextbut.animations.add('hover', [ 1], 1, false);
    var nexthov0 = nextbut.animations.add('no-hover', [ 0], 1, false);
    //
    var backhov1 = backbut.animations.add('hover', [ 1], 1, false);
    var backhov0 = backbut.animations.add('no-hover', [ 0], 1, false);
    //



    //
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
    game.state.start('options5');
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
    console.log("next");
    // game.state.start('play');
    game.state.start('options3');
    // if(trackselection== 1){
      //nextbut.animations.play('no-hover', true);
    // }
  }


}
