var loadState = {
  preload: function (){
    console.log('loadState');

    //// TODO:
    // copy all our assets in here
    game.load.image('hex', ficurl+'assets/hexgrid-cross2.png');
    game.load.image('glob1', ficurl+'assets/glob1.png');
    game.load.image('glob2', ficurl+'assets/glob2.png');
    game.load.image('glob3', ficurl+'assets/glob3.png');

    //
    game.load.spritesheet('car', 'assets/car3.png', 160, 240);
    game.load.spritesheet('hexsign','assets/hextiles2.png', 200,200);

  //and some AUDIO

  game.load.audio('rev', 'assets/car-2.mp3');
  game.load.audio('theme', 'assets/maintrack4.mp3');

  },
  create: function(){

    game.state.start('menu');
  }


};
