var optionsState2 = {
  // CAR SELECTION
  create: function(){
    console.log("optionsState2");
    var topbanner = game.add.sprite(0,0, 'greenheadbg');
    //
    tubes = game.add.sprite(2,74, 'tubecar');
    // howBut = game.add.sprite(360,288, 'tutbut');
    tubes.inputEnabled=true;
    tubes.events.onInputDown.add(this.tubessel, this);
    tubes.events.onInputOver.add(this.tubeshover,this);
    tubes.events.onInputOut.add(this.tubesout,this);
    // //
    bucky = game.add.sprite(2,260, 'buckycar');
    // howBut = game.add.sprite(360,288, 'tutbut');
    bucky.inputEnabled=true;
    bucky.events.onInputDown.add(this.buckysel, this);
    bucky.events.onInputOver.add(this.buckyhover,this);
    bucky.events.onInputOut.add(this.buckyout,this);


    //
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
    oTo21 = this.add.text(5, 8, oto21, main28white);
    oTo22 = this.add.text(190, 83, oto22, main28green);
    oTo23 = this.add.text(190, 267, oto23, main28grey);
    oTo24 = this.add.text(200, 124, oto24, main18greenc);
    oTo25 = this.add.text(200, 313, oto25, main18greyc);



    // ANIMATIONS
    var nexthov1 = nextbut.animations.add('hover', [ 1], 1, false);
    var nexthov0 = nextbut.animations.add('no-hover', [ 0], 1, false);
    //
    var backhov1 = backbut.animations.add('hover', [ 1], 1, false);
    var backhov0 = backbut.animations.add('no-hover', [ 0], 1, false);
    //

    this.carSet()

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
    game.state.start('options3');

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
    game.state.start('options1');
    // if(trackselection== 1){
      //nextbut.animations.play('no-hover', true);
    // }
  },
  //
  tubessel: function(){
   carType =1;
     tubes.frame = 1;
     bucky.frame = 9;
     //
     oTo22.setStyle(main28green);
     oTo23.setStyle(main28grey);
     oTo24.setStyle(main18greenc);
     oTo25.setStyle(main18greyc);

  },
   tubeshover: function(){
     tubes.frame = 1;
   },
   tubesout: function(){
     if(carType==2){
       tubes.frame=9;
     }
   },
   buckysel: function(){
     carType =2;
     tubes.frame = 9;
     bucky.frame = 1;
     //
     oTo22.setStyle(main28grey);
     oTo23.setStyle(main28green);
     oTo24.setStyle(main18greyc);
     oTo25.setStyle(main18greenc);

   },
   buckyhover: function(){
     bucky.frame = 1;
   },
   buckyout: function(){
     if(carType==1){
       bucky.frame=9;
     }
   },
   carSet: function(){
     if(carType== 1){
       tubes.frame = 1;
       bucky.frame = 9;
       oTo22.setStyle(main28green);
       oTo23.setStyle(main28grey);
       oTo24.setStyle(main18greenc);
       oTo25.setStyle(main18greyc);
     }else if(carType==2){
       tubes.frame = 9;
       bucky.frame = 1;
       oTo22.setStyle(main28grey);
       oTo23.setStyle(main28green);
       oTo24.setStyle(main18greyc);
       oTo25.setStyle(main18greenc);
     }
   }


}
