var joueur;
var ennemis;
var argent;
var power-up;
var murs;

var gamepad;
var paddle;
var padConnected;
var pad;

var pv_joueur = 2;

var coeur_1;
var coeur_2;
var coeur_3;
var demicoeur_1;
var demicoeur_2;
var demicoeur_3;

var position_x = 1000;
var position_y = 80;

class SceneOne extends Phaser.Scene{
    constructor(){
        super("sceneOne");
        this.pad = null;
    }
    init(data){
    }