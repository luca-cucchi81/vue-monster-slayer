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
            var max = 10;
            var min = 5;
            var damage = Math.max(Math.floor((Math.random() * max) + 1, min));
            this.monsterHealth -= damage;
            if (this.monsterHealth <= 0) {
                alert('YOU WON')
                this.startedGame = false;
            }

            max = 12;
            min = 7;
            damage = Math.max(Math.floor((Math.random() * max) + 1, min));
            this.playerHealth -= damage;
            if (this.playerHealth <= 0) {
                alert('YOU LOOSE, TRY AGAIN')
                this.startedGame = false;
            }
        },
        specialAttack: function () {
            var max = 25;
            var min = 10;
            var damage = Math.max(Math.floor((Math.random() * max) + 1, min));
            this.monsterHealth -= damage;
            if (this.monsterHealth <= 0) {
                alert('YOU WON')
                this.startedGame = false;
            }
        },
        heal: function () {
            var max = 15;
            var min = 5;
            var damage = Math.max(Math.floor((Math.random() * max) + 1, min));
            this.playerHealth += damage;
            if (this.playerHealth >= 100) {
                this.playerHealth = 100
            }
        },
        giveUp: function(){
            this.startedGame = false;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        }
    },
});
