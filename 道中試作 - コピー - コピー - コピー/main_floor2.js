// ゲーム画面
function floor2Start() {
    aokomes.length = 0;
    komes.length = 0;
    // ゲー
    var scene = new Scene();
    core.replaceScene(scene);
    scene.backgroundColor = "#000000";
    var gamepad = new Gamepad();

    var stage = new Group();
    scene.addChild(stage);

    var backGroup = new Group();
    stage.addChild(backGroup);
    // 敵グループ



    var enemyGroup = new Group();
    stage.addChild(enemyGroup);
    var enemy2Group = new Group();
    stage.addChild(enemy2Group);
    var enemy3Group = new Group();
    stage.addChild(enemy3Group);
    var bossgl = new Group();
    stage.addChild(bossgl)

    // 弾グループ
    var shotGroup = new Group();
    stage.addChild(shotGroup);
    // 弾グループ
    var laserGroup = new Group();
    stage.addChild(laserGroup);
    // プレイヤーグループ
    // 敵の攻撃グループ

    var enemyShotGroup = new Group();
    stage.addChild(enemyShotGroup);


    var playerGroup = new Group();
    stage.addChild(playerGroup);
 var middletamaGroup = new Group();
    stage.addChild(middletamaGroup);
    var tamakawaGroup = new Group();
    stage.addChild(tamakawaGroup);
   
    wave = 0
    var back = new Sprite(360, 540);
    back.image = core.assets.back;
    back.x = 0;
    back.y = 0;
    backGroup.addChild(back);
    function returnBullet(bullet){
        bullet.centerX = 0;// とりま画面の左上
        bullet.centerY = 0;
        bullet.moveX   = 0;// 速度も0に!!
        bullet.moveY   = 0;
        bullet.clearEventListener(Event.ENTER_FRAME);
        bullets.push(bullet);// マガジンに戻す
    }
    var random = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    var random2 = function (min, max) {
        return Math.random() * (max - min + 1) + min;
    }
    var enemyshot = function(s){
        if (objectpool2.lengh<=0)return;
        tamakawa = objectpool2.pop();
        tamakawa.centerX = enemy.centerX;
        tamakawa.centerY = enemy.centerY;
        radian = Math.atan2(-enemy.centerY+playerEntityGroup.centerY,-enemy.centerX+playerEntityGroup.centerX);
        tamakawa.moveX = s*Math.cos(radian);
        tamakawa.moveY = s*Math.sin(radian);
    }
    var isOutside = function(spr) {
        if (spr.centerX < -50) return true;
        if (spr.centerY < -50) return true;
        if (scene.width < spr.centerX+50) return true;
        if (scene.height < spr.centerY-50) return true;
        return false;
    } 
    var isOutside2 = function(spr) {
        if (spr.centerX < 0) return true;
        if (spr.centerY < 0) return true;
        if (scene.width < spr.centerX) return true;
        if (scene.height+30 < spr.centerY) return true;
        return false;
    }
    var isinside = function (spr) {
        if (spr.centerX > 0) return true;
        if (spr.centerY > 0) return true;
        if (scene.width > spr.centerX) return true;
        if (scene.height > spr.centerY) return true;
        return false;
    }
    var shotset = function(x,y,x2,y2,j,P){
        if (shot1.length <= 1) return;
        var shots =  shot1.pop();
        shots.centerX = playerEntityGroup.centerX+x;
        shots.centerY = playerEntityGroup.centerY+y;
        if(j==0){
        shots.moveX = x2;
        shots.moveY = y2;  
        }else{
            
        }
        shots.on(Event.ENTER_FRAME, function () {
            for (var enemy of enemyGroup.childNodes){
              
                if (this.intersect(enemy)&& enemy.centerY>30) { 
                       enemy.hp-=1;
                    if(enemy.hp<=0){
                        this.centerX = 0;
                        this.centerY = 0;
                        this.moveX = 0;
                        this.moveY = 0;
                          this.clearEventListener(Event.ENTER_FRAME);
                              shot1.push(this);
                            
                            // var tamakawab = objectpool3.pop();
                            a = -13; 
                            b = 13;
                            c = 0;
                            if (a >= 0 && b <= 0) {
                                c = 1 + b; + Math.abs(a);
                            } else {
                                c = b + Math.abs(a);
                            }
                            for (i = a; i <= b; i++) {
                                if (objectpool2.length <= 10 ) return;
                                tama = objectpool2.pop();
                                 tama.centerX = enemy.centerX;
                                 tama.centerY = enemy.centerY;
                                 // radian = 0;
                                 radian = Math.atan2(tama.centerY - playerEntityGroup.y, tama.centerX - playerEntityGroup.x);
                                 angle = radian / (Math.PI / 180) + 180;
                                 // 距離と角度から座標 
                                 angle += (360/c)*i;
                                 tama.moveX = 6 * Math.cos(angle * (Math.PI / 180));
                                 tama.moveY = 6 * Math.sin(angle * (Math.PI / 180));
                            }
                    enemy.centerX  =0;
                    enemy.centerY = 0;
                    enemy.hp = 3;
                    
                    enemy.clearEventListener(Event.ENTER_FRAME);
                    enemies.push(enemy.centerX);
                    objectpool5.push(enemy)
                    
                    }else{
                        this.centerX = 0;
                    this.centerY = 0;
                    this.moveX = 0;
                    this.moveY = 0;
                      this.clearEventListener(Event.ENTER_FRAME);
                        shot1.push(this);
                    }
                   
                     return;              
                }              
            }
            for (var enemy2 of enemy2Group.childNodes){
                if (this.intersect(enemy2)&& enemy2.centerY>30) { 
                        enemy2.hp-=2;
                     
                    if(enemy2.hp<=0){
                 
                    enemy2.centerX  =0;
                    enemy2.centerY = 0;
                    enemy2.hp = 1000;
                    enemy2.clearEventListener(Event.ENTER_FRAME);
                    objectpool7.push(enemy2)
                    this.clearEventListener(Event.ENTER_FRAME);
                    shot1.push(this);
                    }else{
                    this.centerX = 0;
                    this.centerY = 0;
                    this.moveX = 0;
                    this.moveY = 0;
                      this.clearEventListener(Event.ENTER_FRAME);
                        shot1.push(this);
                    }
                
                     return;              
                }              
            }
            if(isOutside2(this)){
                this.centerX = 0;
                this.centerY = 0;
                this.moveX = 0;
                this.moveY = 0;
                     this.clearEventListener(Event.ENTER_FRAME);
                    shot1.push(this);
                return;
            }
            this.centerX += this.moveX;
            this.centerY += this.moveY;
            return;
    });
    
         
        return false;
    }
    var shotset2 = function(x,y,x2,y2,j,P){
        if (shot2.length <= 1) return;
        var shots =  shot2.pop();
        shots.centerX = playerEntityGroup.centerX+x;
        shots.centerY = playerEntityGroup.centerY+y;
        if(j==0){
        shots.moveX = x2;
        shots.moveY = y2;  
        }else{
            
        }
        shots.on(Event.ENTER_FRAME, function () {
            for (var enemy of enemyGroup.childNodes){
              
                if (this.intersect(enemy)&& enemy.centerY>30) { 
                       enemy.hp-=1;
                    if(enemy.hp<=0){
                        this.centerX = 0;
                        this.centerY = 0;
                        this.moveX = 0;
                        this.moveY = 0;
                          this.clearEventListener(Event.ENTER_FRAME);
                              shot2.push(this);
                            
                            // var tamakawab = objectpool3.pop();
                            a = -13; 
                            b = 13;
                            c = 0;
                            if (a >= 0 && b <= 0) {
                                c = 1 + b; + Math.abs(a);
                            } else {
                                c = b + Math.abs(a);
                            }
                            for (i = a; i <= b; i++) {
                                if (objectpool2.length <= 10 ) return;
                                tama = objectpool2.pop();
                                 tama.centerX = enemy.centerX;
                                 tama.centerY = enemy.centerY;
                                 // radian = 0;
                                 radian = Math.atan2(tama.centerY - playerEntityGroup.y, tama.centerX - playerEntityGroup.x);
                                 angle = radian / (Math.PI / 180) + 180;
                                 // 距離と角度から座標 
                                 angle += (360/c)*i;
                                 tama.moveX = 6 * Math.cos(angle * (Math.PI / 180));
                                 tama.moveY = 6 * Math.sin(angle * (Math.PI / 180));
                            }
                    enemy.centerX  =0;
                    enemy.centerY = 0;
                    enemy.hp = 3;
                    
                    enemy.clearEventListener(Event.ENTER_FRAME);
                    objectpool5.push(enemy)
                    
                    }else{
                        this.centerX = 0;
                    this.centerY = 0;
                    this.moveX = 0;
                    this.moveY = 0;
                      this.clearEventListener(Event.ENTER_FRAME);
                        shot2.push(this);
                    }
                   
                     return;              
                }              
            }
            for (var enemy2 of enemy2Group.childNodes){
                if (this.intersect(enemy2)&& enemy2.centerY>30) { 
                        enemy2.hp-=2;
                     
                    if(enemy2.hp<=0){
                 
                    enemy2.centerX  =0;
                    enemy2.centerY = 0;
                    enemy2.hp = 1000;
                    enemy2.clearEventListener(Event.ENTER_FRAME);
                    objectpool7.push(enemy2)
                    this.clearEventListener(Event.ENTER_FRAME);
                    shot2.push(this);
                    }else{
                    this.centerX = 0;
                    this.centerY = 0;
                    this.moveX = 0;
                    this.moveY = 0;
                      this.clearEventListener(Event.ENTER_FRAME);
                        shot2.push(this);
                    }
                
                     return;              
                }              
            }
            if(isOutside2(this)){
                this.centerX = 0;
                this.centerY = 0;
                this.moveX = 0;
                this.moveY = 0;
                     this.clearEventListener(Event.ENTER_FRAME);
                    shot2.push(this);
                return;
            }
            this.centerX += this.moveX;
            this.centerY += this.moveY;
            return;
    });
    
         
        return false;
    }
    var shotset3 = function(x,y,x2,y2,j,P){
        if (shot3.length <= 1) return;
        var shots =  shot3.pop();
        shots.centerX = playerEntityGroup.centerX+x;
        shots.centerY = playerEntityGroup.centerY+y;
        if(j==0){
        shots.moveX = x2;
        shots.moveY = y2;  
        }else{
            
        }
        shots.on(Event.ENTER_FRAME, function () {
            for (var enemy of enemyGroup.childNodes){
              
                if (this.intersect(enemy)&& enemy.centerY>30) { 
                       enemy.hp-=1;
                    if(enemy.hp<=0){
                        this.centerX = 0;
                        this.centerY = 0;
                        this.moveX = 0;
                        this.moveY = 0;
                          this.clearEventListener(Event.ENTER_FRAME);
                              shot3.push(this);
                            
                            // var tamakawab = objectpool3.pop();
                            a = -13; 
                            b = 13;
                            c = 0;
                            if (a >= 0 && b <= 0) {
                                c = 1 + b; + Math.abs(a);
                            } else {
                                c = b + Math.abs(a);
                            }
                            for (i = a; i <= b; i++) {
                                if (objectpool2.length <= 10 ) return;
                                tama = objectpool2.pop();
                                 tama.centerX = enemy.centerX;
                                 tama.centerY = enemy.centerY;
                                 // radian = 0;
                                 radian = Math.atan2(tama.centerY - playerEntityGroup.y, tama.centerX - playerEntityGroup.x);
                                 angle = radian / (Math.PI / 180) + 180;
                                 // 距離と角度から座標 
                                 angle += (360/c)*i;
                                 tama.moveX = 6 * Math.cos(angle * (Math.PI / 180));
                                 tama.moveY = 6 * Math.sin(angle * (Math.PI / 180));
                            }
                    enemy.centerX  =0;
                    enemy.centerY = 0;
                    enemy.hp = 3;
                    
                    enemy.clearEventListener(Event.ENTER_FRAME);
                    objectpool5.push(enemy)
                    enemies.push(enemy.centerX);
                    
                    }else{
                        this.centerX = 0;
                    this.centerY = 0;
                    this.moveX = 0;
                    this.moveY = 0;
                      this.clearEventListener(Event.ENTER_FRAME);
                        shot3.push(this);
                    }
                   
                     return;              
                }              
            }
            for (var enemy2 of enemy2Group.childNodes){
                if (this.intersect(enemy2)&& enemy2.centerY>30) { 
                        enemy2.hp-=2;
                     
                    if(enemy2.hp<=0){
                 
                    enemy2.centerX  =0;
                    enemy2.centerY = 0;
                    enemy2.hp = 1000;
                    enemy2.clearEventListener(Event.ENTER_FRAME);
                    objectpool7.push(enemy2)
                    this.clearEventListener(Event.ENTER_FRAME);
                    shot3.push(this);
                    }else{
                    this.centerX = 0;
                    this.centerY = 0;
                    this.moveX = 0;
                    this.moveY = 0;
                      this.clearEventListener(Event.ENTER_FRAME);
                        shot3.push(this);
                    }
                
                     return;              
                }              
            }
            if(isOutside2(this)){
                this.centerX = 0;
                this.centerY = 0;
                this.moveX = 0;
                this.moveY = 0;
                     this.clearEventListener(Event.ENTER_FRAME);
                    shot3.push(this);
                return;
            }
            this.centerX += this.moveX;
            this.centerY += this.moveY;
            return;
    });
    
         
        return false;
    }
    var shotset4 = function(x,y,x2,y2,j,P){
        if (shot4.length <= 1) return;
        var shots =  shot4.pop();
        shots.centerX = playerEntityGroup.centerX+x;
        shots.centerY = playerEntityGroup.centerY+y;
        if(j==0){
        shots.moveX = x2;
        shots.moveY = y2;  
        }else{
            
        }
        shots.on(Event.ENTER_FRAME, function () {
            for (var enemy of enemyGroup.childNodes){
              
                if (this.intersect(enemy)&& enemy.centerY>30) { 
                       enemy.hp-=1;
                    if(enemy.hp<=0){
                        this.centerX = 0;
                        this.centerY = 0;
                        this.moveX = 0;
                        this.moveY = 0;
                          this.clearEventListener(Event.ENTER_FRAME);
                              shot4.push(this);
                            
                            // var tamakawab = objectpool3.pop();
                            a = -13; 
                            b = 13;
                            c = 0;
                            if (a >= 0 && b <= 0) {
                                c = 1 + b; + Math.abs(a);
                            } else {
                                c = b + Math.abs(a);
                            }
                            for (i = a; i <= b; i++) {
                                if (objectpool2.length <= 10 ) return;
                                tama = objectpool2.pop();
                                 tama.centerX = enemy.centerX;
                                 tama.centerY = enemy.centerY;
                                 // radian = 0;
                                 radian = Math.atan2(tama.centerY - playerEntityGroup.y, tama.centerX - playerEntityGroup.x);
                                 angle = radian / (Math.PI / 180) + 180;
                                 // 距離と角度から座標 
                                 angle += (360/c)*i;
                                 tama.moveX = 6 * Math.cos(angle * (Math.PI / 180));
                                 tama.moveY = 6 * Math.sin(angle * (Math.PI / 180));
                            }
                    enemy.centerX  =0;
                    enemy.centerY = 0;
                    enemy.hp = 3;
                    
                    enemy.clearEventListener(Event.ENTER_FRAME);
                    enemies.push(enemy.centerX);
                    objectpool5.push(enemy)
                    
                    }else{
                        this.centerX = 0;
                    this.centerY = 0;
                    this.moveX = 0;
                    this.moveY = 0;
                      this.clearEventListener(Event.ENTER_FRAME);
                        shot4.push(this);
                    }
                   
                     return;              
                }              
            }
            for (var enemy2 of enemy2Group.childNodes){
                if (this.intersect(enemy2)&& enemy2.centerY>30) { 
                        enemy2.hp-=2;
                     
                    if(enemy2.hp<=0){
                 
                    enemy2.centerX  =0;
                    enemy2.centerY = 0;
                    enemy2.hp = 1000;
                    enemy2.clearEventListener(Event.ENTER_FRAME);
                    objectpool7.push(enemy2)
                    this.clearEventListener(Event.ENTER_FRAME);
                    shot4.push(this);
                    }else{
                    this.centerX = 0;
                    this.centerY = 0;
                    this.moveX = 0;
                    this.moveY = 0;
                      this.clearEventListener(Event.ENTER_FRAME);
                        shot4.push(this);
                    }
                
                     return;              
                }              
            }
            if(isOutside2(this)){
                this.centerX = 0;
                this.centerY = 0;
                this.moveX = 0;
                this.moveY = 0;
                     this.clearEventListener(Event.ENTER_FRAME);
                    shot4.push(this);
                return;
            }
            this.centerX += this.moveX;
            this.centerY += this.moveY;
            return;
    });
    
         
        return false;
    }
    var shotset5 = function(x,y,x2,y2,j,P){
        if (shot5.length <= 1) return;
        var shots =  shot5.pop();
        shots.centerX = playerEntityGroup.centerX+x;
        shots.centerY = playerEntityGroup.centerY+y;
        if(j==0){
        shots.moveX = x2;
        shots.moveY = y2;  
        }else{
            
        }
        shots.on(Event.ENTER_FRAME, function () {
            for (var enemy of enemyGroup.childNodes){
              
                if (this.intersect(enemy)&& enemy.centerY>30) { 
                       enemy.hp-=1;
                    if(enemy.hp<=0){
                        this.centerX = 0;
                        this.centerY = 0;
                        this.moveX = 0;
                        this.moveY = 0;
                          this.clearEventListener(Event.ENTER_FRAME);
                              shot5.push(this);
                            
                            // var tamakawab = objectpool3.pop();
                            a = -13; 
                            b = 13;
                            c = 0;
                            if (a >= 0 && b <= 0) {
                                c = 1 + b; + Math.abs(a);
                            } else {
                                c = b + Math.abs(a);
                            }
                            for (i = a; i <= b; i++) {
                                if (objectpool2.length <= 10 ) return;
                                tama = objectpool2.pop();
                                 tama.centerX = enemy.centerX;
                                 tama.centerY = enemy.centerY;
                                 // radian = 0;
                                 radian = Math.atan2(tama.centerY - playerEntityGroup.y, tama.centerX - playerEntityGroup.x);
                                 angle = radian / (Math.PI / 180) + 180;
                                 // 距離と角度から座標 
                                 angle += (360/c)*i;
                                 tama.moveX = 6 * Math.cos(angle * (Math.PI / 180));
                                 tama.moveY = 6 * Math.sin(angle * (Math.PI / 180));
                            }
                    enemy.centerX  =0;
                    enemy.centerY = 0;
                    enemy.hp = 3;
                    
                    enemy.clearEventListener(Event.ENTER_FRAME);
                    objectpool5.push(enemy)
                    
                    }else{
                        this.centerX = 0;
                    this.centerY = 0;
                    this.moveX = 0;
                    this.moveY = 0;
                      this.clearEventListener(Event.ENTER_FRAME);
                        shot5.push(this);
                    }
                   
                     return;              
                }              
            }
            for (var enemy2 of enemy2Group.childNodes){
                if (this.intersect(enemy2)&& enemy2.centerY>30) { 
                        enemy2.hp-=2;
                     
                    if(enemy2.hp<=0){
                 
                    enemy2.centerX  =0;
                    enemy2.centerY = 0;
                    enemy2.hp = 1000;
                    enemy2.clearEventListener(Event.ENTER_FRAME);
                    objectpool7.push(enemy2)
                    this.clearEventListener(Event.ENTER_FRAME);
                    shot5.push(this);
                    }else{
                    this.centerX = 0;
                    this.centerY = 0;
                    this.moveX = 0;
                    this.moveY = 0;
                      this.clearEventListener(Event.ENTER_FRAME);
                        shot5.push(this);
                    }
                
                     return;              
                }              
            }
            if(isOutside2(this)){
                this.centerX = 0;
                this.centerY = 0;
                this.moveX = 0;
                this.moveY = 0;
                     this.clearEventListener(Event.ENTER_FRAME);
                    shot5.push(this);
                return;
            }
            this.centerX += this.moveX;
            this.centerY += this.moveY;
            return;
    });
    
         
        return false;
    }
    var shotset6 = function(x,y,x2,y2,j,P){
        if (shot6.length <= 1) return;
        var shots =  shot6.pop();
        shots.centerX = playerEntityGroup.centerX+x;
        shots.centerY = playerEntityGroup.centerY+y;
        if(j==0){
        shots.moveX = x2;
        shots.moveY = y2;  
        }else{
            
        }
        shots.on(Event.ENTER_FRAME, function () {
            for (var enemy of enemyGroup.childNodes){
              
                if (this.intersect(enemy)&& enemy.centerY>30) { 
                       enemy.hp-=1;
                    if(enemy.hp<=0){
                        this.centerX = 0;
                        this.centerY = 0;
                        this.moveX = 0;
                        this.moveY = 0;
                          this.clearEventListener(Event.ENTER_FRAME);
                              shot6.push(this);
                            
                            // var tamakawab = objectpool3.pop();
                            a = -13; 
                            b = 13;
                            c = 0;
                            if (a >= 0 && b <= 0) {
                                c = 1 + b; + Math.abs(a);
                            } else {
                                c = b + Math.abs(a);
                            }
                            for (i = a; i <= b; i++) {
                                if (objectpool2.length <= 10 ) return;
                                tama = objectpool2.pop();
                                 tama.centerX = enemy.centerX;
                                 tama.centerY = enemy.centerY;
                                 // radian = 0;
                                 radian = Math.atan2(tama.centerY - playerEntityGroup.y, tama.centerX - playerEntityGroup.x);
                                 angle = radian / (Math.PI / 180) + 180;
                                 // 距離と角度から座標 
                                 angle += (360/c)*i;
                                 tama.moveX = 6 * Math.cos(angle * (Math.PI / 180));
                                 tama.moveY = 6 * Math.sin(angle * (Math.PI / 180));
                            }
                    enemy.centerX  =0;
                    enemy.centerY = 0;
                    enemy.hp = 3;
                    
                    enemy.clearEventListener(Event.ENTER_FRAME);
                    objectpool5.push(enemy)
                    
                    }else{
                        this.centerX = 0;
                    this.centerY = 0;
                    this.moveX = 0;
                    this.moveY = 0;
                      this.clearEventListener(Event.ENTER_FRAME);
                        shot6.push(this);
                    }
                   
                     return;              
                }              
            }
            for (var enemy2 of enemy2Group.childNodes){
                if (this.intersect(enemy2)&& enemy2.centerY>30) { 
                        enemy2.hp-=2;
                     
                    if(enemy2.hp<=0){
                 
                    enemy2.centerX  =0;
                    enemy2.centerY = 0;
                    enemy2.hp = 1000;
                    enemy2.clearEventListener(Event.ENTER_FRAME);
                    objectpool7.push(enemy2)
                    this.clearEventListener(Event.ENTER_FRAME);
                    shot6.push(this);
                    }else{
                    this.centerX = 0;
                    this.centerY = 0;
                    this.moveX = 0;
                    this.moveY = 0;
                      this.clearEventListener(Event.ENTER_FRAME);
                        shot6.push(this);
                    }
                
                     return;              
                }              
            }
            if(isOutside2(this)){
                this.centerX = 0;
                this.centerY = 0;
                this.moveX = 0;
                this.moveY = 0;
                     this.clearEventListener(Event.ENTER_FRAME);
                    shot6.push(this);
                return;
            }
            this.centerX += this.moveX;
            this.centerY += this.moveY;
            return;
    });
    
         
        return false;
    }
    var laserset = function(x,y,x2,y2,j){
        
        if (objectpool6.length <= 1) return;
        var laser = objectpool6.pop();
        laser.centerY = playerEntityGroup.centerY+y;
        laser.moveX = x2;
        laser.moveY = y2;  
        laser.on(Event.ENTER_FRAME, function () {
            laser.centerX = playerEntityGroup.centerX+x;
            for (var enemy of enemyGroup.childNodes){
                if (this.intersect(enemy)&& enemy.centerY>30) { 
                    enemy.centerX  =0;
                    enemy.centerY = 0;
                    enemy.hp = 3;
                    a = -8; 
                    b = 8;
                    c = 0;
                    if (a >= 0 && b <= 0) {
                        c = 1 + b; + Math.abs(a);
                    } else {
                        c = b + Math.abs(a);
                    }
                    for (i = a; i <= b; i++) {
                        if (objectpool2.length <= 10 ) return;
                        tama = objectpool2.pop();
                         tama.centerX = this.centerX;
                         tama.centerY = this.centerY;
                         // radian = 0;
                         radian = Math.atan2(tama.centerY - playerEntityGroup.y, tama.centerX - playerEntityGroup.x);
                         angle = radian / (Math.PI / 180) + 180;
                         // 距離と角度から座標 
                         angle += (360/c)*i;
                         tama.moveX = 6 * Math.cos(angle * (Math.PI / 180));
                         tama.moveY = 6 * Math.sin(angle * (Math.PI / 180));
                    }
                    enemy.clearEventListener(Event.ENTER_FRAME);
                    objectpool5.push(enemy)
                     return;              
                }              
            }
            for (var enemy2 of enemy2Group.childNodes){
                if (this.intersect(enemy2)&& enemy2.centerY>30) { 
                   enemy2.hp-=5;
                    if(enemy2.hp<=0){
                 
                        enemy2.centerX  =0;
                        enemy2.centerY = 0;
                        enemy2.hp = 1000;
                        enemy2.clearEventListener(Event.ENTER_FRAME);
                        objectpool7.push(enemy2)
                        
                        }else{
                            this.centerX = 0;
                            this.centerY = 0;
                            this.moveX = 0;
                            this.moveY = 0;
                              this.clearEventListener(Event.ENTER_FRAME);
                                objectpool6.push(this);
                                
                        }
                     return;              
                }              
            }
            if(isOutside2(this)){
                this.centerX = 0;
                this.centerY = 0;
                this.moveX = 0;
                this.moveY = 0;
                     this.clearEventListener(Event.ENTER_FRAME);
                    objectpool6.push(this);
                return;
            }
         
            this.centerX += this.moveX;
            this.centerY += this.moveY;
            return;
    });
    
         
        return false;
    }
    var laseroset = function(x,y){
        
        if (laseros.length == 0) return;
        var lasero = laseros.pop();
        lasero.centerY = playerEntityGroup.centerY+y;
        lasero.on(Event.ENTER_FRAME, function () {
            lasero.centerY = playerEntityGroup.centerY+y
            lasero.centerX = playerEntityGroup.centerX;
            for (var enemy of enemyGroup.childNodes){
                if (this.intersect(enemy)&& enemy.centerY>30) { 
                    enemy.centerX  =0;
                    enemy.centerY = 0;
                    enemy.hp = 3;
                    enemy.clearEventListener(Event.ENTER_FRAME);
                    objectpool5.push(enemy)
                     return;              
                }              
            }
            for (var enemy2 of enemy2Group.childNodes){
                if (this.intersect(enemy2)&& enemy2.centerY>30) { 
                   enemy2.hp-=5;
                    if(enemy2.hp<=0){
                 
                        enemy2.centerX  =0;
                        enemy2.centerY = 0;
                        enemy2.hp = 1000;
                        enemy2.clearEventListener(Event.ENTER_FRAME);
                        objectpool7.push(enemy2)
                        
                        }else{
                            this.centerX = 0;
                            this.centerY = 0;
                            this.moveX = 0;
                            this.moveY = 0;
                              this.clearEventListener(Event.ENTER_FRAME);
                               laseros.push(this);
                                
                        }
                     return;              
                }              
            }
            if(isOutside2(this)||shotpatern == 1){
                this.centerX = 0;
                this.centerY = 0;
                this.moveX = 0;
                this.moveY = 0;
                     this.clearEventListener(Event.ENTER_FRAME);
                    laseros.push(this);
                return;
            }
         
            this.centerX += this.moveX;
            this.centerY += this.moveY;
            return;
    });
    
         
        return false;
    }
    var radian = 0;
    var del = 0;
    
      for (var a = 0; a <= 256; a++) {
        var tamakawa = new Sprite(9, 9);
        // tamakawa.image = core.assets.enemybullet;
        tamakawa.image = core.assets.rba3;
        tamakawa.centerX = 5;
        tamakawa.centerY = 5;
        tamakawa.moveX = 0;
        tamakawa.moveY = 0;
        // tamakawa.tl.fadeTo(0, 0);
        tamakawaGroup.addChild(tamakawa);
        objectpool2.push(tamakawa);
        tamakawa.on(Event.ENTER_FRAME, function () {

            this.centerX += this.moveX;
            this.centerY += this.moveY;

            if (this.centerY > 540 || this.centerY < -0 || this.centerX > scene.width || this.centerX < 0) {
                this.centerX = 5;
                this.centerY = 5;
                this.moveX = 0;
                this.moveY = 0;

                objectpool2.push(this);
                // gameClear();
            }
            if (this.intersect(playerEntityGroup) ) {
                this.centerX = 5;
                this.centerY = 5;
                this.moveX = 0;
                this.moveY = 0;
                objectpool2.push(this);
            }
            if(this.intersect(bomb)){
                this.centerX = 5;
                this.centerY = 5;
                this.moveX = 0;
                this.moveY = 0;
                objectpool2.push(this);
            }
            if(this.intersect(baria)){
                this.centerX = 5;
                this.centerY = 5;
                this.moveX = 0;
                this.moveY = 0;
                objectpool2.push(this);
            }
        });
        var tamakawab = new Sprite(9, 9);
        // tamakawa.image = core.assets.enemybullet;
        tamakawab.image = core.assets.bbl;
        tamakawab.centerX = 5;
        tamakawab.centerY = 5;
        tamakawab.moveX = 0;
        tamakawab.moveY = 0;
        // tamakawa.tl.fadeTo(0, 0);
        tamakawaGroup.addChild(tamakawab);
        objectpool3.push(tamakawab);
        tamakawab.on(Event.ENTER_FRAME, function () {

            this.centerX += this.moveX;
            this.centerY += this.moveY;

            if (this.centerY > 540 || this.centerY < -0 || this.centerX > scene.width || this.centerX < 0) {
                this.centerX = 5;
                this.centerY = 5;
                this.moveX = 0;
                this.moveY = 0;

                objectpool3.push(this);
                // gameClear();
            }
            if (this.intersect(playerEntityGroup) ) {
                this.centerX = 5;
                this.centerY = 5;
                this.moveX = 0;
                this.moveY = 0;
                objectpool3.push(this);
            }
            if(this.intersect(bomb)){
                this.centerX = 5;
                this.centerY = 5;
                this.moveX = 0;
                this.moveY = 0;
                objectpool3.push(this);
            }
            if(this.intersect(baria)){
                this.centerX = 5;
                this.centerY = 5;
                this.moveX = 0;
                this.moveY = 0;
                objectpool3.push(this);
            }
        });
        var kome = new Sprite(5, 13);
        // kome.image = core.assets.enemybullet;
        kome.image = core.assets.kome;
        kome.centerX = 120;
        kome.centerY = 0;
        kome.moveX = 0;
        kome.moveY = 0;
        kome.rotation  = 0;
        kome.scale (1.2,1.2);
        // kome.tl.fadeTo(0, 0);
        tamakawaGroup.addChild(kome);
        komes.push(kome);
        kome.on(Event.ENTER_FRAME, function () {

            this.centerX += this.moveX;
            this.centerY += this.moveY;

            if (this.centerY > 560 || this.centerY < -20 || this.centerX > scene.width || this.centerX < 0) {
                this.centerX = 120;
                this.centerY = 50;
                this.moveX = 0;
                this.moveY = 0;
                 this.rotation  = 0;
                komes.push(this);
                // gameClear();
            }
            if (this.intersect(playerEntityGroup) ) {
                this.centerX = 120;
                this.centerY = 50;
                this.moveX = 0;
                this.moveY = 0;
                this.rotation  = 0;
                komes.push(this);
            }
            if(this.intersect(bomb)){
                this.centerX = 120;
                this.centerY = 50;
                this.moveX = 0;
                this.moveY = 0;
                this.rotation  = 0;
                komes.push(this);
            }
            if(this.intersect(baria)){
                this.centerX = 120;
                this.centerY = 50;
                this.moveX = 0;
                this.moveY = 0;
                this.rotation  = 0;
                komes.push(this);
            }
        });
        var aokome = new Sprite(5, 13);
        // kome.image = core.assets.enemybullet;
        aokome.image = core.assets.aokome;
        aokome.centerX = 100;
        aokome.centerY = 0;
        aokome.moveX = 0;
        aokome.moveY = 0;
        aokome.rotation  = 0;
        aokome.scale (1.2,1.2);
        // kome.tl.fadeTo(0, 0);
        tamakawaGroup.addChild(aokome);
       aokomes.push(aokome);
        aokome.on(Event.ENTER_FRAME, function () {

            this.centerX += this.moveX;
            this.centerY += this.moveY;

            if (this.centerY > 560 || this.centerY < -10 || this.centerX > scene.width || this.centerX < 0) {
                this.centerX = 100;
                this.centerY = 50;
                this.moveX = 0;
                this.moveY = 0;
                 this.rotation  = 0;
               aokomes.push(this);
                // gameClear();
            }
            if (this.intersect(playerEntityGroup) ) {
                this.centerX = 100;
                this.centerY = 50;
                this.moveX = 0;
                this.moveY = 0;
                this.rotation  = 0;
               aokomes.push(this);
            }
            if(this.intersect(bomb)){
                this.centerX = 100;
                this.centerY = 50;
                this.moveX = 0;
                this.moveY = 0;
                this.rotation  = 0;
               aokomes.push(this);
            }
            if(this.intersect(baria)){
                this.centerX = 100;
                this.centerY = 50;
                this.moveX = 0;
                this.moveY = 0;
                this.rotation  = 0;
               aokomes.push(this);
            }
        });
        // var middletama = new Sprite(15, 15);
        // // tamakawa.image = core.assets.enemybullet;
        // middletama.image = core.assets.bblbig;
        // middletama.centerX = 5;
        // middletama.centerY = 5;
        // middletama.moveX = 0;
        // middletama.moveY = 0;
        // // tamakawa.tl.fadeTo(0, 0);
        // middletamaGroup.addChild(middletama);
        //  middlebullet.push(middletama);
        // middletama.on(Event.ENTER_FRAME, function () {

        //     this.centerX += this.moveX;
        //     this.centerY += this.moveY;

        //     if (isOutside2(this)) {
        //         this.centerX = 5;
        //         this.centerY = 5;
        //         this.moveX = 0;
        //         this.moveY = 0;

        //         middlebullet.push(this);
        //         // gameClear();
        //     }
        //     if (this.intersect(playerEntityGroup) ) {
        //         this.centerX = 5;
        //         this.centerY = 5;
        //         this.moveX = 0;
        //         this.moveY = 0;
        //         middlebullet.push(this);
        //     }
        // });
    
    }
    
    for (var a = 0; a <= 42; a++) {
//         var shots = new Sprite(33,20);
//    shots.image = core.assets.bullet;
//     shots.centerX = 0;
//     shots.centerY = 0;
//         shots.moveX = 0;
//         shots.moveY = 0;   
//          shotGroup.addChild(shots);
//         objectpool4.push(shots);
    var laser = new Sprite(59,40);
    laser.image = core.assets.laser;
    laser.centerX = 0;
    laser.centerY = 0;
        laser.moveX = 0;
        laser.moveY = 0;   
         laserGroup.addChild(laser);
        objectpool6.push(laser);
      
        var enemy = new Sprite(32,32);
        enemy.image = core.assets.enemy1;
        enemy.centerX = 0
        enemy.centerY = 0
        enemyGroup.addChild(enemy);
        objectpool5.push(enemy)

        var enemy2 = new Sprite(32,32);
        enemy2.image = core.assets.enemy2;
        enemy2.centerX = 0
        enemy2.centerY = 0
        enemy2Group.addChild(enemy2);
        objectpool7.push(enemy2)
        
        var enemy3 = new Sprite(32,32);
        enemy3.image = core.assets.enemy2;
        enemy3.centerX = 0
        enemy3.centerY = 0
        enemy3Group.addChild(enemy3);
        objectpool8.push(enemy3)


        }
        // for (var a = 0; a <= 6; a++) {
    //         var shotss = new Sprite(33,20);
    //    shotss.image = core.assets.bullet;
    //     shotss.centerX = 0;
    //     shotss.centerY = 0;
    //         shotss.moveX = 0;
    //         shotss.moveY = 0;   
    //          shotGroup.addChild(shotss);
    //         shotsse.push(shotss);
        // }
        var lasero = new Sprite(69,21);
        lasero.image = core.assets.lasero;
        lasero.centerX = 0;
        lasero.centerY = 0;
            lasero.moveX = 0;
            lasero.moveY = 0;   
             laserGroup.addChild(lasero);
            laseros.push(lasero);
            for (var a = 0; a <= 7; a++) {
             var shots = new Sprite(33,20);
             shots.image = core.assets.bullet;
             shots.centerX = 0;
             shots.centerY = 0;
             shots.moveX = 0;
             shots.moveY = 0;   
             shotGroup.addChild(shots);
             shot1.push(shots);
             var shots = new Sprite(33,20);
             shots.image = core.assets.bullet;
             shots.centerX = 0;
             shots.centerY = 0;
             shots.moveX = 0;
             shots.moveY = 0;   
             shotGroup.addChild(shots);
             shot2.push(shots);
             var shots = new Sprite(33,20);
             shots.image = core.assets.bullet;
             shots.centerX = 0;
             shots.centerY = 0;
             shots.moveX = 0;
             shots.moveY = 0;   
             shotGroup.addChild(shots);
             shot3.push(shots);
             var shots = new Sprite(33,20);
             shots.image = core.assets.bullet;
             shots.centerX = 0;
             shots.centerY = 0;
             shots.moveX = 0;
             shots.moveY = 0;   
             shotGroup.addChild(shots);
             shot4.push(shots);
             var shots = new Sprite(33,20);
             shots.image = core.assets.bullet;
             shots.centerX = 0;
             shots.centerY = 0;
             shots.moveX = 0;
             shots.moveY = 0;   
             shotGroup.addChild(shots);
             shot5.push(shots);
             var shots = new Sprite(33,20);
             shots.image = core.assets.bullet;
             shots.centerX = 0;
             shots.centerY = 0;
             shots.moveX = 0;
             shots.moveY = 0;   
             shotGroup.addChild(shots);
             shot6.push(shots);
            }


    // scene.tl.delay();
    // back.tl.delay(400);
  
        // floor4Start();
        // enemyGroup.remove();
        // enemyShotGroup.remove();
      
        // target.remove();
      
        // スクロールが終わったらボス出現



    var playerEntityGroup = new EntityGroup(3, 3);
    playerEntityGroup.centerX = 180;
    playerEntityGroup.centerY = 420;
    playerGroup.addChild(playerEntityGroup);
    var player = new Sprite(5, 3);
    player.image = core.assets.player;
    player.backgroundColor = "000000"
    player.centerX = 160;
    player.centerY = 280;
    player.tl.fadeTo(0, 0)
    player.on(Event.ENTER_FRAME, function () {
        this.centerX = playerEntityGroup.centerX;
        this.centerY = playerEntityGroup.centerY;
    });
    // player.scale(5, 4);

    stage.addChild(player);
    // player.tl.fadeTo(1, 0);
    var player2 = new Sprite(29, 24);
    player2.image = core.assets.player2;

    player2.centerX = playerEntityGroup.centerX;
    player2.centerY = playerEntityGroup.centerY;
    // player2.tl.fadeTo(0, 0)
    playerGroup.addChild(player2);
    player2.on(Event.ENTER_FRAME, function () {
        this.centerX = playerEntityGroup.centerX;
        this.centerY = playerEntityGroup.centerY;
    });
    // player2.scale(0.7, 0.6);

    // player2.tl.fadeTo(0.1, 0);


   var bframe = 0;
   var inbframe = 0;
 var one = 0;
    // player2.tl.fadeTo(0.1, 0);
    // TODO: ➂プレイヤーの中心オブジェクト作成
    var playerCenter = new Sprite(1, 1);
    playerCenter.centerX = 32 / 2;
    playerCenter.centerY = 32 / 2;
    playerEntityGroup.addChild(playerCenter);


    shotpatern = 1;
var bomb = new Sprite(341,341);
bomb.image =core.assets.bomb;
bomb.centerX = -200;
bomb.centerY = -200;
bomb.frame = 0;
bomb.tl.fadeTo(0.7,0);
stage.addChild(bomb);
var baria = new Sprite(31,31);
baria.image = core.assets.aura;
baria.centerX = -200;
baria.centerY = -200;
baria.frame = 0;
stage.addChild(baria);
baria.tl.fadeTo(0.6,0);
baria.scale(2.0,2.0)
    // if (shot == 0 ) return;
    // if (shotGroup.childNodes.length > 24) return;
    // if (this.age%3 != 0)return;
 


    // bullet();   
  
        player.on(Event.ENTER_FRAME, function () {  
            // console.log(bmtime,inb,bombs,komes.length,aokomes.length);
            if(bmtime>0){
                bmtime-=1;
                bframe +=1
                bomb.centerX= scene.width/2;
                bomb.centerY = scene.height/2;
                if(bframe==2){
                    bframe=0;
                    if(bomb.frame==3){
                        bomb.frame = 0
                    }else{
                    bomb.frame+=1
                }
                }
            }else{
                bomb.centerX = -200;
                bomb.centerY = -200;
            }
            if(inb>0){
                inb -=1;
                inbframe +=1
                baria.centerX= player.centerX;
                baria.centerY = player.centerY;
                if(inbframe==2){
                    inbframe=0;
                    if(baria.frame==1){
                        baria.frame = 0
                    }else{
                    baria.frame+=1
                }
                }
            }else{
                baria.centerX = -200;
                baria.centerY = -200;
            }

            // console.log(objectpool5.length,objectpool4.length);
         if (shot == 0) return;
        //  if (objectpool4.length <= 1) return;
          
        //    for (var a = 1; a <= 36; a++) {
            if (shotpatern == 1){ 
                if (this.age%2 != 0)return;
     
     shotset(-48,10,-2,-9,0);
     shotset2(48,10,2,-9,0);
     shotset3(-16,0,0,-9,0);
     shotset4(16,0,0,-9,0);
     shotset5(-74,30,-3,-9,0);
     shotset6(74,30,3,-9,0);
            }else if(shotpatern == 2){
                if (this.age%2 != 0)return;
     laserset(0,-3,0,-15,0);
     laseroset(0,-5)
            }
    });
   
    




    // var playerCenter = new Sprite(4, 4);
    // playerCenter.centerX = 16;
    // playerCenter.centerY = 16;
    // playerEntityGroup.addChild(playerCenter);
    // playerCenter.addCollision(stairsDown);

    // player.addCollision(itemGroup);

    core.keybind("88", "x");
    core.keybind("90", "z");
    core.keybind("67", "c");
    keyflag = true;
    var bombs = 3;
    let time = 0;
    var bmtime = 0;
    var ctlA = 0;
    shot = 0;
    var ctlB = 0;
    var ctlC = 0;
    var ctlX = 0;
    var ctlY = 0;
    var inb = 0;
    player.on(Event.ENTER_FRAME, function () {
        // console.log(shot,shotpatern,enemy2.hp);
        if (core.input.c == true && core.input.z== false&&bmtime == 0) {
            shot = 1;
        } else {
            shot = 0;
        }
     
        if (core.input.z == true || ctlA == 1&&bmtime == 0) {
            if (shotpatern == 1) {
                shotpatern += 1;
            } else if (shotpatern == 3) {
                shotpatern += 1;
            }
            shot = 1;
        }else{  
            if (shotpatern == 2) {
            shotpatern -= 1;
        } else if (shotpatern == 4) {
            shotpatern -= 1;
        }

        }
        if (core.input.left && player2.x > 0) {
            if (core.input.z == true) {
                playerEntityGroup.x = playerEntityGroup.x - 1.5;
            } else {
                playerEntityGroup.x = playerEntityGroup.x - 3;
            }

        }
        if (ctlX == -1 && player2.x > 0) {
            if (shotpatern == 2 || shotpatern == 4) {
                playerEntityGroup.x = playerEntityGroup.x - 1.2;
            } else {
                playerEntityGroup.x = playerEntityGroup.x - 3;
            }

        }
        if (core.input.right && player2.x < scene.width - 28) {
            if (core.input.z == true) {
                playerEntityGroup.x = playerEntityGroup.x + 1.5;
            } else {
                playerEntityGroup.x = playerEntityGroup.x + 3;
            }

        }
        if (ctlX == 1 && player2.x < scene.width - 28) {
            if (shotpatern == 2 || shotpatern == 4) {
                playerEntityGroup.x = playerEntityGroup.x + 1.2;
            } else {
                playerEntityGroup.x = playerEntityGroup.x + 3;
            }

        }
        if (core.input.up && player2.y > 0) {
            if (core.input.z == true) {
                playerEntityGroup.y = playerEntityGroup.y - 1.5;

            } else {
                playerEntityGroup.y = playerEntityGroup.y - 3;

            }
        }
        if (ctlY == 1 && player2.y > 0) {
            if (shotpatern == 2 || shotpatern == 4) {
                playerEntityGroup.y = playerEntityGroup.y - 1.2;

            } else {
                playerEntityGroup.y = playerEntityGroup.y - 3;

            }
        }
        if (core.input.down && player2.y < 456) {

            if (core.input.z == true) {
                playerEntityGroup.y = playerEntityGroup.y + 1.5;

            } else {
                playerEntityGroup.y = playerEntityGroup.y + 3;

            }
        }
        if (ctlY == -1 && player2.y < 456) {

            if (shotpatern == 2 || shotpatern == 4) {
                playerEntityGroup.y = playerEntityGroup.y + 1.2;

            } else {
                playerEntityGroup.y = playerEntityGroup.y + 3;

            }

        };
if(core.input.x == true&& bmtime == 0 && inb == 0 &&bombs>0){
bmtime = 120;
inb = 180;
bombs -= 1;
}
        // if (this.age % 3 !== 0) {
        // }

        //     if (shot2 == 1) {
        //         this.shot2();
        //     }
        //     if (shot == 1) {
        //         this.shot();
        //     }
        //     // }
    });

    // 定期的に敵が出現する
 
  var enemyx=330;
var count = 0;
var patern = 0;
var counter = 0;
var rads2 = 1;
var rads = 1;
var angle = 0;
var delay =0;
var rad =0;
                    var rad2 =0;
                    var rad3 = 0;
                    var phase = 0;
                    var deal = 0
                    var c =0
                    var enemyx = 0;
    scene.tl.then(function () {
      if(count>0){
        count-=1;
      }else{
          patern += 1;
      }
        //     if(objectpool5.length<=70||count>0||enemies.length ==0)return;
        // var enemy = objectpool5.pop();
        //  enemyx =enemies.pop();
        // enemy.centerX = enemyx;
       
        // enemy.centerY =20;
        // enemy.hp =5;  
      
        enemy.on(Event.ENTER_FRAME,function(){
                // this.centerY += 1.5; 
              
                
            if(counter>=1){
               
counter -= 1;
            }   
                a = 0; 
                b = 0;
                c = 0;
                if (a >= 0 && b <= 0) {
                    c = 1 + b; + Math.abs(a);
                } else {
                    c = b + Math.abs(a);
                }
            
                for (i = a; i <= b; i++) {
           if (this.age % 12 == 0 ){return;

                if (objectpool2.length <= 10 || enemy.centerY>330||komes.length<=10) return;
            //    tama = objectpool2.pop();
            //     tama.centerX = this.centerX;
            //     tama.centerY = this.centerY;
            //     // radian = 0;
            //     radian = Math.atan2(tama.centerY - playerEntityGroup.y, tama.centerX - playerEntityGroup.x);
            //     angle = radian / (Math.PI / 180) + 180;
            //     // 距離と角度から座標 
            //     angle += (45/c)*i;
            //     tama.moveX = 6 * Math.cos(angle * (Math.PI / 180));
            //     tama.moveY = 6 * Math.sin(angle * (Math.PI / 180));
            //  }   
             
            kome = komes.pop();
            kome.centerX = this.centerX;
            kome.centerY = this.centerY;
            // radian = 0;
            radian = Math.atan2(kome.centerY - playerEntityGroup.y, kome.centerX - playerEntityGroup.x);
            angle = radian / (Math.PI / 180) + 180;
            // 距離と角度から座標 
            angle += (45/c)*i;
            kome.rotation = angle-90;
            kome.moveX = 6 * Math.cos(angle * (Math.PI / 180));
            kome.moveY = 6 * Math.sin(angle * (Math.PI / 180));
         }   
         
            }  
               if (isOutside(this)) { 
                    this.centerX = 0;
                    this.centerY = 0; 
                     this.clearEventListener(Event.ENTER_FRAME);
                        objectpool5.push(this); 
                        enemies.push(enemy.centerX);
                           return;
                    }
                });
                if(patern==10){
                    delay +=20;
                     count += 2000005;
                     deal = 4; 
                   patern = 0;
                    
                    var enemy2 = objectpool7.pop();
                    enemy2.centerX =180;
                    enemy2.centerY =50;
                    enemy2.hp =750;
                    var rad4 = 0;
                   var rad=0;
                   var phase = 0;
                    // patern += 1;
                    enemy2.on(Event.ENTER_FRAME,function(){
                            // this.centerY += 2;  
                             if (this.age % 45 == 0 ){
                            // if(delay>=1){
                            //     delay-=1;
                            // }else{
                            //     delay =4;
                            //     rad3 += 6;
                            //     rad2+=90;
                               
                            //     phase+=1;
                            //      if(rad2>360){
                            //         rad2 = 90                               }
                            //     if(rad3>360){
                            //         rad3 = 0;
                            //     }
                            //     if(rad4>360){
                            //         rad4 = 0;
                            //     }
                            // }
                            // console.log(delay,rad2);
                            if (middlebullet.length <= 10 || enemy2.centerY>300) return;
                         
                            // if(rad>deal){
                            //     rad =0;
                            // }
                            // // if(rad2>12){
                            //     rads2 = -1;
                            // }else if(rad2<-12){
                            //     rads2 = 1;
                            // }
                                  if(rad>360){
                    rad=1;  
                         rad4 += 8
        
                          }
                          phase+=1;
                            rad+=9;
                            // rad2+=rads2;
                        
                            // angle = rad3*6 ;
                            this.centerX = enemy2.centerX;
                            this.centerY = enemy2.centerY;
                            Random = random(0,360)
                            a = -32;
                            b = 32;
                            c = 0;
                            if (a >= 0 && b <= 0) {
                                c = 1 + b; + Math.abs(a);
                            } else {
                                c = b + Math.abs(a);
                            }

                            for (i = a; i <= b; i++) {
                            if (enemy2.centerY>300||komes.length>=10){
                            // if(delay<=deal){
                        //    tamakawa= objectpool2.pop();
                        //     tamakawa.centerX = this.centerX;
                        //     tamakawa.centerY = this.centerY;
                          
            kome = komes.pop();
            kome.centerX = this.centerX+80;
            kome.centerY = this.centerY+20;
                            // radian = 0;
                            // radian = Math.atan2(tama.centerY - playerEntityGroup.y, tama.centerX - playerEntityGroup.x);
                            // angle = radian / (Math.PI / 180) + 180;
                            // 距離と角度から座標 
                            // angle = (360/c)*i+rad+rad4;
                            // angle = (360/c)*i+rad*(360/62)+random(-10,10)+rad4;
                            //  angle = (360/c)*i+random(0,360); 
                            //  angle = (360/c)*i+random(0,360);
                            angle = (360/c)*i+Random
                            kome.rotation = angle-90;
                          
                            // angle = (360/c)*i+rad*1+rad2*1+90+rad3;
                            // tamakawa.moveX = 7 * Math.cos(angle * (Math.PI / 180));
                            // tamakawa.moveY = 7  * Math.sin(angle * (Math.PI / 180));
                            Random = random(200,600)
                            kome.moveX = Random/100 * Math.cos(angle * (Math.PI / 180));
                            kome.moveY = Random/100  * Math.sin(angle * (Math.PI / 180));
                            
                        //  }   
                        }  
                           if (isOutside(this)) { 
                                this.centerX = 0;
                                this.centerY = 0; 
                                 this.clearEventListener(Event.ENTER_FRAME);
                                    objectpool7.push(this); 
                                       return;
                                }
                            }
                                Random= random(0,360);
                                a = -32;
                                b = 32;
                                c = 0;
                                if (a >= 0 && b <= 0) {
                                    c = 1 + b; + Math.abs(a);
                                } else {
                                    c = b + Math.abs(a);
                                }
                                
                                for (i = a; i <= b; i++) {
                                    if (aokomes.length <= 10 || enemy2.centerY>300) return;
                                    if( phase>12){
                                //    tamakawab= objectpool3.pop();
                                //     tamakawab.centerX = this.centerX;
                                //     tamakawab.centerY = this.centerY;
                                aokome = aokomes.pop();
                                
                                aokome.centerX = this.centerX-80;
                                aokome.centerY = this.centerY+20;
                                    // radian = 0;
                                    // radian = Math.atan2(tama.centerY - playerEntityGroup.y, tama.centerX - playerEntityGroup.x);
                                    // angle = radian / (Math.PI / 180) + 180;
                                    // angle = (360/c)*i-rad-rad4;
                                    // 距離と角度から座標 
                                    // angle = (360/c)*i-rad*(360/62)+random(-10,10)-rad4;
                                    // angle = (360/c)*i+random(0,360);
                                    // angle = (360/c)*i-random(0,360);
                                    angle = (360/c)*i-Random;
                                    aokome.rotation = angle-90;
                                    // angle = (360/c)*i-rad*1-rad2*1+90-rad3;
                                    // tamakawab.moveX = 7 * Math.cos(angle * (Math.PI / 180));
                                    // tamakawab.moveY = 7  * Math.sin(angle * (Math.PI / 180));
                                    Random = random(200,600)
                                    aokome.moveX = Random/100 * Math.cos(angle * (Math.PI / 180));
                                    aokome.moveY = Random/100  * Math.sin(angle * (Math.PI / 180));
                                    
                                 }   
                                }  
                                   if (isOutside(this)) { 
                                        this.centerX = 0;
                                        this.centerY = 0; 
                                         this.clearEventListener(Event.ENTER_FRAME);
                                            objectpool7.push(this); 
                                               return;
                                        }
                            }
                        }); 
                    }
   

        
           // マガジンに戻す
        //    this.centerX = Math.random() * 10;// とりま画面の左上
        //    this.centerY = Math.random() * 10;
        //    this.moveX = 0;// 速度も0に!!
        //    this.moveY = 0;
        //    enemy.clearEventListener(Event.ENTER_FRAME);
        //    objectpool5.push(this);// マガジンに戻す
       
   }); 
   scene.tl.delay(15); 
        scene.tl.loop();
        // enemyGroup.addChild(enemy);// グループに追加
   
    
   
     
// enemy.tl.then(function(){
// // enemyshot();
// count+=1;
// console.log (count);
// });
// enemy.tl.delay(10);
// enemy.tl.loop();

        // // TODO: [ctrl]+[Shift]+[F]で[enemies]を検索してみましょう
        // // データの先頭を１件取り出して末尾に追加する
        // // TODO: インターネットで３つのキーワード[javascript array shift]で検索してみましょう
        // var enemyData = enemies.shift();
        // // TODO: インターネットで３つのキーワード[javascript array push]で検索してみましょう
        // enemies.push(enemyData);
        // // TODO: enemyDataの中をコンソールで確認しましょう
        // // console.log(shotpatern);
        // // 敵
        // // TODO: [ctrl]+[Shift]+[F]で[createEnemy]を検索してみましょう
        // var enemy = createEnemy[enemyData.type](enemyData);

        // enemyGroup.addChild(enemy);



        //    enemy.hp=20
        //     enemy.on(Event.ENTER_FRAME, function () {
        //         if (this.intersect(shots)){
               
        // });
        // if (this.item) {
            // for (var i = -1; i <= 1; i++) {
        //     var item = new Sprite(30, 48);
        //     item.image = core.assets.item2;
        //     item.x = this.x;
        //     item.y = this.y;
        //     itemGroup.addChild(item);
        //     // item.tl.fadeTo(0.5, 0)
        //     // item.scale(2, 2)
        //     // TODO: [ctrl]+[Shift]+[F]で「repeatOneByOne」を検索してみましょう
        //     item.frame = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].repeatOneByOne(2);
        //     item.on(Event.ENTER_FRAME, function () {

        //         if (core.input.x == false && core.input.z == false && core.input.c == false) {
        //             var radian = Math.atan2(item.y - playerEntityGroup.y, item.x - playerEntityGroup.x);
        //             var angle = radian / (Math.PI / 180) + 180;
        //             // 距離と角度から座標
        //             // angle += i * 0;
        //             item.moveX = 1 * Math.cos(angle * (Math.PI / 180));
        //             item.moveY = 1 * Math.sin(angle * (Math.PI / 180));

        //             item.on(Event.ENTER_FRAME, function () {

        //                 this.x += this.moveX;
        //                 this.y += this.moveY;


        //                 if (this.y > 580) this.remove();
        //                 if (this.y < -0) this.remove();
        //                 if (this.x > scene.width) this.remove();
        //                 if (this.x < 0) this.remove();

        //             });
        //         } else { this.y += 7; }
        //     })
        // if (this.y > 340) this.remove();

        // }
        // }
        // this.remove();
        // e.collision.target.remove();
        // });

   
        
    



  
    gamepad.init();// Initialize
    // HACK: フォントを変えてみましょう
    // style.css の font-family に指定されている文字列を設定してみましょう
    // 得点表示
    var scoreLabel = new Label();
    scoreLabel.width = 90;
    scoreLabel.x = 220;
    scoreLabel.y = 10;
    scoreLabel.font = "14px Robot";
    scoreLabel.color = "white";
    scoreLabel.textAlign = "right";
    scoreLabel.score = 6000;
    scoreLabel.text = 0;
    scoreLabel.addScore = function (score) {
        this.score = this.score + score;
        scoreLabel.text = this.score;
    }
    scene.addChild(scoreLabel);

    var scoreLabel2 = new Label();
    scoreLabel2.width = 90;
    scoreLabel2.x = 60;
    scoreLabel2.y = 10;
    scoreLabel2.font = "14px Robot";
    scoreLabel2.color = "white";
    scoreLabel2.textAlign = "right";
    scoreLabel2.score = 0;
    scoreLabel2.text = 0;
    scoreLabel2.addScore = function (score2) {
        this.score = this.score + score2;
        scoreLabel2.text = this.score;
    }
    scene.addChild(scoreLabel2);


    // scene.addChild(bombers);

}

        // TODO: オリジナル制作について
        // 1. 背景、自機、敵機を変えましょう
        // 2. 敵機の種類を増やしてみましょう
        // 3. アイテム取得時の変化を考えてみましょう
        // 4. ステージ２を作ってみましょう
