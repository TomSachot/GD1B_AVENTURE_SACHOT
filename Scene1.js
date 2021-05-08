var joueur;
var ennemis;
var boss;
var argent;
var power_up;
var murs;

var gamepad;
var paddle;
var padConnected;
var pad;

var pv_joueur = 3;

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
        this.load.image('tiles', 'assets/.jpg');
        this.load.spritesheet('joueur', 'assets/joueur.png', {frameWidth: 32, frameHeight: 32});
        this.load.image('argent', 'assets/argent.png'); 
        this.load.image('ennemi1', 'assets/ennemi1.png');
        this.load.image('coeur', 'assets/coeur.png');
        this.load.image('demicoeur', 'assets/demicoeur.png');
        this.load.image('fumee', 'assets/fumee.png');
    }
    create(){
        
        //Map


        //Sprites
        joueur = this.physics.add.sprite(position_x, position_y, 'joueur');
        
        coeur_1 = this.add.sprite(1230,50, 'coeur');
        coeur_2 = this.add.sprite(1180,50, 'coeur');
        coeur_3 = this.add.sprite(1130,50, 'coeur');
        
        demicoeur_1 = this.add.sprite(1230,50, 'demicoeur').setVisible(false);
        demicoeur_2 = this.add.sprite(1180,50, 'demicoeur').setVisible(false);
        demicoeur_3 = this.add.sprite(1130,50, 'demicoeur').setVisible(false);

        argent = this.add.sprite(930, 50, 'argent').setScale(0.5);

        //Collisions

        this.physics.add.overlap(joueur, argent, collecteArgent, null, this);

        //Changement de scène
            function changementZone(joueur, zone){
                if (joueur.y >= 690 && joueur.x >= 620 && joueur.x <= 660){
                    //joueur.body.stop();
                    this.scene.start("scene2");
                }
            }

        //Animations du joueur
            this.anims.create({
                key: 'right',
                frames: this.anims.generateFrameNumbers('joueur', { start: 1, end: 1 }),
                frameRate: 10,
                repeat: -1
                });
            this.anims.create({
                key: 'left',
                frames: this.anims.generateFrameNumbers('joueur', { start: 2, end: 2 }),
                frameRate: 10,
                repeat: -1
                });
            this.anims.create({
                key: 'up',
                frames: this.anims.generateFrameNumbers('joueur', { start: 0, end: 0 }),
                frameRate: 10,
                repeat: -1
                });
            this.anims.create({
                key: 'down',
                frames: this.anims.generateFrameNumbers('joueur', { start: 3, end: 3 }),
                frameRate: 10,
                repeat: -1
                });

        //Animations de l'attaque du joueur



        //Clavier
        keys = this.input.keyboard.addKeys({
            left: Phaser.Input.Keyboard.KeyCodes.LEFT,
            right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
            up : Phaser.Input.Keyboard.KeyCodes.UP,
            down: Phaser.Input.Keyboard.KeyCodes.DOWN,
            space: Phaser.Input.Keyboard.KeyCodes.SPACE,
            shift: Phaser.Input.Keyboard.KeyCodes.SHIFT
        });
            
        //Manette
        if (this.input.gamepad.total === 0){
            this.input.gamepad.once('connected', function (pad, button, index) {
                paddle = pad;
                padConnected = true;
            }); 
        }
        else {
            paddle = this.input.gamepad.pad1;
        }
    }

    update(){
            
        if (moving == true){
            moving = false;
        }
        //Perte de vie du joueur
        if (pv_joueur == 2){
            coeur_3.setVisible(false);
            demicoeur_3.setVisible(true);
        }
        else if (pv_joueur == 1){
            coeur_3.setVisible(false);
            demicoeur_3.setVisible(true);
            coeur_2.setVisible(false);
            demicoeur_2.setVisible(true);
        }
        else if (pv_joueur == 0){
            coeur_3.setVisible(false);
            demicoeur_3.setVisible(true);
            coeur_2.setVisible(false);
            demicoeur_2.setVisible(true);
            coeur_1.setVisible(false);
            demicoeur_1.setVisible(true);
        }
        
        //Contrôles au clavier
        if (!padConnected){
            if (keys.right.isDown){
                joueur.setVelocityX(100);
                joueur.anims.play('right', true);
            }
            else if (keys.left.isDown){
                joueur.setVelocityX(-100);
                joueur.anims.play('left', true);
            }
            else if (keys.right.isUp && keys.left.isUp){
                joueur.setVelocityX(0);
            }
            if (keys.up.isDown){
                joueur.setVelocityY(-100);
                joueur.anims.play('up', true);
            }
            else if (keys.down.isDown){
                joueur.setVelocityY(100);
                joueur.anims.play('down', true);
            }
            else if (keys.up.isUp && keys.down.isUp){
                joueur.setVelocityY(0);
            }
        }
                
        //Contrôles à la manette
        if (padConnected){

            if(paddle.right || keys.right.isDown){
                joueur.setVelocityX(100);
                joueur.anims.play('right', true);
            }
            else if(paddle.left || keys.left.isDown){
                joueur.setVelocityX(-100);
                joueur.anims.play('left', true);
            }
            else if(!paddle.right && !paddle.left || keys.right.isUp && keys.left.isUp){
                joueur.setVelocityX(0);
            }
            if(paddle.up || keys.up.isDown){
                joueur.setVelocityY(-100);
                joueur.anims.play('up', true);
            }
            else if(paddle.down || keys.down.isDown){
                joueur.setVelocityY(100);
                joueur.anims.play('down', true);
            }
            else if(!paddle.up && !paddle.down || keys.up.isUp && keys.down.isUp){
                joueur.setVelocityY(0);
            }
        }

//Attaque

function Attaque(){

}
