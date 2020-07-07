new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        startedGame: false,
        turns: []
    },
    methods: {
        startGame: function(){
            this.startedGame = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function () {
            var damage = this.calculateDamage(5, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for:' + ' ' + damage
            });
            if(this.checkWin()){
                return;
            };
            this.monsterDamage();
        },
        specialAttack: function () {
            var damage = this.calculateDamage(15, 30);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heavily hits Monster for:' + ' ' + damage
            });
            this.monsterDamage();
            this.checkWin();
        },
        heal: function () {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
                this.turns.unshift({
                    isPlayer: true,
                    text: 'Player heals himself'
                });
            }else {
                this.playerHealth = 100;
            };
            this.monsterDamage();
        },
        giveUp: function(){
            this.startedGame = false;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        calculateDamage: function(min, max) {
            return Math.max(Math.floor((Math.random() * max) + 1, min));
        },
        monsterDamage: function () {
            var damage = this.calculateDamage(12, 7);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for:' + ' ' + damage
            });
            this.checkWin();
        },
        checkWin: function() {
            if (this.monsterHealth <= 0) {
                if (confirm('YOU WON!! Start a New Game?')){
                    this.startGame();
                }else{
                    this.startedGame = false;
                    this.playerHealth = 100;
                    this.monsterHealth = 100;
                    this.turns = [];
                }
                return true;
            };
            if (this.playerHealth <= 0) {
                if (confirm('YOU LOST!! Start a New Game?')) {
                    this.startGame();
                } else {
                    this.startedGame = false;
                    this.playerHealth = 100;
                    this.monsterHealth = 100;
                }
                return true;
            }
            return false;    
        }
    },
});
