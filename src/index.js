import './index.css'
// import RoundItem from './assets/js/Round_item.js'
// let canvas = document.getElementById('canvas')
// let content = canvas.getContext('2d')
// let WIDTH = document.documentElement.clientWidth
// let HEIGHT = document.documentElement.clientHeight
// console.log(WIDTH,HEIGHT)
// canvas.width = WIDTH
// canvas.height = HEIGHT

// const initRoundPopulation =80; 
// const round = []
// RoundItem.init({initRoundPopulation,round,WIDTH,HEIGHT,content})
var ctx = document.getElementById('canvas'),
        content = ctx.getContext('2d'),
        round = [],
        WIDTH,
        HEIGHT,
        initRoundPopulation = 80;


    WIDTH = document.documentElement.clientWidth;
    HEIGHT = document.documentElement.clientHeight;

    ctx.width = WIDTH;
    ctx.height = HEIGHT;

    function Round_item(index, x, y) {
        this.index = index;
        this.x = x;
        this.y = y;
        this.r = Math.random() * 2 + 1;
        var alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2;
        this.color = "rgba(255,255,255," + alpha + ")";
    }

    Round_item.prototype.draw = function () {
        content.fillStyle = this.color;
        content.shadowBlur = this.r * 2;
        content.beginPath();
        content.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        content.closePath();
        content.fill();
    };

    function animate() {
        content.clearRect(0, 0, WIDTH, HEIGHT);

        for (var i in round) {
            round[i].move();
        }
        requestAnimationFrame(animate)
    }

    Round_item.prototype.move = function () {
        this.y -= 0.15;
        if (this.y <= -10) {
            this.y = HEIGHT + 10;
        }
        this.draw();
    };


    function init() {
        for (var i = 0; i < initRoundPopulation; i++) {
            round[i] = new Round_item(i, Math.random() * WIDTH, Math.random() * HEIGHT);
            round[i].draw();
        }
        animate();

    }

    init();