var game = new Phaser.Game(800, 600, Phaser.AUTO, 'particles', {create: create, preload: preload });

function create(){
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.maxWidth = 800;
    game.scale.maxHeight = 600;

    game.state.add('LoadingSplash', LoadingSplash);
    game.state.start('LoadingSplash');
}
function preload () {
    game.load.image('blueball', 'particles/assets/images/blue_ball_32_trans.png');
    game.load.image('redball', 'particles/assets/images/red_ball_32_trans.png');
    game.load.script('loadingsplash', 'particles/js/states/loadingsplash.js');
}


