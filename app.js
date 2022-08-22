const approximatelyEqualWithinEpsilon = (a, b, Epsilon = 0.5) => Math.abs(a - b) < Epsilon;

console.log(approximatelyEqualWithinEpsilon(1,1.6));