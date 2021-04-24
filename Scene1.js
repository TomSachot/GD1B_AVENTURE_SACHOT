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

var saphirs;
var swing;
var canSwing = false;
var newSwing;
var newSaphir;
var saphirs_compte;
var nombre_saphir = 0;
var saphirs_icon;
var gotSword = false;
var sword_icon;

var dash_icon;
var canDash = false;
var dash = 1;
var justDashed = false;

var flute;
var hasFlute = false;

var password = 0;
var newItem;
var new_mur_1;
var new_mur_2;
var new_mur_3;
var new_mur_4;
var green_tiles;

var moving = false;
var canCollect;

var position_x = 1000;
var position_y = 80;

class SceneOne extends Phaser.Scene{
    constructor(){
        super("sceneOne");
        this.pad = null;
    }
    init(data){
    }