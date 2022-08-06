class Point {
    z = 9.9;

    constructor(a, b) {
        this.x = a;
        this.y = b;
    }

    updateZ(c) {
        this.z=c;
    }
}

const newPoint = new Point(1,2);
console.log(newPoint.x);
console.log(newPoint.z);
newPoint.updateZ(7.7);
console.log(newPoint.z);
