var optionsState4 = {
  //CONSOLIDATION AND REFLECTION.
  create: function(){
    console.log("optionsState4");
    //
    // images
    //
    var topbanner = game.add.sprite(0,0, 'greenheadbg');
    var hole = game.add.sprite(48,194,'hole');
    var powerUp = game.add.sprite(60,278,'blue-power-up');
    // var powerUp = game.add.sprite(60,278,'meterK');
    var meter = game.add.sprite(32,88,'meterK');
    var edges = game.add.sprite(32,395,'drop-loop');
    //
    hole.scale.setTo(0.6,0.6);
    edges.scale.setTo(0.5,0.5);
    //
    //ANIMATIONS
    //
    hole.animations.add('fizz', [0, 1, 2, 3, 4], 20, true);
    powerUp.animations.add('freeze', [0, 1, 2, 3, 4, 5], 20, true);
    meter.animations.add('meterup', [0, 1, 2, 3, 4, 5,6 ,7 ,8 ,9], 2, true);
    edges.animations.add('wiggle', [0, 1, 2, 3, 4, 5,6 ,7 ,8 ,9,10,11,12,13,14,15,16], 20, true);
    //
    hole.animations.play('fizz', true);
    powerUp.animations.play('freeze', true);
    meter.animations.play('meterup', true);
    edges.animations.play('wiggle', true);
    // TEXT
    //
    oTo41 = this.add.text(5, 8, oto41, main28white);
    oTo42 = this.add.text(170, 77, oto42, main28blue);
    oTo43 = this.add.text(190, 117, oto43, main18blue);
    oTo44 = this.add.text(170, 200, oto44, main28red);
    oTo45 = this.add.text(190, 243, oto45, main18red);
    oTo46 = this.add.text(170, 273, oto46, main28blue);
    oTo47 = this.add.text(190, 315, oto47, main18blue);
    oTo48 = this.add.text(170, 395, oto48, main28red); //add when we have them  :)
    oTo49 = this.add.text(190, 438, oto49, main18reds);



    // nextbut = game.add.sprite(660,473, 'tracknext');
    backbut = game.add.sprite(14,473, 'optionsback');
    // howBut = game.add.sprite(360,288, 'tutbut');
    // nextbut.inputEnabled=true;
    // nextbut.events.onInputDown.add(this.nextsel, this);
    // nextbut.events.onInputOver.add(this.nexthover,this);
    // nextbut.events.onInputOut.add(this.nextout,this);
    //
    startSeq = game.add.sprite(630,443, 'startSeq');
    startSeq.scale.setTo(0.5,0.5);
    startSeq.inputEnabled=true;
    startSeq.events.onInputDown.add(this.startListening, this);
    startSeq.events.onInputOver.add(this.starthover,this);
    startSeq.events.onInputOut.add(this.startnohover,this);
    //
    var hov1 = startSeq.animations.add('start-hover', [ 1], 1, false);
    var hov0 = startSeq.animations.add('start-no-hover', [ 0], 1, false);
    //
    var flip = startSeq.animations.add('countdown', [ 2, 3, 4], 1, false);
    flip.onComplete.add(this.start, this);
    //
    backbut.inputEnabled=true;
    backbut.events.onInputDown.add(this.backsel, this);
    backbut.events.onInputOver.add(this.backhover,this);
    backbut.events.onInputOut.add(this.backout,this);
    //
    // var nexthov1 = nextbut.animations.add('hover', [ 1], 1, false);
    // var nexthov0 = nextbut.animations.add('no-hover', [ 0], 1, false);
    //
    var backhov1 = backbut.animations.add('hover', [ 1], 1, false);
    var backhov0 = backbut.animations.add('no-hover', [ 0], 1, false);
    //



    //
  },
  update:function(){

  },
  start: function(){
    console.log('pop- start ');
    // quickSet();
    game.state.start('play');
    countDown=false;
  },
  startListening: function(){
    console.log('pop - startListening');
    startSeq.animations.play('countdown', true);
    countDown=true;
  },

  starthover: function(){
    startSeq.animations.play('start-hover', true);
  },
  startnohover: function(){
    if(!countDown){
      startSeq.animations.play('start-no-hover', true);
    }

  },
  // nexthover: function(){
  //   // if(trackselection==1){
  //     nextbut.animations.play('hover', true);
  //   // }
  // },
  // nextout: function(){
  //   // if(trackselection== 1){
  //     nextbut.animations.play('no-hover', true);
  //   // }
  // },
  // nextsel: function(){
  //   // console.log("next");
  //   // game.state.start('options5');
  //   game.state.start('play');
  //   // if(trackselection== 1){
  //     //nextbut.animations.play('no-hover', true);
  //   // }
  // },

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
    game.state.start('play');
    // game.state.start('options3');
    // if(trackselection== 1){
      //nextbut.animations.play('no-hover', true);
    // }
  }


}
