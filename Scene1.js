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

class Scene1 extends Phaser.Scene{
    constructor(){
        super("scene1");
        this.pad = null;
    }
    init(data){
    }
    preload(){   
        this.load.image('tiles', 'assets/tileset_placeholder.jpg');
        this.load.spritesheet('joueur', 'assets/joueur.png', {frameWidth: 32, frameHeight: 32});
        this.load.image('argent', 'assets/argent.png'); 
        this.load.image('ennemi1', 'assets/ennemi1.png');
        this.load.image('coeur', 'assets/coeur.png');
        this.load.image('demicoeur', 'assets/demicoeur.png');
        this.load.image('fumee', 'assets/fumee.png');
    }
    create(){
        
        //map


        //sprites
        joueur = this.physics.add.sprite(position_x, position_y, 'joueur');
        
        coeur_1 = this.add.sprite(1230,50, 'coeur');
        coeur_2 = this.add.sprite(1180,50, 'coeur');
        coeur_3 = this.add.sprite(1130,50, 'coeur');
        
        demicoeur_1 = this.add.sprite(1230,50, 'demicoeur').setVisible(false);
        demicoeur_2 = this.add.sprite(1180,50, 'demicoeur').setVisible(false);
        demicoeur_3 = this.add.sprite(1130,50, 'demicoeur').setVisible(false);
