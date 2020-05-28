
var loadState = {
  preload: function (){
    console.log('loadState');
    // images
    game.load.image('hex', ficurl+'assets/hexgrid-cross2.png');
    game.load.image('icehex', ficurl+'assets/icy-hexgrid-v1.png');
    game.load.image('bar', ficurl+'assets/bar.png');
    game.load.image('logo', ficurl+'assets/Nano Go Logo v1.png');
    game.load.image('endscreen', ficurl+'assets/new-end.png');
    // options
    game.load.image('greenheadbg', ficurl+'assets/greenheadbg.png');
    game.load.image('blue-power-up', ficurl+'assets/blue-power-up.png');
    game.load.image('heart', ficurl+'assets/heart2.png');
    game.load.image('heatsheildmeter', ficurl+'assets/heatsheildmeter_v1.png');
    game.load.image('racegauge', ficurl+'assets/racegauge-v5.png');
    game.load.image('finishline', ficurl+'assets/finishline.png');
    // onboarding images
    // game.load.image('racerselect', ficurl+'assets/thisisyourracer.png');
    game.load.image('racerselect', ficurl+'assets/welcometoracingatthenanoscale.png');
    game.load.image('parkingplatz', ficurl+'assets/parkingplatz.png');
    game.load.image('arrowkeys', ficurl+'assets/usethearrowkeys.png');
    game.load.image('pixilarrow', ficurl+'assets/pixilarrow.png');
    game.load.image('eachtime', ficurl+'assets/eachtimeyouhitforward.png');
    game.load.image('actuallytherearetwo', ficurl+'assets/actuallytherearetwo.png');
    game.load.image('selectyourracernow', ficurl+'assets/crashintotheracer.png');
    game.load.image('chooseracer1', ficurl+'assets/chooseracer1.png');
    game.load.image('chooseracer2', ficurl+'assets/chooseracer2.png');
    game.load.image('OKnice', ficurl+'assets/nowuseyourracertoselectatrack.png');
    game.load.image('chooosesilver', ficurl+'assets/choosesilver.png');
    game.load.image('choosegraphene', ficurl+'assets/choosegraphene.png');
    game.load.image('silvercrystal', ficurl+'assets/silvercrystal.png');
    game.load.image('graphenecrystal', ficurl+'assets/graphenecrystal.png');
    game.load.image('nowweareonsolid', ficurl+'assets/nowweareonsolidground.png');
    game.load.image('atthisscale', ficurl+'assets/atthisscale.png');
    game.load.image('astheyheatup', ficurl+'assets/astheyheatup.png');
    game.load.image('heatis', ficurl+'assets/heatis.png');
    game.load.image('thisisessentially', ficurl+'assets/thisisessentially.png');
    game.load.image('thismovementwill', ficurl+'assets/thismovementwill.png');
    game.load.image('hereisameter', ficurl+'assets/hereisameter.png');
    game.load.image('thetrackis', ficurl+'assets/thetrackis.png');
    game.load.image('ontheright', ficurl+'assets/ontheright.png');
    game.load.image('youraimisto', ficurl+'assets/youraimisto.png');
    game.load.image('thetrackofcourse', ficurl+'assets/thetrackofcourse.png');
    game.load.image('stepfractures', ficurl+'assets/stepfractures.png');
    game.load.image('ifyouhitthem', ficurl+'assets/ifyouhitthem.png');
    game.load.image('yourracerwill', ficurl+'assets/yourracerwill.png');
    game.load.image('therearealsoholes', ficurl+'assets/therearealsoholes.png');
    game.load.image('youwilllosealife', ficurl+'assets/youwilllosealife.png');
    game.load.image('lookoutforblue', ficurl+'assets/lookoutforblue.png');
    game.load.image('thesehelptoreduce', ficurl+'assets/thesehelptoreduce.png');
    game.load.image('ok', ficurl+'assets/ok.png');
    game.load.image('crosstheline', ficurl+'assets/crosstheline.png');
    game.load.image('321', ficurl+'assets/321go.png');
    game.load.image('onepx', ficurl+'assets/1px.png');

    //onboarding SPRITESHEETS
    game.load.spritesheet('goarrow','assets/goarrow.png', 70,75);

    //
    //
    // THERMOMETER PARTS
    //
    game.load.image('therm-frame', ficurl+'assets/therm-frame-2.png');
    game.load.image('freeze', ficurl+'assets/freeze-frame.png');
    game.load.image('stripe0', ficurl+'assets/stripe 0.png');
    game.load.image('stripe1', ficurl+'assets/stripe 1.png');
    game.load.image('stripe2', ficurl+'assets/stripe 2.png');
    game.load.image('stripe3', ficurl+'assets/stripe 3.png');
    game.load.image('stripe4', ficurl+'assets/stripe 4.png');
    game.load.image('stripe5', ficurl+'assets/stripe 5.png');
    game.load.image('stripe6', ficurl+'assets/stripe 6.png');
    game.load.image('stripe7', ficurl+'assets/stripe 7.png');
    game.load.image('stripe8', ficurl+'assets/stripe 8.png');
    game.load.image('stripe9', ficurl+'assets/stripe 9.png');
    game.load.image('stripe10', ficurl+'assets/stripe 10.png');
    game.load.image('stripe11', ficurl+'assets/stripe 11.png');
    game.load.image('stripe12', ficurl+'assets/stripe 12.png');
    game.load.image('stripe13', ficurl+'assets/stripe 13.png');
    game.load.image('stripe14', ficurl+'assets/stripe 14.png');
    game.load.image('stripe15', ficurl+'assets/stripe 15.png');
    game.load.image('stripe16', ficurl+'assets/stripe 16.png');
    game.load.image('stripe17', ficurl+'assets/stripe 17.png');
    game.load.image('stripe18', ficurl+'assets/stripe 18.png');
    game.load.image('stripe19', ficurl+'assets/stripe 19.png');
    game.load.image('stripe20', ficurl+'assets/stripe 20.png');
    game.load.image('stripe21', ficurl+'assets/stripe 21.png');
    game.load.image('stripe22', ficurl+'assets/stripe 22.png');
    game.load.image('stripe23', ficurl+'assets/stripe 23.png');
    game.load.image('stripe24', ficurl+'assets/stripe 24.png');
    game.load.image('stripe25', ficurl+'assets/stripe 25.png');
    game.load.image('stripe26', ficurl+'assets/stripe 26.png');
    game.load.image('stripe27', ficurl+'assets/stripe 27.png');
    game.load.image('stripe28', ficurl+'assets/stripe 28.png');
    game.load.image('stripe29', ficurl+'assets/stripe 29.png');
    game.load.image('stripe30', ficurl+'assets/stripe 30.png');
    game.load.image('stripe31', ficurl+'assets/stripe 31.png');
    game.load.image('stripe32', ficurl+'assets/stripe 32.png');
    game.load.image('stripe33', ficurl+'assets/stripe 33.png');
    game.load.image('stripe34', ficurl+'assets/stripe 34.png');
    game.load.image('stripe35', ficurl+'assets/stripe 35.png');
    game.load.image('stripe36', ficurl+'assets/stripe 36.png');
    game.load.image('stripe37', ficurl+'assets/stripe 37.png');
    game.load.image('stripe38', ficurl+'assets/stripe 38.png');
    game.load.image('stripe39', ficurl+'assets/stripe 39.png');
    game.load.image('stripe40', ficurl+'assets/stripe 40.png');
    game.load.image('stripe41', ficurl+'assets/stripe 41.png');
    game.load.image('stripe42', ficurl+'assets/stripe 42.png');
    game.load.image('stripe43', ficurl+'assets/stripe 43.png');
    game.load.image('stripe44', ficurl+'assets/stripe 44.png');
    game.load.image('stripe45', ficurl+'assets/stripe 45.png');
    game.load.image('stripe46', ficurl+'assets/stripe 46.png');
    game.load.image('stripe47', ficurl+'assets/stripe 47.png');




    //SPRITESHEETS
    game.load.spritesheet('ministartss',ficurl+'assets/mini-start-546-103.png',268,103);
    game.load.spritesheet('tutbut','assets/howtoplayspritesheet-620-310.png',308,310);
    game.load.spritesheet('startSeq','assets/startspritesheet_v4.png', 306,310);
    game.load.spritesheet('restart','assets/restart-spritesheet_v1.png', 200,192);
    game.load.spritesheet('alarm','assets/alarm-button_v1.png', 201,192);
    game.load.spritesheet('track1','assets/track2sprite-v2.png', 160,157);
    game.load.spritesheet('track2','assets/track1sprite-v2.png', 160,157);
    game.load.spritesheet('tracknext','assets/tracknext-v1.png', 122,119);
    game.load.spritesheet('optionsback','assets/backbut_v1.png', 122,119);
    game.load.spritesheet('meterK','assets/rising-scale.png', 90, 40);
    game.load.spritesheet('soundcontrol','assets/sound-control.png', 100,100);
    game.load.spritesheet('volback', 'assets/volume-back.png', 100,100);
    game.load.spritesheet('volplus','assets/vol-plus.png', 30,30);
    game.load.spritesheet('volminus','assets/vol-minus.png', 30,30);
    game.load.spritesheet('speakerbut','assets/soundonoff.png', 35,35);
    //
    game.load.spritesheet('tubecar','assets/nanotube-racer-spritesheet-150-150-9f_v6.png', 150,150);
    game.load.spritesheet('tubecar-test','assets/tube-edgetest.png', 150,150);
    //
    game.load.spritesheet('buckycar','assets/buckyball-racer-spritesheet_v3.png', 150,150);
    game.load.spritesheet('tiny-toggle','assets/tiny-toggle-2.png', 69,61);
    // play screen
    // game.load.spritesheet('car1', 'assets/bucky-tilesprite_v1.png', 250, 250);
    // game.load.spritesheet('car', 'assets/car7-spritesheet-v3.png', 150, 150);
    // game.load.spritesheet('hole','assets/holes100px.png', 100,100);
    game.load.spritesheet('hole','assets/hole_fizz_500_500@0.2x.png', 100,100);
    game.load.spritesheet('hole-test','assets/holes-edgetest.png', 100,100);//TODO swap back
    //
    game.load.spritesheet('blue-power-up','assets/blue-power-up.png', 30,30);
    game.load.spritesheet('outrigger','assets/outrigger_v2.png', 30, 30);
    //
    // game.load.spritesheet('tubefall', 'assets/tuberacer-fall_v1.png', 300, 180);
    //paritcle timeout
    game.load.spritesheet('matrix', 'assets/sliver_v1.png', 110, 100);
    // game.load.spritesheet('atoms', 'assets/blackatoms_v1.png', 9, 9);
    game.load.spritesheet('graphene', 'assets/graphene_v5.png', 120, 136);
    game.load.spritesheet('silver', 'assets/silver_v3.png', 100, 150);
    game.load.spritesheet('half-graphene', 'assets/half-graphene_v5.png', 60, 68);
    game.load.spritesheet('half-grapheneL', 'assets/half-graphene_v5-L.png', 60, 68);
    game.load.spritesheet('drop-loop', 'assets/drop-loop_v1.png', 229, 118);
    //
    game.load.spritesheet('new-atoms', 'assets/atom-spritesheet.png', 30, 30);
    game.load.spritesheet('silver-atoms', 'assets/silver-atom-spritesheet.png', 30, 30);
    //
  //and some AUDIO
  game.load.audio('rev', 'assets/car-2.mp3');
  game.load.audio('theme', 'assets/maintrack4.mp3');
  game.load.audio('death','assets/hero-death-00.mp3');
  game.load.audio('win','assets/win.mp3');
  game.load.audio('bass-loop','assets/bass-loop2.mp3')
  game.load.audio('endlich', 'assets/endlich_v3.mp3');
  game.load.audio('swipe', 'assets/car-3.mp3');
  game.load.audio('power-up-blips', 'assets/power-up-blips.mp3');
  game.load.audio('fall-sfx', 'assets/fall_v1.mp3');
  game.load.audio('grind', 'assets/grind_v2.mp3');
  //

  },
  create: function(){

    game.state.start('menu');
  }


};
