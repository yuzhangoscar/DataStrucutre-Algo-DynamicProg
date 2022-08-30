const ninjaCollection = new Map();

const ninjaOne = {name: "hanzo"};
const ninjaTwo = {name: "Juzo"};

ninjaCollection.set(ninjaOne, {hometown: "Tokyo"});
ninjaCollection.set(ninjaTwo, {hometown: "Kyoto"});

console.log(ninjaCollection);