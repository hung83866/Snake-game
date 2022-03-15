const unit = 40;
const snack_color = 'red';
const LEFT = 37;
const UP = 38;
const RIGHT = 39;
const DOWN = 40;


class Vecter2d {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class RandomCircle {
    constructor(x, y, radius, color = 'green') {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    render(canvas) {
        let ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}

class Snack {
    constructor() {
        this.body = [
            new Vecter2d(unit * 10, unit * 11),
            new Vecter2d(unit * 9, unit * 11),
            new Vecter2d(unit * 8, unit * 11)
        ];
        this.head = this.body[0];
        this.speed = new Vecter2d(1, 0)
        this.dir = 'right'
    }

    render(canvas) {
        let ctx = canvas.getContext('2d');
        ctx.beginPath()
        ctx.arc(this.body[0].x, this.body[0].y, unit / 2, 0, 2 * Math.PI, false);
        ctx.fillStyle = snack_color;
        ctx.fill();
        ctx.closePath();
        for (let i = 1; i < this.body.length; i++) {
            ctx.beginPath()
            ctx.arc(this.body[i].x, this.body[i].y, unit / 2, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'white';
            ctx.fill();
            ctx.closePath();
        }
    }

    grow() {
        let snackLength = this.body.length;
        let X = this.body[snackLength - 1].x - this.body[snackLength - 2].x;
        let Y = this.body[snackLength - 1].y - this.body[snackLength - 2].y;

        let newPart = new Vecter2d(X + this.body[snackLength - 1].x, Y + this.body[snackLength - 1].y)
        this.body.push(newPart);
    }

    handLeBound() {
        if (this.head.x < 20) {
            this.head.x = 780;
        }
        if (this.head.x + 20 > 800) {
            this.head.x = -20;
        }
        if (this.head.y < 20) {
            this.head.y = 580;
        }
        if (this.head.y > 580) {
            this.head.y = -20
        }
    }
}




