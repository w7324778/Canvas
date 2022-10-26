class RoundItem {
    //写在constructor 中的方法在new实例化的时候改变this指向，每个方法都不一样
    //反正会挂载到原型上，因此不同的实例对象都是调用了一个方法
    constructor(index,x,y,content) {
        this.x = x
        this.y = y
        this.r = Math.random()*2+1
        this.content = content
        let alpha = (Math.floor(Math.random()*10)+1) / 10 /2
        this.color = `rgba(225,255,255,${alpha})`
        this.draw = function() {
            this.content.fillStyle = this.color;
            this.content.shadowBlur = this.r * 2;
            this.content.beginPath();
            this.content.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
            this.content.closePath();
            this.content.fill();
        }
        this.move = function() {
            this.y = 0.15
            // if(this.y<=-10) {
            //     this.y = 
            // }
        }
    }
    //写在constructor外面的函数会挂载到原型上，不同实力对象调用该方法都是调用一个
    // draw(content) {
    //     content.fillStyle = this.color;
    //     content.shadowBlur = this.r * 2;
    //     content.beginPath();
    //     content.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    //     content.closePath();
    //     content.fill();
    // }
}
function init(initObj) {
    const {initRoundPopulation,round,WIDTH,HEIGHT,content} = initObj
    for(var i = 0; i < initRoundPopulation; i++ ){
        round[i] = new RoundItem(i,Math.random() * WIDTH,Math.random() * HEIGHT,content);
        round[i].draw();
    }

}
export default {
    init
}