class SceneTwo extends Phaser.Scene{
    constructor(){
        super("sceneTwo");
        this.pad = null;
    }
    init(data){
    }
    preload(){
        //this.load.images(map);
        this.load.image('joueur', 'assets/joueur.png'); 
        this.load.image('powerup', 'assets/powerup.png');

    }

    create(){

        //map

        //Sprites
        joueur = this.physics.add.sprite(position_x, position_y, 'joueur');
        
        coeur_1 = this.add.sprite(1230,50, 'coeur');
        coeur_2 = this.add.sprite(1180,50, 'coeur');
        coeur_3 = this.add.sprite(1130,50, 'coeur');
        
        demicoeur_1 = this.add.sprite(1230,50, 'demicoeur').setVisible(false);
        demicoeur_2 = this.add.sprite(1180,50, 'demicoeur').setVisible(false);
        demicoeur_3 = this.add.sprite(1130,50, 'demicoeur').setVisible(false);

        argent = this.add.sprite(930, 50, 'argent').setScale(0.5);

        power_up = this.add.sprite(50,360, 'powerup');
    }