var enemies = [
    310,290,270,250,230,210,190,170,150,30,60,90,120,150,180,210,240
    // {enemyx:310,c:0},{enemyx:290,c:0},{enemyx:270,c:0},{enemyx:250,c:0},{enemyx:230,c:0},{enemyx:210,c:0}
    // { type: "a", x: 0, item: true, hp: 2 },
    // { type: "a", x: 0, item: true, hp: 2 },
    // { type: "a", x: 0, item: true, hp: 2 },
    // { type: "a", x: 0, item: true, hp: 2 },
    // // enemy1が右から２匹直進する2
    // { type: "a", x: 0, item: true, hp: 2 },
    // { type: "a", x: 0, item: true, hp: 2 },
    // { type: "a", x: 15, item: true, hp: 2 },
    // { type: "a", x: 15, item: true, hp: 2 },
    // { type: "a", x: 15, item: true, hp: 2 },
    //  { type: "b", x: 256, hp: 21 },
    // { type: "b", x: 128, hp: 21 },
    
    //  enemy2が左から１匹ジグザグに移動する
   
    //  enemy2が左から１匹ジグザグに移動する
  
];

var createEnemy = {};
createEnemy["a"] = function (data) {

      enemy = new Sprite(32, 32);
    // enemy.n= new Node();
    enemy.image = core.assets.enemy1;
    enemy.hp = data.hp;
    // enemy.tl.moveBy(-64, 0, 50, enchant.Easing.QUAD_EASEINOUT);
    // enemy.tl.moveBy(64, 0, 50, enchant.Easing.QUAD_EASEINOUT);
    // enemy.tl.moveBy(64, 0, 100, enchant.Easing.QUAD_EASEINOUT);
    // enemy.tl.loop();
    enemy.centerX = data.x + 180;
    enemy.centerY = 50;
    enemy.item = data.item;

    return enemy;
}
createEnemy["b"] = function (data) {
    let enemy = new Sprite(32, 32);
    enemy.scale (2,2)
    enemy.image = core.assets.enemy2;
    enemy.centerX = data.x;
    enemy.y = 32;
    enemy.item = data.item;
    enemy.hp=data.hp-1;
    // enemy.tl.moveBy(-64, 0, 100, enchant.Easing.QUAD_EASEINOUT);

    // enemy.tl.moveBy(64, 0, 100, enchant.Easing.QUAD_EASEINOUT);


    // enemy.tl.scaleTo(5, 5, 10)
    // enemy.tl.loop();
    enemy.on(Event.ENTER_FRAME, function () {


        if (this.y > 560) this.remove();
    });
    return enemy;
}
var objectpool = [];
var objectpool2 = [];
var objectpool3 = [];
var objectpool4 = [];
var objectpool5 = [];
var objectpool6 = [];
var objectpool7 = [];
var objectpool8 = [];
var middlebullet = [];
var laseros = [];
var shotsse = [];
var shot1 = [];
var shot2 = [];
var shot3 = [];
var shot4 = [];
var shot5 = [];
var shot6 = [];
var komes = [];
var aokomes = [];