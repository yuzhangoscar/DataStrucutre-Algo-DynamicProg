const simplePlan = `
.................
..#...........#..
..#.........=.#..
`;

let rows = simplePlan.trim().split('\n').map(l=>[...l]);

console.log(rows);

console.log(Object.prototype.toString.call(rows));