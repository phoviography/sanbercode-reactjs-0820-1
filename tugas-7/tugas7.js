// //soal 1
class Animal {
    constructor(name) {
        this._name = name
        this._legs = 4
        this._cold_blooded = false
    }
    get name() {
        return this._name
    }
    get legs() {
        return this._legs
    }
    get cold_blooded() {
        return this._cold_blooded
    }
}

let sheep = new Animal("shaun");

console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

class Ape extends Animal {
    constructor(name) {
        super(name);
    }
    yell() {
        return `${this.name} Auoooooo`
    }
}

let sungokong = new Ape("kera sakti")
console.log(sungokong.yell()) // "Auooo"

class Frog extends Animal {
    constructor(name) {
        super(name);
    }
    jump() {
        return `${this.name} hop hop hop`
    }
}

let kodok = new Frog("buduk")
console.log(kodok.jump()) // "hop hop" 

// //soal 2
class Clock {
    constructor({template}) {
        this._template = template;
    }
    render = () => {
        var date = new Date();

        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        var output = this._template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output)
    }
    stop() {
        clearInterval(this._timer)
    }
    start() {
        this.render();
        this._timer = setInterval(this.render, 1000)
    }
}

var clock = new Clock({template: 'h:m:s'});
clock.start();

// function Clock({ template }) {

//     let timer;

//     function render() {
//         var date = new Date();

//         var hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;

//         var mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;

//         var secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;

//         var output = template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);

//         console.log(output);
//     }

//     this.stop = function () {
//         clearInterval(timer);
//     };

//     this.start = function () {
//         render();
//         timer = setInterval(render, 1000);
//     };

// }

// let clock = new Clock({ template: 'h:m:s' });
// clock.start();

