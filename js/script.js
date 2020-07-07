new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        startedGame: false,
    },
    methods: {
        startGame: function(){
            this.startedGame = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function () {
            this.monsterHealth -= this.calculateDamage(5, 10);
            if(this.checkWin()){
                return;
            };
            this.playerHealth -= this.calculateDamage(7, 12);
            this.checkWin();
        },
        specialAttack: function () {
            this.monsterHealth -= this.calculateDamage(30, 15);
            this.checkWin();
            this.playerHealth -= this.calculateDamage(12, 7);
            this.checkWin();
        },
        heal: function () {
            this.playerHealth += this.calculateDamage(20, 10);
            if (this.playerHealth >= 100) {
                this.playerHealth = 100
            }
        },
        giveUp: function(){
            this.startedGame = false;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        calculateDamage: function(min, max) {
            return Math.max(Math.floor((Math.random() * max) + 1, min));
        },
        checkWin: function() {
            if (this.monsterHealth <= 0) {
                if (confirm('YOU WON!! Start a New Game?')){
                    this.startGame();
                }else{
                    this.startedGame = false;
                }
                return true;
            };
            if (this.playerHealth <= 0) {
                if (confirm('YOU LOST!! Start a New Game?')) {
                    this.startGame();
                } else {
                    this.startedGame = false;
                }
                return true;
            }
            return false;    
        }
    },
});
