class Vector {
    constructor(x, y, x1, y1) {
        this.X = x;
        this.Y = y;
        this.X1 = x1;
        this.Y1 = y1;
    }

    dX() {
        return this.X1 - this.X;
    }
    dY() {
        return this.Y1 - this.Y;
    }
    Normalized() {
        var l = this.Length();
        return new Vector(this.X, this.Y, this.X + (this.dX() / l), this.Y + (this.dY() / l));
    }

    Length() {
        return Math.sqrt(Math.pow(this.dX(), 2) + Math.pow(this.dY(), 2));
    }

    Multiply(n) {
        return new Vector(this.X, this.Y, this.X + this.dX() * n, this.Y + this.dY() * n);
    }

    Clone() {
        return new Vector(this.x, this.y, this.X1, this.Y1);
    }

}