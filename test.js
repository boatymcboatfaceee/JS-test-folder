
// const myObj = {r:35,g:255,b:150}

// function makeColor(r,g,b) {
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function() {
//         const {r,g,b} = this;

//     }
//     return color;
// }

// const firstColor = makeColor(35,255,150);
// firstColor.rgb();

// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }

// Color.prototype.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b} )`;
// };

// const color1 = new Color(50, 255, 100)


// class Color {
//     constructor(r, g, b, name) {
//         // this.r = r;
//         this.g = g;
//         this.b = b;
//         this.name = name;
//     }
//     greet() {
//         return `Hello from ${this.name}`
//     }
// }

// let c1 = new Color(255, 50, 100, "tomato")


class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating`
    }
}

class Cat extends Pet {
    constructor(name, age, lives) {
        super(name, age)
        this.lives = lives
    }
    meow() {
        return "MEOWWwwww"
    }
}
