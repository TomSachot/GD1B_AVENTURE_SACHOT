class SceneTwo extends Phaser.Scene{
    constructor(){
        super("sceneTwo");
        this.pad = null;
    }
    init(data){
    }
    preload(){
        this.load.tilemapTiledJSON('map_2_placeholder', 'map_2_placeholder.json');
        this.load.image('joueur', 'assets/joueur.png'); 

    }